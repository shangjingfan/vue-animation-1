<template>
  <div id="app">
    <button @click="view = 'v-a'">A</button>
    <button @click="view = 'v-b'">B</button>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      view: "v-a",
    };
  },
  components: {
    "v-a": {
      template: "<div>Component A</div>", //vue完整版才能这么做98760
    },
    "v-b": {
      template: "<div>Component B</div>",
    },
  },
};
</script>
<style >
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>