// gatsby-node.js
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2');

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};