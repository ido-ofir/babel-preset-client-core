# babel-preset-client-core

this babel preset is similar to [babel-preset-react](https://babeljs.io/docs/plugins/preset-react/) except for one difference:

jsx syntax is transformed into calls to `this.createElement` instead of `React.createElement`.

it is built for use by client-core to enable directives to run as normal react props from jsx.
