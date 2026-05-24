const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1o5xg8",
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {},
  },
});