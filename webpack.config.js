const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  module: {
    rules: [
      // Include CSS on js file
      {
        // test: /\.css$/i,
        test: /\.s[ac]ss$/i,
        use: [
          // Creates 'style' nodes from JS strings
          'style-loader',

          // Translates CSS into CommonJS
          'css-loader',

          // Compiles Sass to CSS
          "sass-loader"
        ],
      },
      // Include images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  }
};
