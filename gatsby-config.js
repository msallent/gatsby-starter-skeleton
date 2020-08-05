/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Skeleton',
    description: 'Gatsby starter featuring TypeScript, ESLint, Prettier and more...',
    keywords: ['gatsby', 'starter', 'typescript', 'eslint', 'prettier', 'layout', 'seo'],
    imageURI: '/images/social.jpg',
    siteUrl: 'http://localhost:8000',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    'gatsby-transformer-sharp',
  ],
};
