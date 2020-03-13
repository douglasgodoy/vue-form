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
}
.nav button {
  background: #fff;
  /* margin: 0 20px; */
  border: none;
  min-width: 25vw;
  min-height: 40px;
  border-bottom: solid #efeeed 1px;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
}

.nav button:focus {
  outline: none;
}

</style>
