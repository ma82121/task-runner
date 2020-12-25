<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import { CONFIG } from '@/main/config'

import Button from '@/main/components/Button'
import Menu from '@/main/components/Menu'

export default {
  components: {
    Button,
    Menu
  },
  data() {
    return {
      debugMode: ENV.MODE === 'dev',
      timestamp: {
        data: null,
        isServerTime: null
      }
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    /**
     * 初期表示
     */
    async load() {
      if (!this.introSkipCheck()) {
        this.intro.show()
        const introRun = await this.intro.run()
        console.log(introRun)

        // 最後まで再生完了後にlocalStorageを更新
        if (introRun.complete) {
        }
      }
    },

    /**
     * introをSkipすべきかどうか
     * @return {boolean} - true ... Skipすべき
     */
    introSkipCheck() {
      // localStorageから
      // 最終再生情報を取得する
      // const lastWatchId
      // const lastWatchTimestamp

      // 前回のアクセスで、現在公開中のイントロを再生済である
      // const alreadySeen = lastWatchId === CONFIG.INTRO_NOW_OPEN_ID

      // 前回のアクセスから30日以内のアクセスである
      // const withinTheExpiration =
        // lastWatchTimestamp + CONFIG.INTRO_SKIP_MS > this.timestamp.data

      // 再生済で30日以内のアクセスであればSkip
      // return alreadySeen && withinTheExpiration
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/node_modules/bulma/bulma.sass';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
</style>
