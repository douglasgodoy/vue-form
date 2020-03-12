<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";

export default {
  name: "App",
  components: {
    Main,
    Header,
    Footer
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
</style>
