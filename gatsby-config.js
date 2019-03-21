module.exports = {
  siteMetadata: {
    title: `Away Day`,
    description: `All you need to know about the upcoming Away Day!`,
    author: `Your Beachies!`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/page-contents/germany-2019`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `meta`,
        path: `${__dirname}/metadata`
      }
    }
  ]
};
