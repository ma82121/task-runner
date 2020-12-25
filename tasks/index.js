/**
 * タスクのインポート
 */
// const actionStylelint = require('./stylelint.js')

/**
 * Style全般タスク
 */
async function updateStyle(fileName) {
  // await actionStylelint(mode)
}

/**
 * Favicon生成タスク
 */
async function createFavicon() {
  // await actionIconGen(mode)
}

/**
 * コマンドライン引数受取。モードを決定
 */
let mode = 'dev'
if (process.argv[2] === '--mode') {
  mode = process.argv[3]
}

/**
 * buildタスク
 */
const build = () => {
  updateStyle()
  createFavicon()
}

/**
 * devタスク
 */
const dev = () => {
  const chokidar = require('chokidar')
  // const glob = require('glob')
  // const browserSync = require('browser-sync')

  const watcher = chokidar.watch(['src'], {
    ignored: ['.DS_Store'],
    persistent: true
  })

  watcher
    .on('ready', () => {
      console.log('監視開始')

      // browserSync({
      //   files: 'public/**/*',
      //   server: {
      //     directory: true
      //   },
      //   serveStatic: ['public']
      // })
    })
    .on('add', path => {
      console.log('add file -> ' + path)

      // browserSync.reload()
    })
    .on('addDir', path => {
      console.log('add dir -> ' + path)
    })
    .on('unlink', path => {
      console.log('remove file -> ' + path)

      // browserSync.reload()
    })
    .on('unlinkDir', path => {
      console.log('remove dir -> ' + path)
    })
    .on('change', path => {
      console.log('change -> ' + path)

      if (path.match(/.scss/)) {
        // styles直下のscssが更新された時
        // src/styles/main.scss
        const pathArray = path.split('/')
        if (pathArray.length === 3) {
          const fileName = pathArray[2].replace(/.scss/, '')
          console.log(fileName)
          updateStyle(fileName)
          return
        }
        // partial以下のscssが更新された時
        if (pathArray.length > 3) {
          if (pathArray[2] === 'partial') {
            const fileName = pathArray[3]
            console.log(fileName)
            updateStyle(fileName)
          }
        }
      } else if (path.match('src/images/icons/icon.svg')) {
        createFavicon()
      }
      // browserSync.reload()
    })
    .on('error', error => {
      console.log('erro -> ' + error)
    })
}

/**
 * モード
 */
if (mode === 'build') {
  build()
} else {
  dev()
}
