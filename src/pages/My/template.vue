<template>
  <div id="my">
   <figure>
      <img :src="user.avatar">
      <span>{{user.username}}</span>
    </figure>
    <hr>
    <section>
      <router-link class="myArticle" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <span class="time">{{spliteDate(blog.createdAt).day}}</span>
        <div class="yearMonth">
          <span>{{spliteDate(blog.createdAt).month}}月</span>
          <div>{{spliteDate(blog.createdAt).year}}</div>
        </div>
        <h3>{{blog.title}}</h3>
        <p>
          {{blog.description}}
        </p>
        <span class="radio">
          <router-link :to='`/edit/${blog.id}`'>编辑</router-link>
          <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
        </span>
      </router-link>

    </section>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="total" 
      @current-change="onPageChange" :current-page.sync="page"></el-pagination>
    </div>
  </div>
</template>


<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>

