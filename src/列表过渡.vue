<template>
  <div id="app">
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <!-- tag的意思 -->
        <div v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1);
    },
  },
};
</script>
<style >
.list-item {
  display: block;
  margin-right: 10px;
  border: 1px solid blue;
  margin-top: 3px;
}
.list-enter-active,
.list-leave-active {
  transition: all 2s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  /* opacity: 0; */
  transform: translateX(100%);
}
</style>