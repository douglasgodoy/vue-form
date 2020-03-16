<template>
  <div id="app">
    <Header />
    <div id="content">
      <Nav>
        <router-link :to="{ name: 'Main'}">Form</router-link>
        <router-link :to="{ name: 'List'}">Lista</router-link>
      </Nav>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Nav
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
