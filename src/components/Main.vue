<template>
  <div id="content">
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
          <span v-if="!invalid">Campo não pode ser vazio ou menor que 3 caracteres!</span>
        </div>
        <div class="form-input">
          <input type="text" id="email" name="email" placeholder="E-mail" autocomplete="off" />
          <span v-if="!invalid">Email inválido!</span>
        </div>
        <div class="form-input w-5 ml-3">
          <input type="text" id="cpf" name="cpf" placeholder="CPF" autocomplete="off" />
          <span v-if="!invalid">CPF inválido!</span>
        </div>
        <div class="form-input w-5">
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="Telefone"
            autocomplete="off"
          />
          <span v-if="!invalid">Telefone inválido!</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  methods: {
    invalid: () => {
      return false;
    }
  }
};
</script>

<style scoped>
#content {
  min-height: 80vh;
}

#form {
  width: 50vw;
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
  width: 47%;
  display: inline-block;
}

.form-input {
  margin-bottom: 15px;
}

.ml-3 {
  margin-right: 1.5rem;
}

.border-danger {
  border-bottom: solid #eb4a46 1px;
}

.form-input span {
  margin-top: 0.5rem;
  color: #eb4a46;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
