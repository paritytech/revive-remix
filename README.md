<p align="center">
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Revive Remix Logo" width="200"/>
</p>
<h3 align="center">Revive Remix</h3>

<div align="center">

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)](CONTRIBUTING.md)
![GitHub](https://img.shields.io/github/license/ethereum/remix-project)

</div>

> **This project is a fork of [Remix IDE](https://github.com/ethereum/remix-project)** by the Ethereum Foundation. It is adapted for use with the Polkadot ecosystem. The original Remix IDE is maintained by the Remix team at [remix.ethereum.org](https://remix.ethereum.org).

## Revive Remix IDE

**Revive Remix IDE** is a smart contract development tool forked from Remix IDE, adapted for the Polkadot ecosystem. It inherits Remix's rich plugin system, intuitive GUI, and support for the full contract development lifecycle.


## Remix libraries 
Remix libraries are essential for Remix IDE's native plugins. Read more about libraries [here](libs/README.md)

## Offline Usage

The `gh-pages` branch of [remix-live](https://github.com/ethereum/remix-live) always has the latest stable build of Remix. It contains a ZIP file with the entire build. Download it to use offline.

Note: It contains the latest supported version of Solidity available at the time of the packaging. Other compiler versions can be used online only.


## Setup

* Install **Yarn** and **Node.js**. See [Guide for NodeJs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Yarn install](https://classic.yarnpkg.com/lang/en/docs/install)<br/>
*Supported versions:*
```bash
"engines": {
    "node": "^20.0.0",
    "npm": "^6.14.15"
  }
```
* Install [Nx CLI](https://nx.dev/using-nx/nx-cli) globally to enable running **nx executable commands**.
```bash
yarn global add nx
```
* Clone the GitHub repository (`wget` need to be installed first):

```bash
git clone https://github.com/ethereum/remix-project.git
```
* Build and Run `remix-project`:

1. Move to project directory: `cd remix-project`
2. Install dependencies: `yarn install` or simply run `yarn`
3. Build Remix libraries: `yarn run build:libs`
4. Build Remix project: `yarn build`
5. Build and run project server: `yarn serve`. Optionally, run `yarn serve:hot` to enable hot module reload for frontend updates.

Open `http://127.0.0.1:8080` in your browser to load Remix IDE locally.

Go to your `text editor` and start developing. The browser will automatically refresh when files are saved.

## Production Build
To generate react production builds for remix-project.
```bash
yarn run build:production
```
Build can be found in `remix-project/dist/apps/remix-ide` directory.

```bash
yarn run serve:production
```
Production build will be served by default to `http://localhost:8080/` or `http://127.0.0.1:8080/`

## Docker:

Prerequisites: 
* Docker (https://docs.docker.com/desktop/)
* Docker Compose (https://docs.docker.com/compose/install/)

### Run with docker

If you want to run the latest changes that are merged into the master branch then run:

```
docker pull remixproject/remix-ide:latest
docker run -p 8080:80 remixproject/remix-ide:latest
```

If you want to run the latest remix-live release run.
```
docker pull remixproject/remix-ide:remix_live
docker run -p 8080:80 remixproject/remix-ide:remix_live
```

### Run with docker-compose:

To run locally without building you only need docker-compose.yaml file and you can run:

```
docker-compose pull
docker-compose up -d
```

Then go to http://localhost:8080 and you can use your Remix instance.

To fetch the docker-compose file without cloning this repo run:
```
curl https://raw.githubusercontent.com/ethereum/remix-project/master/docker-compose.yaml > docker-compose.yaml
```

### Troubleshooting

If you have trouble building the project, make sure that you have the correct version of `node`, `npm` and `nvm`. Also, ensure [Nx CLI](https://nx.dev/using-nx/nx-cli) is installed globally.

Run:

```bash
node --version
npm --version
nvm --version
```

In Debian-based OS such as Ubuntu 14.04LTS, you may need to run `apt-get install build-essential`. After installing `build-essential`, run `npm rebuild`.

## Unit Testing

Run the unit tests using library name like: `nx test <project-name>`

For example, to run unit tests of `remix-analyzer`, use `nx test remix-analyzer`

## Browser Testing

To run the tests via Nightwatch:

 - Install webdrivers for the first time: `yarn install_webdriver`
 - Build & Serve Remix: `yarn serve`

        
**NOTE:**

- **The `ballot` tests suite** requires running `ganache` locally.

- **The `remixd` tests suite** requires running `remixd` locally.

- **The `gist` tests suite** requires specifying a GitHub access token in **.env file**. 
```
    gist_token = <token> // token should have permission to create a gist
```

There is a script to allow selecting the browser and a specific test to run:

```
yarn run select_test
```

You need to have 

- selenium running 

- the IDE running

- optionally have remixd or ganache running

### Splitting tests with groups

Groups can be used to group tests in a test file together. The advantage is you can avoid running long test files when you want to focus on a specific set of tests within a test file.x

These groups only apply to the test file, not across all test files. So for example group1 in the ballot is not related to a group1 in another test file.

Running a group only runs the tests marked as belonging to the group + all the tests in the test file that do not have a group tag. This way you can have tests that run for all groups, for example, to perform common actions.

There is no need to number the groups in a certain order. The number of the group is arbitrary.

A test can have multiple group tags, this means that this test will run in different groups.

You should write your tests so they can be executed in groups and not depend on other groups.

To do this you need to:

- Add a group to tag to a test, they are formatted as #group followed by a number: so it becomes #group1, #group220, #group4. Any number will do. You don't have to do it in a specific order. 

```
  'Should generate test file #group1': function (browser: NightwatchBrowser) {
    browser.waitForElementPresent('*[data-id="verticalIconsKindfilePanel"]')
```

- add '@disabled': true to the test file you want to split:

```
module.exports = {
  '@disabled': true,
  before: function (browser: NightwatchBrowser, done: VoidFunction) {
    init(browser, done) // , 'http://localhost:8080', false)
  },
```
- change package JSON to locally run all group tests:

```
    "nightwatch_local_debugger": "yarn run build:e2e && nightwatch --config dist/apps/remix-ide-e2e/nightwatch.js dist/apps/remix-ide-e2e/src/tests/debugger_*.spec.js --env=chrome",
```

- run the build script to build the test files if you want to run the locally

```
yarn run build:e2e
```

### Locally testing group tests

You can tag any test with a group name, for example, #group10 and easily run the test locally.

- make sure you have nx installed globally
- group tests are run like any other test, just specify the correct group number

#### method 1

This script will give you an options menu, just select the test you want
```
yarn run select_test
```

### Run the same (flaky) test across all instances in CircleCI

In CircleCI all tests are divided across instances to run in parallel. 
You can also run 1 or more tests simultaneously across all instances.
This way the pipeline can easily be restarted to check if a test is flaky.

For example:

```
  'Static Analysis run with remixd #group3 #flaky': function (browser) {
```

Now, the group3 of this test will be executed in firefox and chrome 80 times.
If you mark more groups in other tests they will also be executed. 

**CONFIGURATION**

It's important to set a parameter in the .circleci/config.yml, set it to false then the normal tests will run.
Set it to true to run only tests marked with flaky.
```
parameters:
  run_flaky_tests:
    type: boolean
    default: true
```

## Important Links

- Official website: https://remix-project.org
- Official documentation: https://remix-ide.readthedocs.io/en/latest/
- Curated list of Remix resources: https://github.com/ethereum/awesome-remix
- Medium: https://medium.com/remix-ide
- X: https://x.com/ethereumremix
- Join Discord: https://discord.gg/mh9hFCKkEq
