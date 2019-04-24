<template>
  <div id="detail">
    <figure>
      <img :src="user.avatar">
      <h3 class="title">{{title}}</h3>
      <span>
        <span class="author">{{user.username}}</span>
        <span class="time">{{timeFilter(time)}}</span>
      </span>
    </figure>
    <hr>
    <section class="article" >
      <p>{{description}}</p>
      <div v-html="markdown"></div>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>


