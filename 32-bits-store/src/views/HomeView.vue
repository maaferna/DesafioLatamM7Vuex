<template>
    <div class="container mt-5">
      <h1 class="text-center">Tienda 32 Bits</h1>
      <h3 class="text-center">Lista de juegos</h3>
      <GameTable />
    </div>
  </template>
  
  <script>
  import GameTable from '@/components/GameTable.vue';
  
  export default {
    components: {
      GameTable,
    },
  };
  </script>
  
  <style scoped>
  </style>
  