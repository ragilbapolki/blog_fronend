<template>
  <div>
    <h1>Blog Posts</h1>
    <div v-for="blog in blogs" :key="blog.id">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    axios.get('http://localhost/api/blogs')
      .then((response) => {
        this.blogs = response.data;
      })
      .catch((error) => {
        console.error('There was an error fetching the blogs:', error);
      });
  },
};
</script>
