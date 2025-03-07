module.exports = {
    // Specifies the test environment that will be used for testing
    testEnvironment: 'node',

    // An array of file paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['./jest.setup.js'],

    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'json'],

    // The glob patterns Jest uses to detect test files
    testMatch: ['<rootDir>/__tests__/**/*.test.js'],

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: ['**/services/**/*.js', '**/repositories/**/*.js', '**/controllers/**/*.js'],

    // The directory where Jest should output its coverage files
    coverageDirectory: './coverage',
};