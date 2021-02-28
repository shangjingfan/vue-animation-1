<template>
  <div id="app">
    <h2>轮播的效果</h2>
    <h3>注意：多元素的过渡，需要设置key</h3>
    <!-- <transition name="fade" mode="in-out"> -->
    <transition name="fade">
      <button v-if="status === 'on'" @click="status = 'off'" key="on">
        on
      </button>
      <button v-else @click="status = 'on'" key="off">off</button>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: "on",
    };
  },
};
</script>
<style >
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
#app {
  position: relative;
  padding: 100px;
}
#app button {
  position: absolute;
}
</style>