<template>
  <div id="app">
      <Header />
      <div class="content">
        <router-view/>
      </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default ({
  components: { Header }
})
</script>

<style lang="scss">
*{
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content{
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px;
}
@media screen and (min-width: 1280px) {
  .content{
    padding: 10px;
  }
}
</style>
