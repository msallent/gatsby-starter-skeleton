/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'gatsby-skeleton',
    description: 'Gatsby starter with all sort of linting',
    keywords:
      'gatsby, starter, eslint, prettier, stylelint, lint-staged, husky, styled, components',
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
  ],
};
