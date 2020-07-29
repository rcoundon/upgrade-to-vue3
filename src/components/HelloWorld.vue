<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ count.counter }}
    <button class="button" @click="inc">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const count = ref(store.state);
    const inc = () => {
      store.commit("INCREMENT_COUNTER");
    };
    return {
      inc,
      count,
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
