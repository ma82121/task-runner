const webpack = require('webpack')
const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const envConfigCommon = require('../env/common.js')
const envConfigDev = require('../env/dev.js')
const envConfigProd = require('../env/prod.js')

const myPluginsHtml = require('./myPluginsHtml.js')

module.exports = mode => {
  const envConfig =
    mode === 'production'
      ? Object.assign(envConfigCommon, envConfigProd)
      : Object.assign(envConfigCommon, envConfigDev)

  // mode:共通
  const plugins = [
    // Vue
    new VueLoaderPlugin(),
    // ENV
    new webpack.DefinePlugin({
      ENV: JSON.stringify(envConfig)
    }),
    // CSS
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash].css',
      chunkFilename: '[id].css'
    })
  ]

  // mode:production/develop
  if (mode === 'production') {
    // Clean
    plugins.push(new CleanWebpackPlugin())
    // Copy
    plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../static'),
          to: path.resolve(__dirname, '../dist'),
          flatten: true
        }
      ])
    )
  } else {
    // Copy
    plugins.push(
      new CopyWebpackPlugin([
        {
          from: 'src/images',
          to: 'images',
          force: true
        }
      ])
    )
  }

  Array.prototype.push.apply(plugins, myPluginsHtml)

  return plugins
}
