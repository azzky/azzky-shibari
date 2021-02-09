if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
if (process.env.NODE_ENV === "production") {
  require("dotenv").config();
}

module.exports = {
  siteMetadata: {
    siteUrl: `https://azzky.ru`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     // trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     // exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Defers execution of google analytics script after page load
    //     defer: true,
    //     // Any additional optional fields
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-yandex-metrika`,
    //   options: {
    //     trackingId: 12345,
    //   },
    // },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/ru/404/`],
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://azzky.ru',
        sitemap: 'https://azzky.ru/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {   
        langKeyDefault: 'en',
        useLangKeyLayout: true,     
        prefixDefault: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Azzky's`,
        short_name: `Azzky's`,
        start_url: `/`,
        description: 'Azzky\'s postfolio website about shibari, mecha and my other hobbies',
        lang: 'en',
        direction: 'ltr',
        orientation: 'portrait',
        background_color: `#f7f0eb`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/fav.png`,
        include_favicon: true,
        cache_busting_mode: 'none',
        gcm_sender_id: '976120493038',
        localize: [
          {
            start_url: '/ru/',
            lang: 'ru',
            name: `Azzky's`,
            short_name: `Azzky's`,
            description: 'Сайт-портфолио Azzky про шибари, меху и прочие мои хобби',
          }
        ]
      }
    },
    // `gatsby-plugin-offline`,
    // `gatsby-plugin-remove-serviceworker`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://azzky.ru`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        failOnError: true,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          appId: process.env.GATSBY_FIREBASE_APP_ID,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID
        }
      }
    },
    {
      resolve: `gatsby-plugin-firebase-messaging`,
      options: {
        config: { 
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          appId: process.env.GATSBY_FIREBASE_APP_ID,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID
        },
      },
    },
  ],
}