<template>
    <div>
      <h2>Lista de juegos</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
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
  