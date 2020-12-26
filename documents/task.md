# タスク一覧

## html

- pugの利用可
- HTMLコードの圧縮

`./src/html`内に`HTML`か`PUG`形式で格納  
共通テンプレートは`_template`のように`_`から始まるディレクトリ名の中に格納する

URLはhtmls以下のpathと同じ想定

ex)
./src/htmls/index.html -> アドレスバーより/または/index.htmlでアクセス可
./src/htmls/about.html -> アドレスバーより/about.htmlでアクセス可
./src/htmls/mailform/index.pug -> アドレスバーから/dev/または/dev/index.htmlでアクセス可
./src/htmls/mailform/index.pug -> アドレスバーから/dev/または/dev/index.htmlでアクセス可

## image

- Sprite
- SpriteSheet
- Favicon

### Sprite生成

Spriteを生成する
HTTP1.1時代のリクエストを減らす術
HTTPサーバーが2以上であれば使わない

### SpriteSheet

SpriteSheetを作成する

## js

- ES2018 -> ES3トランスパイル
- 構文チェック
- 自動整形
- テストコード
- githook(Commit前に構文チェック、テストコード実施)
- Vueコンポーネントの利用可
- CodeSplittingの利用可

1. エントリーポイント
  ./src/scripts/以下のapp.js

## style

- SCSS->CSSトランスパイル
- Map出力
- Autoprefix
- Minify
- 自動整形
- import時のglob利用
- Commit前にLintチェック

1. Category別にscssを作成
    ./src/stylesディレクトリ直下に置く
2. ページ毎のスタイル設定
    ./src/styles/partial

[INDEX](../../index.md)
