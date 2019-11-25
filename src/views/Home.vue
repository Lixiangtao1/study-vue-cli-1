<template>
  <div class="home">
    <span>进入vue-cli</span><br>
    <router-link to="/about">切换页面</router-link>
    <!-- <router-view>about</router-view> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .home{
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
</style>
