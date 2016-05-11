module.exports = {
  plugins: [
    [require("babel-plugin-transform-react-jsx"), {
      "pragma": "this.createElement" // for client-core components
    }],
    require("babel-plugin-transform-flow-strip-types"),
    require("babel-plugin-syntax-flow"),
    require("babel-plugin-syntax-jsx"),
    require("babel-plugin-transform-react-display-name"),
  ]
};
