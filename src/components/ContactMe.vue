<template>
  <div class="container">
    <h1>联系我</h1>
    <el-form>
      <el-form-item label="姓名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="留言">
        <el-input type="textarea" v-model="message"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ContactMePage',
  data() {
    return {
      name: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      console.log('提交留言：', this.name, this.message);
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