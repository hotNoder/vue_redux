var webpack = require('webpack')

var definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('dev')
  }
})

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    path: 'build',
    publicPath: 'build/',
    filename: '[name].js',
  },
  externals: [{
    'vue': 'Vue'
  }],
  module: {
    loaders: [{
      test: /\.js/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?limit=8192'
    }],
    resolve: {
      extensions: ['', '.js']
    },
  },
  plugins: [definePlugin]

}