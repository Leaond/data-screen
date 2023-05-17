<template>
  <div>
    <el-button @click="goHome" type="primary">登陆</el-button>
  </div>
</template>

<script>
export default {
methods:{
  goHome(){
    this.$router.push('/home')
  }
}
}
</script>

<style>

</style>