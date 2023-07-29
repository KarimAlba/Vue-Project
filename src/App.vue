<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <HeaderComponentVue/>
  <NavBarComponentVue/>
</template>

<script>
  import HeaderComponentVue from './components/HeaderComponent.vue';
  import NavBarComponentVue from './components/NavBarComponent.vue';

  export default {
    components: {
      HeaderComponentVue,
      NavBarComponentVue
    }
  }
</script>

<style lang="scss">
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
