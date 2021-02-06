const path = require(`path`);
const fetch = require(`node-fetch`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
        allContentfulPost {
        edges {
          node {
            link
            type {
              type
            }
            node_locale
          }
        }
      }
    }
  `).then(({ data: { allContentfulPost: { edges } } }) => {
    edges.forEach(({node}) => {
      let lang = `/${node.node_locale}/`
      if (node.node_locale === "en-US") {
        lang = "/"
      }
      createPage({
        path: lang + node.type.type + node.link,
        component: path.resolve(`./src/templates/post.jsx`),
        context: {
          slug: node.link,
          lang: node.node_locale
        }
      });
    });
  });
};
