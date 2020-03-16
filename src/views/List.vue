<template>
  <div class="list">
    <table>
      <tr>
        <th>Nome</th>
        <th>CPF</th>
        <th>Telefone</th>
        <th>Email</th>
      </tr>
      <tr v-for="user in users" v-bind:key="user.cpf">
        <td>{{user.name}}</td>
        <td>{{user.cpf}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
const users = JSON.parse(localStorage.getItem("users"));
console.log(users);

export default {
  data() {
    return {
      users
    };
  }
};
</script>

<style scoped>
</style>
