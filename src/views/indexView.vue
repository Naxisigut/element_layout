<template>
    <div class="container">
      <div v-for="item, index in routes" :key="index" @click="$router.push(item.path)" class="btn" >{{item.meta.title}}</div>
    </div>
</template>

<script>
export default {
  name: 'indexView',
  data() {
    return {
      routes:this.$router.getRoutes().filter((item)=>item.parent?.path === '/display')
    }
  },
}
</script>

<style scoped >
.container {
  box-sizing: border-box;
  margin: 100px auto;
  padding: 50px;
  width: 70%;
  background-color: #eee;
  border-radius: 10px;
  min-height: 500px;
}
.btn:hover {
  color: peru;
}
</style>