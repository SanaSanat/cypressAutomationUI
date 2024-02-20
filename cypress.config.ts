import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
    env: {
      stage: "https://stage.pasv.us/user/login",
      stage2: "https://stage.pasv.us",
      prod: "https://coding.pasv.us/course",
      info: "Hello World!",
      demoQA: "https://demoqa.com",
      email: "sst7212@gmail.com",
      password: "zhailayY2202",
      herokuapp: "https://the-internet.herokuapp.com",
    },
  },
  retries: {
    runMode: 3,
    openMode: 2,
  },
  defaultCommandTimeout: 16_000,
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
