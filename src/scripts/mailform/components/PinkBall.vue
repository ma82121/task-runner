<template>
  <div v-show="isShow" class="pink-ball">
    <div class="pink-ball__contents" ref="contents" />
    pinkball
  </div>
</template>

<script>

import * as PIXI from 'pixi.js'

export default {
  name: 'PinkBall',
  props: {
    isPlay: {
      type: Boolean,
      default: false
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      app: new PIXI.Application({
        width: 200,
        height: 200,
        resolution: 2,
        autoResize: true,
        transparent: true
      }),
      loader: new PIXI.Loader(),
      ticker: PIXI.Ticker.shared,
      timer: null
    }
  },
  watch: {
    isPlay(isPlay) {
      if (isPlay) {
        this.play()
        return
      }
      this.pause()
    }
  },
  mounted() {
    this.$refs.contents.appendChild(this.app.view)
    this.ticker.autoStart = false
    this.loader
      .add('pinkball', '/images/spritesheets/pinkball.json')
    this.loader
      .onComplete.add(() => {
        alert('once')

        let frames = []
        for (var i = 1; i < 3; i++) {
          frames.push(PIXI.Texture.from('pinkball-' + i))
        }

        const anim = new PIXI.AnimatedSprite(frames)
        anim.x = this.app.screen.width / 2
        anim.y = this.app.screen.height / 2
        anim.anchor.set(0.5)
        anim.animationSpeed = 0.5
        anim.play()

        console.log(frames)
        console.log(anim)

        this.app.stage.addChild(anim)
      })
      // .once('complete', function(){
      //   alert('once')

      //   let frames = []
      //   for (var i = 1; i < 3; i++) {
      //     frames.push(PIXI.Texture.from('pinkball-' + i))
      //   }

      //   const anim = new PIXI.AnimatedSprite(frames)
      //   anim.x = this.app.screen.width / 2
      //   anim.y = this.app.screen.height / 2
      //   anim.anchor.set(0.5)
      //   anim.animationSpeed = 0.5
      //   anim.play()

      //   console.log(frames)
      //   console.log(anim)

      //   this.app.stage.addChild(anim)
      // })

    // window.addEventListener('resize', () => this.resize(), false)
    // this.tl.pause()
  },

  destroyed() {
    // window.removeEventListener('resize', () => this.resize(), false)
  },
  methods: {
    pause() {
      this.ticker.stop()
    },
    play() {
      this.ticker.start()
    }
  }
}
</script>

<style lang="scss" scoped>
.pink-ball {
}
</style>
