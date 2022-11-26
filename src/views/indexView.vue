<template>
    <div class="container">
      <div class="display">
        <div class="firstPage left" ref="firstPage">
          <button @click="go">2</button>
        </div>
        <!-- <div v-for="item, index in indexCata" :key="index" class="btn" >{{item.name}}</div> -->


        <div class="secondPage right" ref="secondPage">2</div>
      </div>
    </div>
</template>

<script>
import { indexCata } from "@/router";
export default {
  name: 'indexView',
  data() {
    return {
      indexCata
    }
  },
  methods:{
    go(){

    }
  }
}
</script>

<style scoped>
.container{
  width: 100vw;
  height: 100vh;
  display: flex;
}
.display {
  margin: auto;
  padding: 50px;
  width: 700px;
  background-color: #eee;
  border-radius: 10px;
  min-height: 500px;
}
.displayWrapper{

}
.firstPage{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.secondPage{
  display: inline-block;
  width: 100%;
}
.btn:hover {
  color: peru;
}
</style>