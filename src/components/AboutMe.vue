<template>
  <div class="container">
    <h1>关于我</h1>
    <el-form label-position="top">
      <el-form-item label="姓名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="简历">
        <el-input type="textarea" v-model="resume"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AboutMePage',
  data() {
    return {
      name: '你的名字',
      resume: '你的简历内容'
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>