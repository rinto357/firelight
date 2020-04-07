<template>
  <div class="w3-blue error-404">
    <h1>ERROR 404</h1>
    <h3>
      <router-link to="/">Return Home</router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Err404",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
