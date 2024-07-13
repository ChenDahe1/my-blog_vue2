<template>
  <div class="home">
    <!-- 横幅轮播图 -->
    <el-carousel height="500px">
      <el-carousel-item v-for="item in carouselItems" :key="item.id">
        <img :src="item.image" class="carousel-image" />
        <div class="carousel-caption">
          <h2>{{ item.caption }}</h2>
          <el-button type="primary">Shop Here</el-button>
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- 内容区块 -->
    <div class="content-blocks">
      <div class="content-block" v-for="block in contentBlocks" :key="block.id">
        <img :src="block.image" class="content-image" />
        <div class="content-caption">
          <h3>{{ block.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      carouselItems: [
        { id: 1, image: 'path/to/image1.jpg', caption: 'All New Wallpaper Prints' },
        { id: 2, image: 'path/to/image2.jpg', caption: 'Discover Our Latest Projects' }
      ],
      contentBlocks: [
        { id: 1, image: 'path/to/content1.jpg', title: 'Virtual Design 1-on-1' },
        { id: 2, image: 'path/to/content2.jpg', title: 'Book a Stay' }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  margin: 20px auto;
  max-width: 1200px;
}

.carousel-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

.content-blocks {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

.content-block {
  width: 45%;
  position: relative;
}

.content-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.content-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}
</style>
