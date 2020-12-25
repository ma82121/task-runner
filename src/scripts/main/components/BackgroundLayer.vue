<template>
  <div v-show="isShow" class="background-layer">
    <div class="welcome">
      <div class="welcome__bg">
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'BackgroundLayer',
  props: {
    isPlay: {
      type: Boolean,
      default: false
    },
    isShow: {
      type: Boolean,
      default: false
    },
    patternId: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      tl: gsap.timeline()
    }
  },
  watch: {
    isPlay(isPlay) {
      if (isPlay) {
        this.play()
        return
      }
      this.pause()
    },
    patternId(patternId) {
      alert(patternId)
      this.setPattern(patternId)
    }
  },
  mounted() {
    this.tl.pause()
  },
  methods: {
    pause() {
      this.tl.pause()
    },
    play() {
      this.setPattern(this.patternId)
      this.tl.play()
    },
    setPattern(patternId) {
      if (patternId === '1') {
        this.tl.set('.welcome__bg', {
          scale: 0.1
        })
        this.tl.to(
          '.welcome__bg',
          3,
          {
            scale: 1,
            yoyo: true,
            ease: 'power2.inOut',
            delay: 0.5,
            stagger: {
              amount: 1.0,
              grid: 'auto',
              from: 'center'
            }
          },
          'pattern1'
        )
      }

      if (patternId === '2') {
        this.tl.set('.welcome__bg', {
          scale: 1
        })
        this.tl.to(
          '.welcome__bg',
          10,
          {
            scale: 0.8,
            yoyo: true,
            ease: 'power2.inOut',
            delay: 0.5,
            stagger: {
              amount: 1.0,
              grid: 'auto',
              from: 'center'
            }
          },
          'pattern2'
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.background-layer {
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
}

.welcome {
  height: 100%;
  width: 100%;
}

.welcome__bg {
  background-color: #222;
  height: 100%;
  width: 100%;
}
</style>
