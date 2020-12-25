const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = mode => {
  return {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
              root: path.resolve(__dirname, '../src')
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|ico|gif|svg|jpe?g)(\?[a-z0-9]+)?$/,
        use: 'url-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader',
            options: {}
          },
          {
            loader: 'import-glob-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: true
            }
          }
        ]
      }
    ]
  }
}
