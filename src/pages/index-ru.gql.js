import { graphql } from "gatsby"

const GET_PAGE = graphql`
{
  allContentfulPost(sort: {order: DESC, fields: date}, filter: {node_locale: {eq: "ru"}, type: {type: {eq: "shibari"}}}) {
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
            formats: [AUTO, WEBP]
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