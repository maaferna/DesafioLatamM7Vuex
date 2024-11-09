<template>
    <tr>
      <td>{{ game.codigo }}</td>
      <td>{{ game.nombre }}</td>
      <td>{{ game.stock }}</td>
      <td>${{ game.precio.toLocaleString() }}</td>
      <td>
        <button @click="$emit('increment', game.codigo)" class="btn btn-success">+</button>
        <button @click="$emit('decrement', game.codigo)" class="btn btn-danger">-</button>
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
  
 