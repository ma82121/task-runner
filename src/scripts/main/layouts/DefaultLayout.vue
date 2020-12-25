<template>
  <div class="default-layout">
    <Menu />
    <Button>Button</Button>
    <slot />
    <PinkBall
      :is-play="pinkBall.isPlay"
      :is-show="pinkBall.isShow"
    />
    <Cubework
      :is-play="cubework.isPlay"
      :is-show="cubework.isShow"
      :pattern-id="cubework.patternId"
    />
    <BackgroundLayer
      :is-play="backgroundLayer.isPlay"
      :is-show="backgroundLayer.isShow"
      :pattern-id="backgroundLayer.patternId"
    />
    <div class="debug">
      <div>
        background:
        <Button @click="onClickBackgroundLayerIsShowToggle()">IsShowToggle</Button>
        <Button @click="onClickBackgroundLayerIsPlayToggle()">IsPlayToggle</Button>
        <Button @click="onClickBackgroundLayerPattern('1')">Pattern1</Button>
        <Button @click="onClickBackgroundLayerPattern('2')">Pattern2</Button>
      </div>
      <div>
        cubework:
        <Button @click="onClickCubeworkIsShowToggle()">IsShowToggle</Button>
        <Button @click="onClickCubeworkIsPlayToggle()">IsPlayToggle</Button>
        <Button @click="onClickCubeworkPattern('1')">Pattern1</Button>
        <Button @click="onClickCubeworkPattern('2')">Pattern2</Button>
      </div>
      <div>
        pinkBall:
        <Button @click="onClickPinkBallIsShowToggle()">IsShowToggle</Button>
        <Button @click="onClickPinkBallIsPlayToggle()">IsPlayToggle</Button>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundLayer from '@/main/components/BackgroundLayer'
import Button from '@/main/components/Button'
import Cubework from '@/main/components/Cubework'
import Menu from '@/main/components/Menu'
import PinkBall from '@/main/components/PinkBall'

export default {
  components: {
    BackgroundLayer,
    Button,
    Cubework,
    Menu,
    PinkBall
  },
  data() {
    return {
      backgroundLayer: {
        isPlay: false,
        isShow: false,
        patternId: '1'
      },
      cubework: {
        isPlay: false,
        isShow: false,
        patternId: '1'
      },
      pinkBall: {
        isPlay: true,
        isShow: true
      }
    }
  },
  methods: {
    onClickBackgroundLayerIsShowToggle() {
      this.backgroundLayer.isShow = !this.backgroundLayer.isShow
    },
    onClickBackgroundLayerIsPlayToggle() {
      this.backgroundLayer.isPlay = !this.backgroundLayer.isPlay
    },
    onClickBackgroundLayerPattern(patternId) {
      this.backgroundLayer.patternId = patternId
    },
    onClickCubeworkIsShowToggle() {
      this.cubework.isShow = !this.cubework.isShow
    },
    onClickCubeworkIsPlayToggle() {
      this.cubework.isPlay = !this.cubework.isPlay
    },
    onClickCubeworkPattern(patternId) {
      this.cubework.patternId = patternId
    },
    onClickPinkBallIsShowToggle() {
      this.pinkBall.isShow = !this.pinkBall.isShow
    },
    onClickPinkBallIsPlayToggle() {
      this.pinkBall.isPlay = !this.pinkBall.isPlay
    }
  }
}
</script>

<style scoped lang="scss">
.default-layout {
  background-color: #0f0;
}

.debug {
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
}
</style>

