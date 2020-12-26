<template>
  <div>
    <router-link to="/">HOME</router-link><br>
    <router-link to="/about">ABOUT</router-link><br>
    <router-link to="/contact">CONTACT</router-link><br>
    <router-link to="/test">TEST</router-link><br>
  </div>
</template>

<script>
import DefaultLayout from '@/mailform/layouts/DefaultLayout'

export default {
  components: {
    DefaultLayout
  }
}
</script>
