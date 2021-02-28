<template>
  <div id="app">
    <a href="https://cn.vuejs.org/v2/guide/transitions.html#JavaScript 钩子">
      <h2>Velocity.js操作动画</h2>
    </a>
    <p>
      实现不了官网的那种效果，代码都是一样的，不用纠结，它只是个库，是版本的问题，跟官网版本不一样
    </p>
    <button @click="show = !show">Toggle</button>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <p v-if="show">Demo</p>
    </transition>
  </div>
</template>

<script>
import Velocity from "velocity-animate"; // 鸹貔，就这，弄了半天
export default {
  name: "App",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.transformOrigin = "left";
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 3000 });
      // Velocity(el, { background: "green" }, { duration: 2000 });
      Velocity(el, { fontSize: "1em" }, { complete: done });
      // Velocity(el, { background: "white" }, { complete: done });
    },
    leave: function (el, done) {
      Velocity(el, { translateX: "15px", rotateZ: "50deg" }, { duration: 600 });
      Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0,
        },
        { complete: done }
      );
    },
  },
};
</script>

<style >
/* p {
  border: 1px solid blue;
} */
</style>
