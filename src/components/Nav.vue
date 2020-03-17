<template>
  <div class="nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>


<style>
.nav {
  text-align: center;
  max-width: 40%;
  margin: 0 auto 1.5rem auto;
}
.nav a {
  text-decoration: none;
  color: #2c3e50;
  padding: 0 20%;
  border-bottom: solid #efeeed 1px;
  font-size: 25px;
}

.router-link-exact-active {
  border-bottom: solid #2c3e50 2px !important;
}
</style>
