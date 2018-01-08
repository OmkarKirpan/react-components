/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: "General",
    content: "../../packages/chrome/README.md",
    components: "../../packages/chrome/src/[A-Z]*.js"
  }, {
    name: "Header",
    description: "header items",
    components: "../../packages/chrome/src/Header/*.js"
  }, {
    name: "Nav",
    components: "../../packages/chrome/src/Nav/*.js"
  }, {
    name: "SubNav",
    components: "../../packages/chrome/src/SubNav/*.js"
  }]
};