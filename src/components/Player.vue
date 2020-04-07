<template>
  <screen>
    <header class="w3-container">
      <h1>header things</h1>
    </header>
    <aside class="w3-third">test</aside>
    <main class="w3-panel w3-twothird">
      <card>text</card>
    </main>
    <footer class="w3-bottom">footer things</footer>
  </screen>
</template>

<script>
import { player, game } from "../databse.js";
import Card from "./card";
import Screen from "./screen";
export default {
  name: "Play",
  components: { Card, Screen },
  data() {
    return {
      decks: {
        player: player,
        game: game
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
