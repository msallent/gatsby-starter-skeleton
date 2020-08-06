const { generateConfig } = require('gatsby-plugin-ts-config');

module.exports = generateConfig({
  configDir: './src/gatsby',
  tsNode: true,
});
