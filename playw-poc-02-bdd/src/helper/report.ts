const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "./",
    reportName: "Playwright Automation Report",
    pageTitle: "Startpage Test Report",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "60",
        },
        device: "ALCB - PC",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test info",
        data: [
            { label: "Project", value: "POC Project" },
            { label: "Release", value: "0.1" },
            { label: "Cycle", value: "1" }
        ],
    },
});