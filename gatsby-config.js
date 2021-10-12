module.exports = {
  siteMetadata: {
    title: 'Código Lab | Aprende Desarrollo Web Full Stack en 12 semanas',
    url: 'https://www.codigolab.io',
    siteUrl: 'https://www.codigolab.io',
    image: 'src/assets/images/favicon.png',
    description:
      'Código Lab es un centro de enseñanza que ofrece un bootcamp de 12 semanas y de tiempo completo de desarrollo Web Full Stack.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Montserrat`, `IBM Plex Sans`, `Source Sans Pro`, `Inconsolata`, 'Roboto Mono'],
        display: 'swap',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    //'gatsby-plugin-next-seo',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TZV2BP7',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
