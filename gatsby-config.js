module.exports = {
  siteMetadata: {
    siteUrl: "https://www.johngale.dev",
    title: "John Gale Dev Portfolio",
    description: "The development profile site for John Gale - Indie Developer and Japanese Language Specialist",
    image: '/preview.png'
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `./src/data/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
