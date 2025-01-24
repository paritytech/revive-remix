import {CompilerInput} from './types'

export default function setupReviveMethods (resolc: any): any {
  var compile = function compile(input: CompilerInput, readCallback: (path: string) => { error: string } | undefined): string {
      const revive = resolc.createRevive();
      revive.soljson = resolc.Module;
      revive.writeToStdin(input);
      revive.callMain(['--standard-json']);

      let result = revive.readFromStdout() || revive.readFromStderr();
      let data = JSON.parse(result);
      if (data.errors) {
        data.errors.forEach((err) => {
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
      return JSON.stringify(data)
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
