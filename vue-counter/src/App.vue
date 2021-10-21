<template>
  <div class="container">
    <Counter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Counter from "./components/Counter.vue";

@Options({
  components: {
    Counter,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 100%;
}
.container {
  max-width: 1200px;
  padding-top: 3rem;
  margin: 0 auto;
}
</style>
