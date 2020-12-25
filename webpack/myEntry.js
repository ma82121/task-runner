/**
 * エントリーポイント生成
 *
 * 出力例
 * {
 *   'canvas/anglebouncemulti/app': '/Users/Workspace/task-runner/src/scripts/entries/canvas/anglebouncemulti/app.js',
 *   'canvas/bouncy-balls/app': '/Users/Workspace/task-runner/src/scripts/entries/canvas/bouncy-balls/app.js'
 * }
 */

const path = require('path')
const glob = require('glob')

const entry = {}
const srcDir = 'src/scripts'
let minimatch = '**/app.js'

module.exports = targetPath => {
  // console.log('targetPath')
  // console.log(targetPath)
  // console.log(targetPath.match('app.js'))
  // console.log(typeof targetPath)

  if (typeof targetPath === 'string') {
    if (targetPath.match('app.js')) {
      // 1ファイル指定
      minimatch = targetPath
    } else {
      // Dir指定
      minimatch = targetPath + '/' + minimatch
    }
  }
  console.log(minimatch)

  glob
    .sync(minimatch, {
      ignore: 'node_modules/**/app.js',
      cwd: srcDir
    })
    .map(key => {
      const newKey = key.replace('.js', '').replace('main/', '')
      entry[newKey] = path.resolve(srcDir, key)
    })

  return entry
}
