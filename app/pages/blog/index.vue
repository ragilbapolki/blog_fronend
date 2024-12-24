<script setup>
import { ref, onMounted } from 'vue';
import { getPosts } from '../../../services/blog';

const posts = ref([]);

onMounted(async () => {
  posts.value = await getPosts();
});
</script>

<template>
  <UContainer>
    <UPageHeader
      v-bind="page"
      class="py-[50px]"
    />

    <UPageBody>
      <UBlogList>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :description="post.content"
          :image="post.image"
          :authors="post.authors"
          :date="new Date(post.created_at).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
          :badge="post.badge"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogList>
    </UPageBody>
  </UContainer>
</template>
