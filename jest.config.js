require('dotenv').config()
module.exports = {
  ...require('@wordpress/scripts/config/jest-e2e.config'),
  "preset": "jest-puppeteer", // Allow  Jest with Puppeteer

  "bail": 15, // Stop running tests after `n` failures
  "testPathIgnorePatterns": ['/node_modules/'],
  "testMatch": ["**/tests/e2e/tests/**/*.spec.js"], // In testMatch we are only saying in which folder and for which files Jest should be looking for.
  "testSequencer": "./customSequencer.js", //  test run will follow custom order

  // testTimeout:Number(process.env.TIME_OUT), // Timeout of a test in milliseconds.
  // maxWorkers: 1, // Specifies the maximum number of workers the worker-pool will spawn for running tests.
  // verbose: true, // Show details of tests, if false show only summary

  // Jest allure reporter
  // testRunner: "jest-jasmine2", // test runner for allure report . after jest 24> jest-circus is default test runner.
  // reporters: ["default", "jest-allure"],
  // setupFiles: ["dotenv/config"], //setupFile will be run once per test file &  will be run once per test file.
  // setupFilesAfterEnv: ["jest-allure/dist/setup"], // setupFilesAfterEnv  will run some code immediately after the test framework has been installed in the environment but before the test code itself.

  // // Jest stare reporter
  // reporters: ["default", "jest-stare"],
  // testResultsProcessor: "./node_modules/jest-stare",
  // reporters: [
  //   "default",
  //   [
  //     "jest-stare",
  //     {
  //       "resultDir": "results/jest-stare",
  //       "reportTitle": "Dokan e2e test report",
  //       "reportHeadline": "Dokan e2e tests",
  //       "reportSummary": true,
  //       "additionalResultsProcessors": [ "jest-junit" ],
  //       "coverageLink": "../../coverage/lcov-report/index.html",
  //       "jestStareConfigJson": "jest-stare.json",
  //       "jestGlobalConfigJson": "globalStuff.json"
  //     }
  //   ]
  // ]


  // "projects": [
  //   {
  //     "displayName": "Setup tests",
  //     "testMatch": ["**/tests/e2e/tests/**/*.setup.spec.js"],
  //     // "testSequencer": "./customSequencer.js",
  // "runner": "jest-serial-runner",
  //   },
  //   {
  //     "displayName": "Actual tests",
  //     // "testMatch": ["**/tests/e2e/tests/**/.*[^setup].spec.js"],
  //     "testRegex": ["tests/e2e/tests/.*[^setup].spec.js$"],
  //     // "testSequencer": "./customSequencer.js",
  //   }
  // ],
  // "testRegex": ["tests/e2e/tests/.*[^setup].spec.js$"],



}