<template>
  <div id="header">
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
div#header {
  display: flex;
  align-items: center;
  text-align: left;
  height: 10vh;
  background: #2c3e50;
  background: -webkit-linear-gradient(to right, #4ca1af, #2c3e50);
  background: linear-gradient(to right, #4ca1af, #2c3e50);
}

div img {
  height: 8vh;
  margin: 0 10px;
}
</style>
