/**
 * Webpack Devモード設定
 */
const myEntry = require('./myEntry.js')
const myModule = require('./myModule.js')
const myOutput = require('./myOutput.js')
const myPlugins = require('./myPlugins.js')
const myResolve = require('./myResolve.js')

module.exports = (env = {}, argv = {}) => {
  // console.log(env)
  // console.log(argv.mode)
  return {
    entry: myEntry(env.PATH),
    module: myModule(env.argv),
    devtool: 'inline-source-map',
    devServer: {
      contentBase: '../dist',
      open: true,
      watchContentBase: true
    },
    plugins: myPlugins(env.argv),
    output: myOutput(env.argv),
    resolve: myResolve(env.argv)
  }
}
