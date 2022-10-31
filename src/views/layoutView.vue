<template>
  <div>
    <div class="btn" ><button @click="$router.back()" >back</button></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.btn {
  margin: 50px;
  display: flex;
  justify-content: center;
}
</style>