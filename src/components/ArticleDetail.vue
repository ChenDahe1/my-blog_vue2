<template>
  <div class="container">
    <el-card v-if="article">
      <h1>{{ article.title }}</h1>
      <p>{{ article.content }}</p>
    </el-card>
    <el-alert v-else title="文章未找到" type="error" />
    <span>啊啊啊</span>
  </div>

</template>

<script>
import api from '@/services/api';

export default {
  name: 'ArticleDetailPage',
  data() {
    return {
      article: null
    }
  },
  created() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      try {
        const articleId = this.$route.params.id;
        const response = await api.getArticle(articleId);
        this.article = response.data;
      } catch (error) {
        console.error('Error fetching article:', error);
      }
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