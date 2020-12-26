<template>
  <button
    :class="classes"
    :disabled="disabled || false"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isFullWidth: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    classes() {
      const array = ['button']
      if (this.color) array.push('is-' + this.color)
      if (this.isActive) array.push('is-active')
      if (this.isFullWidth) array.push('is-fullwidth')
      if (this.size) array.push('is-' + this.size)
      return array
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    },
    onFocus(e) {
      this.$emit('focus', e)
    },
    onBlur(e) {
      this.$emit('blur', e)
    }
  }
}
</script>
