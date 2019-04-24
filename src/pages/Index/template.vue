<template>
  <div id="index">
    <div class="atIndex" v-for="blog in blogs" :key="blog.id">
      <figure>
        <router-link :to="{path: `/user/${blog.user.id}`}">
        <img :src="blog.user.avatar">
        <div>{{blog.user.username}}</div>
        </router-link>
      </figure>
      <router-link :to="`/detail/${blog.id}`">
        <section>
          <h3>{{blog.title}}</h3>
          <span>{{timeFilter(blog.createdAt)}}</span>
        </section>
        <p>{{blog.description}}</p>
      </router-link>
    </div>
    <section class="paging">
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="total" 
        @current-change="onPageChange" :current-page.sync="page"></el-pagination>
      </div>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>


