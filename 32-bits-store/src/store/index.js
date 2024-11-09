import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    games: []
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    },
    updateStock(state, { codigo, amount }) {
      const game = state.games.find(game => game.codigo === codigo);
      if (game) {
        game.stock += amount;
      }
    }
  },
  actions: {
    async fetchGames({ commit }) {
      try {
        const response = await axios.get('/juegos.json');
        commit('setGames', response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    },
    incrementStock({ commit }, codigo) {
      commit('updateStock', { codigo, amount: 1 });
    },
    decrementStock({ commit }, codigo) {
      commit('updateStock', { codigo, amount: -1 });
    }
  },
  getters: {
    games: state => state.games
  }
});
