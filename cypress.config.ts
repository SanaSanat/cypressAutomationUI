import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      stage: 'https://stage.pasv.us/user/login',
      prod: 'https://coding.pasv.us/course',
      info: 'Hello World!',
      demoQA: 'https://demoqa.com',
      email: 'sst7212@gmail.com',
      password: 'zhailayY2202',
      herokuapp: 'https://the-internet.herokuapp.com'
      
    },
  },
  defaultCommandTimeout: 16_000,
});
 