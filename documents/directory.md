# ディレクトリ構成

- coverage テストのレポート
- dist ビルド時に出力するファイル。毎回ビルドの都度、最初に全てのファイルを削除する。
- documents
- src
  - html HTMLorPUGを格納する
  - images
  - scripts JSを格納する
      1. エントリーポイントはentriesディレクトリ以下
      2. エントリーポイントはentriesディレクトリ以下
  - styles
- static ビルド時、このディレクトリに置かれているデータは階層を維持した状態でdistにコピー
- tasks Webpackを使わずNodeのみで実施するタスク

[INDEX](./index.md)
