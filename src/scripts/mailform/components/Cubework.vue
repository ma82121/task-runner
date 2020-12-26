<template>
  <div v-show="isShow" class="cubework">
    <div class="cubework__container">
      <div class="cubework__scene">
        <div class="cubework__track">
          <div class="walker walker--1">
            <div class="cube cube--1">
              <div class="face face--front"></div>
              <div class="face face--back"></div>
              <div class="face face--left"></div>
              <div class="face face--right"></div>
              <div class="face face--top"></div>
              <div class="face face--bottom"></div>
            </div>
            <div class="cube cube--2">
              <div class="face face--front"></div>
              <div class="face face--back"></div>
              <div class="face face--left"></div>
              <div class="face face--right"></div>
              <div class="face face--top"></div>
              <div class="face face--bottom"></div>
            </div>
          </div>
          <div class="walker walker--2">
            <div class="cube cube--1">
              <div class="face face--front"></div>
              <div class="face face--back"></div>
              <div class="face face--left"></div>
              <div class="face face--right"></div>
              <div class="face face--top"></div>
              <div class="face face--bottom"></div>
            </div>
            <div class="cube cube--2">
              <div class="face face--front"></div>
              <div class="face face--back"></div>
              <div class="face face--left"></div>
              <div class="face face--right"></div>
              <div class="face face--top"></div>
              <div class="face face--bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Cubework',
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

    var cubeWidth = 120
    var stepDuration = 0.6

    gsap.set('.cubework__container', {
      y: '10vh'
    })

    function walk() {
      gsap
        .timeline({
          repeat: -1,
          defaults: {
            ease: 'power2.inOut',
            duration: stepDuration
          }
        })
        .to('.cube--2', {
          rotationZ: -180,
          transformOrigin: 'left top'
        })
        .set('.cube--2', {
          x: -cubeWidth * 2,
          transformOrigin: 'right top'
        })
        .to('.cube--2', {
          rotationZ: -360
        })
        .to('.cube--1', {
          rotationZ: -180,
          transformOrigin: 'left top'
        })
        .set('.cube--1', {
          x: -cubeWidth * 2,
          transformOrigin: 'right top'
        })
        .to('.cube--1', {
          rotationZ: -360
        })
        .to(
          '.cubework__track',
          {
            x: cubeWidth * 2,
            duration: stepDuration * 4,
            ease: 'none'
          },
          0
        )
    }

    function intro() {
      gsap
        .timeline({
          onComplete: walk,
          delay: 0.5,
          defaults: {
            ease: 'power1.in'
          }
        })
        .set('.cubework__container', {
          autoAlpha: 1
        })
        .from('.cube--1', {
          scaleY: 0,
          x: -cubeWidth * 2,
          transformOrigin: '50% 100%',
          duration: 0.3
        })
        .to('.cube--1', {
          keyframes: [
            {
              y: -cubeWidth * 2,
              ease: 'power2.easeOut',
              duration: 0.4
            },
            {
              y: 0,
              ease: 'power2.in'
            }
          ]
        })
        .from(
          '.cube--2',
          {
            scaleY: 0,
            x: cubeWidth * 2,
            transformOrigin: '50% 100%',
            duration: 0.3
          },
          0.1
        )
        .to(
          '.cube--2',
          {
            keyframes: [
              { y: -cubeWidth * 2, ease: 'power2.easeOut', duration: 0.4 },
              { y: 0, ease: 'power2.in' }
            ]
          },
          0.4
        )
        .to(
          '.cubework__track',
          {
            rotationY: 360,
            duration: 1.2,
            ease: 'power4.inOut'
          },
          0
        )
        .from('.face', {
          opacity: 0,
          duration: 1.2,
          ease: 'power2'
        }, 0)
    }

    intro()

  },
  methods: {
    pause() {
      alert('methods - pause')
      // this.tl.pause()
      gsap
        .timeline()
        .pause()
    },
    play() {
      alert('methods - play')
      this.setPattern(this.patternId)
      // this.tl.play()
      // gsap
      //   .timeline()
      //   .play()
    },
    setPattern(patternId) {
    }
  }
}
</script>

<style lang="scss" scoped>
.cubework {
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;

  .cubework__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: auto;
    perspective:800px;
    visibility: hidden;
  }

  .cubework__scene {
    transform-style: preserve-3d;
    transform: rotateX(-30deg) rotateY(55deg);
  }

  .cubework__track {
    transform-style: preserve-3d;
  }

  .walker {
    transform-style: preserve-3d;
    position: relative;
    display: flex;
  }

  .face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .face--front {
    transform: translateZ(calc(120px / 2));
  }

  .face--back {
    transform: translateZ(calc((120px *-1) / 2)) rotateY(180deg);
  }

  .face--left {
    transform: translateX(calc((120px *-1) / 2)) rotateY(-90deg);
  }

  .face--right {
    transform: translateX(calc(120px / 2)) rotateY(90deg);
  }

  .face--top {
    transform: translateY(calc((120px *-1) / 2)) rotateX(90deg);
  }

  .face--bottom {
    transform: translateY(calc(120px / 2)) rotateX(-90deg);
  }

  .cube--1 {
    .face {
      background: rgba(#dc1857, .8);
    }

    .face--front, .face--back {
      background: rgba(#8c1950, .8);
    }

    .face--left, .face--right {
      background: rgba(#c12465, .8);
    }
  }

  .cube--2 {
    .face {
      background: rgba(#4b4c59, .8);
    }

    .face--front, .face--back {
      background: rgba(#111417, .8);
    }

    .face--left, .face--right {
      background: rgba(#363a42, .8);
    }
  }

  .walker--2 {
    transform-style: preserve-3d;
    transform: rotateX(180deg) translateY(-1px);

    .face {
      opacity: .6;
    }

    .cube--1 .face {
      background: #f6edf0;
    }

    .cube--2 .face {
      background: #eaebf1;
    }
  }

  .cube {
    position: relative;
    width: 120px;
    height: 120px;
    transform-style: preserve-3d;
  }

}
</style>
