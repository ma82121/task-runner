const path = require('path')

module.exports = mode => {
  return {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src/scripts'),
      '~': path.resolve(__dirname, '../')
    },
    extensions: ['.js', '.vue']
  }
}
