# コマンド一覧

| Task | Command | 補足 |
| --- | --- | --- |
| ビルド | yarn build | - |
| 簡易サーバー起動&監視状態 | yarn dev | - |
| - | yarn dev --env.PATH=entries/dungeon/index/app.js | 指定したエントリーポイントのみ監視 |
| - | yarn dev --env.PATH=entries/dungeon | 指定したディレクトリ内のエントリーポイントのみ監視 |
| JS自動整形 | yarn eslint-format | - |
| Style自動整形 | yarn stylelint-format | - |
| テストコード実施 | yarn test | - |
| favicon生成 | yarn create-favicon | - |
| Sprite/SpriteSheet生成 | yarn sprite | - |

[INDEX](../index.md)

yarn dev --env.PATH=entries/dungeon
yarn dev --env.PATH=entries/dungeon/dev/tilemap/app.js
yarn dev --env.PATH=entries/dungeon/dev/viewer/app.js
