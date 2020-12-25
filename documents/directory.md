# ディレクトリ構成

- coverage
- dist ビルド時に出力するファイル。毎回ビルドの都度、最初に全てのファイルを削除する。
- docs
- firebase
  - functions firebase/functions用ディレクトリ
  - public firebase/hosting用ディレクトリ
- src source置き場
  - documents HTMLorPUGを格納する
  - images
  - scripts JSを格納する
      1. エントリーポイントはentriesディレクトリ以下
      2. エントリーポイントはentriesディレクトリ以下
  - styles
- static ビルド時、このディレクトリに置かれているデータは階層を維持した状態でdistにコピーする
- tasks Webpackを使わずNodeのみで実施するタスク

[INDEX](./index.md)
