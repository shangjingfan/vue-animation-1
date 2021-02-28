<template>
  <div id="app">
    <a href="https://cn.vuejs.org/v2/guide/transitions.html#JavaScript 钩子"
      ><h2>JavaScript 钩子</h2></a
    >
    <button @click="show = !show">Toggle render</button>

    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >
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
  methods: {
    // 进入中
    beforeEnter: function (el) {
      console.log("enter之前", el);
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      console.log("enter开始", el);
      // done();
      console.log("enter开始", done);
    },
    afterEnter: function (el) {
      console.log("enter之后", el);
    },
    enterCancelled: function (el) {
      console.log("enterCancelled", el);
    },
    // 离开时
    beforeLeave: function (el) {
      console.log("leave之前", el);
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      console.log("leave开始", el);
      console.log("leave开始", done);
    },
    afterLeave: function (el) {
      console.log("leave之后", el);
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      console.log("leaveCancelled", el);
    },
  },
};
</script>

<style >
</style>