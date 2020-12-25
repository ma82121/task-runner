const fs = require('fs')
const path = require('path')

const getFolders = function(dir) {
  return fs.readdirSync(dir).filter(function(file) {
    return fs.statSync(path.join(dir, file)).isDirectory()
  })
}

const targetDirectoryName = process.argv[3]
console.log(targetDirectoryName)

const spritesStrings = getFolders('src/images/sprites')
const spritesheetsStrings = getFolders('src/images/spritesheets')

const moduleExportsValue = []

console.log('◆sprites生成')
for (let i = 0; i < spritesStrings.length; i++) {
  if (
    targetDirectoryName === undefined ||
    targetDirectoryName === spritesStrings[i]
  ) {
    console.log(spritesStrings[i])
    moduleExportsValue.push({
      src: './src/images/sprites/' + spritesStrings[i] + '/*.png',
      destImage: './src/images/sprites/' + spritesStrings[i] + '.png',
      destCSS: './src/styles/sprites/_' + spritesStrings[i] + '.scss',
      imgPath: '/images/sprites/' + spritesStrings[i] + '.png',
      padding: 4,
      algorithm: 'top-down',
      algorithmOpts: { sort: false },
      cssFormat: 'scss',
      cssVarMap: function(sprite) {
        sprite.name = sprite.name
      }
    })
  }
}

console.log('◆spritesheets生成')
for (let i = 0; i < spritesheetsStrings.length; i++) {
  if (
    targetDirectoryName === undefined ||
    targetDirectoryName === spritesheetsStrings[i]
  ) {
    console.log(spritesheetsStrings[i])
    moduleExportsValue.push({
      src:
        './src/images/spritesheets/' +
        spritesheetsStrings[i] +
        '/*.{png,gif,jpg}',
      destImage:
        './src/images/spritesheets/' + spritesheetsStrings[i] + '.png',
      destCSS: './src/images/spritesheets/' + spritesheetsStrings[i] + '.json',
      imgPath: '/images/spritesheets/' + spritesheetsStrings[i] + '.png',
      padding: 4,
      algorithm: 'binary-tree',
      cssTemplate: require('spritesmith-texturepacker')
    })
  }
}

module.exports = moduleExportsValue
