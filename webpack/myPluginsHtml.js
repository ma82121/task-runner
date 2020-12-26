const HtmlWebpackPlugin = require('html-webpack-plugin')
const globule = require('globule')

// 対象のhtml、pugファイルのpathを抽出
const htmlList = globule.find(
  [
    './src/htmls/**/*.pug',
    './src/htmls/**/*.html'
  ],
  {
    ignore: [
      './src/htmls/**/_*/*.pug',
      './src/htmls/**/_*.pug',
      './src/htmls/**/_*/*.html',
      './src/htmls/**/_*.html'
    ]
  }
)

// 抽出分のHtmlWebpackPluginのインスタンスを生成
// ex
// new HtmlWebpackPlugin({
//   filename: 'index.html',
//   chunks: ['entries/index/app'],
//   template: 'src/html/index.pug'
// }),
// new HtmlWebpackPlugin({
//   filename: 'index.html',
//   chunks: ['entries/index/app'],
//   template: 'src/html/main/index.pug'
// }),
// new HtmlWebpackPlugin({
//   filename: 'three/dungeon.html',
//   chunks: ['entries/three/dungeon/app'],
//   template: 'src/html/three/dungeon.html'
// }),

const returnArray = []

htmlList.forEach(document => {
  const fileName = document
    .replace('./src/htmls/', '')
    .replace('main/', '')
    .replace('.pug', '.html')

  const chunks =
    'entries/' +
    document
      .replace('./src/htmls/', '')
      .replace('main/', '')
      .replace('.pug', '')
      .replace('.html', '') +
    '/app'

  returnArray.push(
    new HtmlWebpackPlugin({
      filename: `${fileName}`,
      chunks: [`${chunks}`],
      template: document
    })
  )
  // console.log(fileName)
  // console.log(chunks)
  // console.log(document)
})

module.exports = returnArray
