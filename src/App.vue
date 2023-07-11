<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1"
      ><router-link to="/">Crypto List</router-link></el-menu-item
    >
    <el-menu-item index="2"
      ><router-link to="/crypto/bitcoin">Crypto Info</router-link></el-menu-item
    >
  </el-menu>

  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      activeIndex: "1",
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
}

.el-menu--horizontal > .el-menu-item a,
.el-menu--horizontal > .el-menu-item a:hover {
  text-decoration: none;
}
</style>
