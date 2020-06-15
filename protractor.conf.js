const
    path = require('path'),
    { ConsoleReporter } = require('@serenity-js/console-reporter'),
    { ArtifactArchiver } = require('@serenity-js/core'),
    { Photographer, TakePhotosOfInteractions, TakePhotosOfFailures } = require('@serenity-js/protractor'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd');

exports.config = {
    chromeDriver: require('chromedriver/lib/chromedriver').path,
    SELENIUM_PROMISE_MANAGER: false,
    // restartBrowserBetweenTests: false,

    directConnect: true,

    // seleniumAddress: 'http://localhost:9515',

    allScriptsTimeout: 11000,

    specs: [ 'features/**/*.feature', ],

    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),

    serenity: {
        runner: 'cucumber',
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            Photographer.whoWill(TakePhotosOfFailures),
            new SerenityBDDReporter(),
            ConsoleReporter.forDarkTerminals(),
        ]
    },

    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [
                '--disable-infobars',
                '--no-sandbox',
                '--disable-gpu',
                '--window-size=800,600',
                // '--headless',
            ],
        },
    },
};
