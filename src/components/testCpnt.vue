<template>
  <div>
    test
  </div>
</template>

<script>
export default {
  watch:{
    $route(to){
      console.log("to.name =", to.name)
    }
  },
  mounted(){
    console.log("mounted =")
  },
  activated(){
    console.log("activated =")
  }
}
</script>

<style>

</style>