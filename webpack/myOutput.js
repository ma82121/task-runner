const path = require('path')

module.exports = mode => {
  return {
    // publicPathはscript,cssの両方に影響
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    // JSのみ
    filename: 'script/[name].[hash].bundle.js',
    chunkFilename: '[name].chunk.js'
  }
}
