<template>
  <div class="container">
    <div id="form">
      <form action name="addUser">
        <div class="form-input">
          <input
            v-bind:class="{'border-danger': nameValid}"
            type="text"
            id="name"
            name="name"
            placeholder="Nome completo [sem abreviações]"
            autocomplete="off"
            v-mask="'A+'"
            v-model="models.name"
          />
          <span v-show="nameValid">Campo não pode ser vazio ou menor que 3 caracteres!</span>
        </div>
        <div class="form-input">
          <input
            v-bind:class="{'border-danger': emailValid}"
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            autocomplete="off"
          />
          <span v-show="emailValid">Email inválido!</span>
        </div>
        <div class="form-input w-5 mr-3">
          <input
            v-bind:class="{'border-danger': cpfValid}"
            type="text"
            id="cpf"
            name="cpf"
            placeholder="CPF"
            autocomplete="off"
            v-mask="'###.###.###-##'"
            v-model="models.cpf"
          />
          <span v-show="cpfValid">CPF inválido!</span>
        </div>
        <div class="form-input w-5 ml-3">
          <input
            v-bind:class="{'border-danger': phoneValid}"
            type="text"
            id="telefone"
            name="phone"
            placeholder="Telefone"
            autocomplete="off"
            v-mask="'(##) # ####-####'"
            v-model="models.phone"
          />
          <span v-show="phoneValid">Telefone inválido!</span>
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
      models: {
        cpf: "",
        name: "",
        phone: ""
      },
      nameValid: false,
      emailValid: false,
      cpfValid: false,
      phoneValid: false
    };
  },
  methods: {
    invalid() {
      let count = 0;
      const inputs = document.querySelectorAll("form input");

      inputs.forEach(e => {
        const val = e.getAttribute("name") + "Valid";
        this[val] = false;

        if (!e.value) {
          this[val] = true;
          count++;
        }
      });

      return count ? false : true;
    },
    save(e) {
      e.preventDefault();
      const name = document.getElementsByName("name")[0].value;
      const cpf = document.getElementsByName("cpf")[0].value;
      const email = document.getElementsByName("email")[0].value;
      const phone = document.getElementsByName("phone")[0].value;

      if (!this.invalid(name, cpf, email, phone)) return false;

      const userOld = JSON.parse(localStorage.getItem("users"));
      const firstUser = [{ ...userOld, name, cpf, phone, email }];
      // CONST USER teve que ser chamado por uma função pois na leitura dessa variavel
      // sem function o js recusava o spread operator, ocorrendo um erro
      const user = () => [...userOld, { name, cpf, phone, email }];
      const dinamicUser =
        localStorage.getItem("users") !== null ? user() : firstUser;

      localStorage.setItem("users", JSON.stringify(dinamicUser));
      console.log(JSON.parse(localStorage.getItem("users")));

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
  align-self: flex-start;
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
  margin-bottom: 1.5rem;
  min-height: 3rem;
  position: relative;
}

.form-input span {
  margin-top: 0.5rem;
  color: #eb4a46;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: absolute;
  left: 0;
  bottom: 0;
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
  border-bottom: solid #eb4a46 1px !important;
}
</style>
