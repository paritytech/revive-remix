import {CompilerInput} from './types'
import assert from 'assert';

export default function setupReviveMethods (resolc: any): any {
  function generateCompilerError(message) {
    return {
      sources: {},
      errors: [
        {
          component: 'general',
          errorCode: '9999',
          formattedMessage: 'InternalCompilerError: ' + message,
          message: 'InternalCompilerError: ' + message,
          severity: 'error',
          sourceLocation: {
            file: '',
            start: -1,
            end: -1,
          },
          type: 'InternalCompilerError',
        },
      ],
    };
  }

  var compile = function compile(input: CompilerInput, callback: { import: (path: string) => { error: string } } | undefined): string {
    if (callback) {
      assert(typeof callback === 'object', 'Invalid callback object specified.');
    } else {
      callback = {import: function (data) { return { error: 'File import callback not supported'};}}
    }

    var readCallback = callback.import;
    const revive = resolc.createRevive();
    revive.soljson = resolc.Module;
    revive.writeToStdin(input);
    const retVal = revive.callMain(['--standard-json']);
    let result: any;
    if (retVal) {
      let stdErr = revive.readFromStderr();
      result = generateCompilerError(stdErr)
    }
    else {
      let stdOut = revive.readFromStdout()
      result = JSON.parse(stdOut)
    }

    if (result.errors) {
      result.errors.forEach((err) => {
        if (
          err.message &&
          (err.message.includes('File not found') || err.message.includes('File not supplied initially'))
        ) {
          // Modify the messages to notify remix that additional sources are needed
          err.message = err.message.replace(
            /(File not found|File not supplied initially)/,
            'Deferred import',
          );
          err.formattedMessage = err.formattedMessage.replace(
            /(File not found|File not supplied initially)/,
            'Deferred import',
          );
          const match = err.message.match(/Source "(.*?)"/);
          if (match) {
            readCallback(match[1])
          }
        }
      });
    }
    return JSON.stringify(result)
  }

  var license = function license(): string {
    const revive = resolc.createRevive();
    revive.callMain(['--license']);
    return revive.readFromStdout() || revive.readFromStderr();
  }

  var version = function version(): string {
    const version = resolc.Module.cwrap("solidity_version", "string", [])()
    return version
  }

  return {
    version: version,
    license: license,
    compile: compile,
  }
}
