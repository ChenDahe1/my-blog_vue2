<template>
    <div>
      <el-form ref="form" :model="article" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="摘要">
          <el-input v-model="article.summary"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitArticle">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        article: {
          title: '',
          summary: ''
        }
      };
    },
    methods: {
      submitArticle() {
        this.$emit('submit-article', { ...this.article });
        this.article.title = '';
        this.article.summary = '';
      }
    }
  }
  </script>
  
  <style scoped>
  /* 你的样式 */
  </style>
  