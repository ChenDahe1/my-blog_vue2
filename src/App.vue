<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="navbar-left">
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/before-after">Before & Afters</router-link>
          <router-link to="/shop">Shop Our Homes</router-link>
          <router-link to="/rent">Rent Our Homes</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="navbar-right">
          <el-input placeholder="Search..." prefix-icon="el-icon-search" />
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.navbar {
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left a {
  margin-right: 20px;
  text-decoration: none;
  color: black;
}

.navbar-right .el-input {
  width: 200px;
}
</style>
