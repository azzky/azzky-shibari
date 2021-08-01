import { graphql } from "gatsby"

const GET_PAGE = `
{
    allContentfulPost(sort: {order: DESC, fields: date}, filter: {node_locale: {eq: "en-US"}, type: {type: {eq: "shibari"}}}) {
      edges {
        node {
          id
          title
          link
          nsfw
          isPrevNsfw
          content {
            childMarkdownRemark {
              html
            }
          }
          preview {
            gatsbyImageData(
              width: 400
              quality: 100
              placeholder: BLURRED
              formats: [JPG, WEBP],
              breakpoints: [400, 800, 1080, 1366, 1440, 1920]
            )
          }
          tags
          type {
            type
          }
        }
      }
    }
  }
`

export default GET_PAGE