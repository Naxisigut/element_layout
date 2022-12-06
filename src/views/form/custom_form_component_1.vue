<template>
  <div class="page-container">
    <div class="container">
        <MyForm></MyForm>
    </div>
    <!-- <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>说明区</li>
      </ul>
    </div> -->

  </div>
</template>

<script>
import MyForm from "@/components/my-form";
export default {
  components:{
    MyForm
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style scoped lang='less'>
  @import '@/style/formStyle.less';
</style>
