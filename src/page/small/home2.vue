<template>
  <div class="home">
    <div class="wrap">
      <router-link class="jump jump1" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump2" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump3" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump4" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump5" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump6" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump7" to="/index"></router-link>
      <router-link class="jump jump8" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump9" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump10" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump11" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump12" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump13" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump14" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump15" :to="{ name: 'Page'}"></router-link>
      <router-link class="jump jump16" :to="{ name: 'Page'}"></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>
<style scoped>
  .home {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../assets/images/home/home.png)
                no-repeat
                scroll
                center center/100%;
    z-index: 1;
  }
  .wrap {
    width: 100%;
    height: 85%;
    margin-top: 8%;
    display: flex;
    flex-wrap: wrap;
  }
  .jump {
    width: 25%;
    height: 25%;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }
</style>