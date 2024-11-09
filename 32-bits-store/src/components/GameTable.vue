<template>
    <div class="container my-5">
      <table class="table table-hover table-bordered table-striped align-middle">
        <thead class="table-dark">
          <tr>
            <th scope="col" class="text-center">Código</th>
            <th scope="col" class="text-center">Nombre</th>
            <th scope="col" class="text-center">Stock</th>
            <th scope="col" class="text-center">Precio</th>
            <th scope="col" class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <GameItem
            v-for="game in games"
            :key="game.codigo"
            :game="game"
            @increment="incrementStock"
            @decrement="decrementStock"
          />
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import GameItem from './GameItem.vue';
  
  export default {
    components: {
      GameItem
    },
    computed: {
      ...mapState(['games'])
    },
    methods: {
      ...mapActions(['incrementStock', 'decrementStock'])
    },
    created() {
      this.$store.dispatch('fetchGames');
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  </style>
  