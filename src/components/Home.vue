<template>
  <div class="container">
    <!-- 文章提交表单组件 -->
    <article-form @submit-article="addArticle"></article-form>
    
    <!-- 使用 Element UI 的 Row 和 Col 组件创建响应式布局 -->
    <el-row :gutter="20">
      <!-- 遍历文章列表，每篇文章显示在一个 Column 中 -->
      <el-col :span="8" v-for="article in articles" :key="article.id">
        <!-- 使用 Element UI 的 Card 组件展示文章 -->
        <el-card class="article-card">
          <h2>{{ article.title }}</h2>
          <p>{{ article.summary }}</p>
          <!-- 使用 Vue Router 的 router-link 创建导航链接 -->
          <router-link :to="'/article/' + article.id">
            <el-button type="primary" size="mini">阅读更多</el-button>
          </router-link>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleForm from './ArticleForm.vue'; // 引入文章提交表单组件
import api from '@/services/api'; // 引入 API 服务

export default {
  name: 'HomePage',
  components: {
    ArticleForm
  },
  data() {
    return {
      articles: [] // 用于存储文章列表
    }
  },
  created() {
    this.fetchArticles(); // 组件创建时调用 fetchArticles 方法获取文章列表
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await api.getArticles(); // 调用 API 获取文章列表
        console.log('Fetched articles:', response.data);
        this.articles = response.data; // 将获取到的文章列表存储在 articles 数组中
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    },
    addArticle(newArticle) {
      newArticle.id = this.articles.length + 1; // 为新文章生成唯一 ID
      this.articles.push(newArticle); // 将新文章添加到文章列表中
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px; /* 设置容器最大宽度 */
  margin: 20px auto; /* 设置容器居中并有上下外边距 */
  padding: 20px; /* 设置容器内边距 */
  background-color: #fff; /* 设置容器背景颜色 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 设置容器阴影效果 */
  border-radius: 8px; /* 设置容器圆角 */
}
.article-card {
  margin-bottom: 20px; /* 设置文章卡片底部外边距 */
}
</style>