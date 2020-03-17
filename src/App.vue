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
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
</style>
