# Cypress.io end-to-end tests

[Cypress.io](https://www.cypress.io) is an open source, MIT licensed end-to-end test runner

## Folder structure

These folders hold end-to-end tests and supporting files for the Cypress Test Runner.

- [fixtures](src/fixtures) holds optional JSON data for mocking, [read more](https://on.cypress.io/fixture)
- [plugins](src/plugins) allow you to customize how tests are loaded, [read more](https://on.cypress.io/plugins)
- [features](src/tests/features) hold the cucumber style feature test files [read more](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
- [integration](src/tests/integration) holds the actual test files, [read more](https://on.cypress.io/writing-and-organizing-tests)
- [support](src/support) file runs before all tests and is a great place to write or load additional custom commands, page objects, utils, etc [read more](https://on.cypress.io/writing-and-organizing-tests#Support-file)

## `cypress.json` file

You can configure project options in the [../cypress.json](../cypress.json) file, see [Cypress configuration doc](https://on.cypress.io/configuration).

## More information

- [https://github.com/cypress.io/cypress](https://github.com/cypress.io/cypress)
- [https://docs.cypress.io/](https://docs.cypress.io/)
- [Writing your first Cypress test](http://on.cypress.io/intro)
