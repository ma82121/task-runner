const path = require('path')

module.exports = mode => {
  return {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'script/[name].[hash].bundle.js',
    chunkFilename: '[name].chunk.js'
  }
}
