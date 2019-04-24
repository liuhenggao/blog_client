<template>
  <div id="edit">
    <div class="edit_form">
      <h1>编辑文章</h1>
      <h3>文章标题</h3>
      <el-input v-model="title"></el-input>
      <h3>内容简介</h3>
      <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" v-model="description"></el-input>
      <span>限30个字</span>
      <h3>内容内容</h3>
      <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 20}" v-model="content"></el-input>
      <section>
      <span>是否展示到首页</span>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </section>
      <el-button @click="updateBlog">确定</el-button>
    </div>
  </div>
</template>


<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>

