<template>
  <div id="app">
    <a href="https://cn.vuejs.org/v2/guide/transitions.html#css动画"
      ><h2>css动画</h2></a
    >
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
      <p v-if="show">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        facilisis enim libero, at lacinia diam fermentum id. Pellentesque
        habitant morbi tristique senectus et netus.
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { show: false };
  },
};
</script>

<style >
.bounce-enter-active {
  animation: bounce-in 3s;
}
.bounce-leave-active {
  animation: bounce-in 3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1); /* 最终状态要是正常状态 */
  }
}
</style>
