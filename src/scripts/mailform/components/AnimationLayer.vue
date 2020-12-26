<template>
  <div v-show="isShow" ref="animationLayer" class="animation-layer" />
</template>

<script>
import CubeWalk from '@/assets/scripts/animation-layer/cube-walk'
import PinkBall from '@/assets/scripts/animation-layer/pinkBall'
import Welcome from '@/assets/scripts/animation-layer/welcome'

export default {
  name: 'AnimationLayer',
  props: {
    id: {
      type: String,
      default: 'bunny'
    },
    isCreate: {
      type: Boolean,
      default: true
    },
    isPlay: {
      type: Boolean,
      default: false
    },
    isShow: {
      type: Boolean,
      default: true
    },
    patternId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      animation: null
    }
  },
  watch: {
    id() {
      console.log('AnimationLayer - watch - id')
      this.setAnimation(this.id)
    },
    isCreate(isCreate) {
      console.log(`AnimationLayer - watch - isCreate - ${isCreate}`)
      if (isCreate) {
        this.init()
      } else {
        this.destroy()
      }
    },
    isPlay(isPlay) {
      console.log(`AnimationLayer - watch - isPlay - ${isPlay}`)
      if (isPlay) {
        this.play()
      } else {
        this.pause()
      }
    },
    patternId() {
      console.log('AnimationLayer - watch - pattern')
      this.animation.setPatternId(this.patternId)
    }
  },
  mounted() {
    console.log('AnimationLayer - mounted')
    this.setAnimation(this.id)
    if (this.isCreate) {
      this.init()
    }
  },
  methods: {
    /**
     * 破棄
     */
    destroy() {
      this.animation.destroy()
      this.animation = null
    },

    /**
     * 停止
     * タイミング isPlayの真偽値がfalseに変わった時
     */
    pause() {
      this.animation.pause()
    },

    /**
     * 再生
     * タイミング1 setAnimation時、isPlayがtrue
     * タイミング2 isPlayの真偽値がtrueに変わった時
     */
    play() {
      this.animation.play()
    },

    /**
     * setAnimation
     * @param {String} id
     */
    setAnimation(id) {
      this.animationId = id
    },

    /**
     * 初期化
     */
    init() {
      switch (this.animationId) {
        case 'bunny': {
          this.animation = new Bunny()
          break
        }
        case 'confetti': {
          this.animation = new Confetti()
          break
        }
        case 'cubewalk': {
          this.animation = new CubeWalk()
          break
        }
        case 'fountain': {
          this.animation = new Fountain()
          break
        }
        case 'welcome': {
          this.animation = new Welcome()
          break
        }
      }
      this.animation.init(this.$refs.animationLayer)

      if (this.isPlay) {
        this.play()
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/animation-layer/cube-walk.scss';
@import '~/assets/styles/animation-layer/welcome.scss';

.animation-layer {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
</style>
