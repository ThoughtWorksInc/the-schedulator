module.exports = {
  siteMetadata: {
    title: `Away Day`,
    description: `All you need to know about the upcoming Away Day!`,
    author: `Your Beachies!`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/content`
    //   }
    // },
    `gatsby-transformer-remark`
  ]
};
