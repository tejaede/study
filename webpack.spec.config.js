const path = require("path");
const webpack = require( 'webpack' );
const WebpackJasmineHtmlRunnerPlugin = require(
   'webpack-jasmine-html-runner-plugin'
);

module.exports = {
   devServer: {
      contentBase: path.join(__dirname, './'),
      compress: true
   },
   entry: './main.js',
   mode:'development',
   output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: '/',
      filename: '[name].bundle.js'
   },
   plugins: [
      new webpack.SourceMapDevToolPlugin( {
         filename: '[name].bundle.js.map'
      } ),
      new WebpackJasmineHtmlRunnerPlugin( {
         fixupScripts: []
      })
   ],
   watch: true
};