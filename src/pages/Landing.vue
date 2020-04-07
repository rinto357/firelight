<template>
  <div class="w3-blue hello">
    <h1>Welcome to Future Heist</h1>
    <h3>
      <router-link to="play">Play</router-link>
    </h3>
    <h3>
      <router-link to="account">Account</router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Landing",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
