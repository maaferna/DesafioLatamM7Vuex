<template>
    <tr>
      <td class="text-center font-weight-bold">{{ game.codigo }}</td>
      <td class="text-center">{{ game.nombre }}</td>
      <td class="text-center">
        <span :class="{'text-success': game.stock > 5, 'text-warning': game.stock <= 5 && game.stock > 0, 'text-danger': game.stock === 0}">
          {{ game.stock }}
        </span>
      </td>
      <td class="text-center">${{ game.precio.toLocaleString() }}</td>
      <td class="text-center">
        <button @click="$emit('increment', game.codigo)" class="btn btn-sm btn-success mx-1">+</button>
        <button @click="$emit('decrement', game.codigo)" class="btn btn-sm btn-danger mx-1">-</button>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    props: {
      game: Object
    }
  };
  </script>
  