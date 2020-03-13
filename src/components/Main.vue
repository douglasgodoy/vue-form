<template>
  <div class="container">
    <div id="form">
      <form action name="addUser">
        <div class="form-input">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome completo [sem abreviações]"
            autocomplete="off"
          />
          <span v-show="invalid">Campo não pode ser vazio ou menor que 3 caracteres!</span>
        </div>
        <div class="form-input">
          <input type="text" id="email" name="email" placeholder="E-mail" autocomplete="off" />
          <span v-show="invalid">Email inválido!</span>
        </div>
        <div class="form-input w-5 mr-3">
          <input type="text" id="cpf" name="cpf" placeholder="CPF" autocomplete="off" />
          <span v-show="invalid">CPF inválido!</span>
        </div>
        <div class="form-input w-5 ml-3">
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="Telefone"
            autocomplete="off"
          />
          <span v-show="invalid">Telefone inválido!</span>
        </div>
        <div class="text-right">
          <button class="btn" @click="save">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "Main",
  data() {
    return {
      invalid: () => {
        this.isvalid();
      }
    };
  },
  methods: {
    isvalid: (name, cpf, email, phone) => {
      !name, !cpf, !email, !phone ? console.log("false") : console.log("true");
      return true;
    },
    save: e => {
      e.preventDefault();
      const name = document.getElementsByName("name")[0].value;
      const cpf = document.getElementsByName("cpf")[0].value;
      const email = document.getElementsByName("email")[0].value;
      const phone = document.getElementsByName("telefone")[0].value;
      this.invalid(name, cpf, email, phone);
      // console.log(this.invalid());

      const user = { name, cpf, phone, email };
      localStorage.setItem("users", user);
      alert("Usuário salvo com succeso!");
    }
  }
};
</script>


<style scoped>
.container {
  max-width: 520px;
  padding: 1.5rem;
  margin: auto;
}

#form input {
  width: 100%;
  height: 25px;
  border: none;
  border-bottom: solid #efeeed 2px;
  font-size: 20px;
}
::placeholder {
  color: #efeeed;
  font-size: 20px;
  transition: 0.5s;
}

input:focus::-webkit-input-placeholder {
  color: #333333;
}

#form input:focus {
  outline: none;
}

#form label:focus {
  color: #333333;
}

#form #cpf,
#form #telefone {
  display: block;
}

.form-input.w-5 {
  display: inline-block;
}

.form-input {
  margin-bottom: 15px;
}

.form-input span {
  margin-top: 0.5rem;
  color: #eb4a46;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.btn {
  background: #fff;
  color: #2c3e50;
  min-width: 100px;
  min-height: 30px;
  border: none;
  border: solid #2c3e50 1px;
  border-radius: 10px;
  transition: 0.3s;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.btn:hover {
  cursor: pointer;
  color: white;
  background: #2c3e50;
}

/* GENERICAS */

.text-right {
  text-align: right;
}

.mr-3 {
  margin-right: 1rem;
}

.ml-3 {
  margin-left: 1rem;
}

.border-danger {
  border-bottom: solid #eb4a46 1px;
}
</style>
