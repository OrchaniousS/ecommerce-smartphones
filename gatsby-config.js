module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `E-Commerce | Smartphones`,
        short_name: `eCommerceSmartPhones`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: "src/images/favicon.ico",
        cache_busting_mode: "none",
      },
    },
  ],
}
