import axios from 'axios';

const apiClient = axios.create({
  baseURL: '', // 留空表示使用相对路径
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getArticles() {
    return apiClient.get('/articles.json'); // 使用本地 JSON 文件
  },
  getArticle(id) {
    return apiClient.get(`/article-${id}.json`); // 使用本地 JSON 文件
  }
}