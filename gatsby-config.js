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
    //     // trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
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
        output: `/new-sitemap.xml`,
        exclude: [`/ru/404`, `/404.html`, `/success`, `/ru/success`, `/contact`, `/ru/contact`],
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
              context {
                modified
              }
            }
          }
        }`,
        resolveSiteUrl: ({ site, allSitePage }) => {
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            const today = new Date()
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
              lastmodISO: node.context.modified ? node.context.modified : today.toISOString()
            }
          })
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
        name: `Shibari by Azzky`,
        short_name: `Shibari by Azzky`,
        start_url: `/`,
        description: 'Shibari portfolio of rope artist Azzky',
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
        icon_options: {
          purpose: `any maskable`,
        },
        localize: [
          {
            start_url: '/ru/',
            lang: 'ru',
            name: `Шибари от Azzky`,
            short_name: `Шибари от Azzky`,
            description: 'Сайт-портфолио Azzky про шибари',
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['*.ctfassets.net'],
      },
    },
    `gatsby-plugin-offline`,
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
    `gatsby-plugin-image`,
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
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
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