<template>
  <div class="container mt-5">
    <h1 class="text-center">Tienda 32 Bits</h1>
    <GameTable />
  </div>
</template>

<script>
import GameTable from './components/GameTable.vue';

export default {
  components: {
    GameTable
  }
};
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
}
</style>
