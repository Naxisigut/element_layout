<template>
  <div>
    <div class="btn" ><button @click="$router.back()" >back to index</button></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'layoutView'
  // watch:{
  //   $route(){
  //     console.log("layoutView")
  //   }
  // }
}
</script>

<style scoped >
.btn {
  margin: 50px;
  display: flex;
  justify-content: center;
}
</style>