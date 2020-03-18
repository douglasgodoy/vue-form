<template>
  <div class="list">
    <table>
      <tr>
        <th>Nome</th>
        <th>CPF</th>
        <th>Telefone</th>
        <th>Email</th>
        <th class="action">Action</th>
      </tr>
      <tr v-for="(user,i) in usersDb" v-bind:key="user.cpf">
        <td>{{user.name}}</td>
        <td>{{user.cpf}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
        <td>
          <div class="actions">
            <button id="edit" class="btn" @click="edit(i,user)">Editar</button>
            <button id="delete" class="btn" @click="remove(user.cpf)">Excluir</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import connection from "@/conn";
export default {
  data() {
    return {
      usersDb: this.users()
    };
  },
  mounted() {
    connection.$on("list", list => (this.users = list));
  },
  methods: {
    users: () => JSON.parse(localStorage.getItem("users")),
    remove(cpf) {
      const filtro = this.users().filter(user => user.cpf !== cpf);
      localStorage.setItem("users", JSON.stringify(filtro));
      this.usersDb = filtro;
    },
    edit(index) {
      this.$router.push({name: 'Edit', params: {index} })
    }
  }
};
</script>

<style scoped>
table {
  margin: 0 auto;
  width: 80vw;
  border-collapse: collapse;
}

.actions {
  text-align: center;
}

.actions button {
  margin: 0 10px;
}

.actions button:focus {
  outline: none;
}

tr:hover {
  background: rgb(230, 230, 230);
  font-weight: 700;
}

td {
  border-bottom: solid #efeeed 1px;
  vertical-align: middle;
  padding: 7px 0;
  color: #959595;
}

td:hover {
  color: #2c3e50;
}

td:nth-child(1) {
  padding-left: 0.5rem;
}

th {
  text-align: left;
  color: #2c3e50;
  font-weight: 500;
  font-size: 20px;
}

th.action {
  text-align: center;
}
</style>
