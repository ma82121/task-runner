<template>
  <div id="app">
    mailform
    <router-view />
  </div>
</template>

<script>
import Button from '@/mailform/components/Button'
import Menu from '@/mailform/components/Menu'

export default {
  components: {
    Button,
    Menu
  },
  data() {
    return {
      debugMode: ENV.MODE === 'dev'
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
