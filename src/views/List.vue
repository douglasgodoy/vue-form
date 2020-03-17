<template>
  <div class="list">
    <table>
      <tr>
        <th>Nome</th>
        <th>CPF</th>
        <th>Telefone</th>
        <th>Email</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="user in users" v-bind:key="user.cpf">
        <td>{{user.name}}</td>
        <td>{{user.cpf}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
        <td><button id="delete" class="btn">Excluir</button></td>
        <td><button id="edit" class="btn">Editar</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import connection from '@/conn';
export default {
  data(){
    return {
      users : JSON.parse(localStorage.getItem("users"))
    }
  },
  created(){
    connection.$on('list', list => this.users = list)
  },
  methods(){
    remove() {
      
    }
  }
};
</script>

<style scoped>

  table {
    margin: 0 auto;
    width: 80vw;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
     Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  th {
    text-align: left;
    color: #2c3e50;
  }

</style>
