<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    /><!-- 也可以放到index.html中，这里为了看的明白，放到组件中了 -->

    <a href="https://cn.vuejs.org/v2/guide/transitions.html#自定义过渡的类名"
      ><h2>自定义过渡类名</h2></a
    >

    <button @click="show = !show">Toggle render</button>
    <transition
      enter-active-class="animate__animated animate__zoomInUp"
      leave-active-class="animate__animated animate__zoomOutDown"
    >
      <!-- 跟vuejs官网写法不一样的原因是升级了，https://animate.style/ -->
      <p v-if="show">hello</p>
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
</style>
