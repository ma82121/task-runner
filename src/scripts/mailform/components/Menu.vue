<template>
  <nav class="menu">
    <ul>
      <li>
        <div @click="onClickAnchor('/')">/</div>
      </li>
      <li>
        <div @click="onClickAnchor('/about')">/about</div>
      </li>
      <li>
        <div @click="onClickAnchor('/contact')">/contact</div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    onClickAnchor(path) {
      // ga
      // ga('set', 'page', path)
      // ga('send', 'pageview')
      // 遷移
      this.$router.push({ path: path })
    }
  }
}
</script>

