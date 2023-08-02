<template>
  <router-view/>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  *{
    font-family: 'Roboto', sans-serif;
  }

  body{
    margin: 0;
    padding: 0;
  }

  a,
  button{
    text-decoration: none;
    cursor: pointer;
  }

  #app{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
