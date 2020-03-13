<template>
  <div id="app">
    <Header />
    <div id="content">
      <Nav>
        <button @click="componente = 'Main'">Form</button>
        <button @click="componente = 'List'">Lista</button>
      </Nav>
      <component :is="componente" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
import Nav from "./components/Nav";
import List from "./views/List";

export default {
  name: "App",
  components: {
    Main,
    Header,
    Footer,
    Nav,
    List
  },
  data() {
    return {
      componente: "Main"
    };
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#content {
  min-height: 80vh;
}
</style>
