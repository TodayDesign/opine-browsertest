exports.config = {
    //
    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack, and Testing Bot
    // (other cloud providers should work too though).
    // These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.
    //
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run.
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here.
    maxInstances: 10,
    capabilities: JSON.parse(process.env.WDIO_CAPABILITIES),
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    sync: true,
    //
    // Level of logging verbosity:
    // silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './test/output/errors',
    //
    // Set a base URL in order to shorten url command calls.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 20000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    framework: 'mocha',
    //
    // Test reporter for stdout.
    reporters: ['spec'],
    //
    // Options to be passed to Mocha.
    mochaOpts: {
        ui: 'bdd'
    }
};
