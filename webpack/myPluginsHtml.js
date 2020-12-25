const HtmlWebpackPlugin = require('html-webpack-plugin')

const html = []

// Main
// new HtmlWebpackPlugin({
//   filename: 'index.html',
//   chunks: ['entries/index/app'],
//   template: 'src/documents/index.pug'
// }),
// Main
// new HtmlWebpackPlugin({
//   filename: 'index.html',
//   chunks: ['entries/index/app'],
//   template: 'src/documents/main/index.pug'
// }),
// Main以外
// new HtmlWebpackPlugin({
//   filename: 'three/dungeon.html',
//   chunks: ['entries/three/dungeon/app'],
//   template: 'src/documents/three/dungeon.html'
// }),

const globule = require('globule')

const documents = globule.find(
  ['./src/documents/**/*.pug', './src/documents/**/*.html'],
  {
    ignore: [
      './src/documents/**/_*/*.pug',
      './src/documents/**/_*.pug',
      './src/documents/**/_*/*.html',
      './src/documents/**/_*.html'
    ]
  }
)
documents.forEach(document => {
  const fileName = document
    .replace('./src/documents/', '')
    .replace('main/', '')
    .replace('.pug', '.html')

  const chunks =
    'entries/' +
    document
      .replace('./src/documents/', '')
      .replace('main/', '')
      .replace('.pug', '')
      .replace('.html', '') +
    '/app'

  html.push(
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

module.exports = html
