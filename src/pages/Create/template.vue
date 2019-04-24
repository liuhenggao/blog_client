<template>
  <div id="create">
    <div class="create_form">
      <h1>创建文章</h1>
      <h3>文章标题</h3>
      <el-input v-model="title"></el-input>
      <h3>内容简介</h3>
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="description"></el-input>
      <span>限30个字</span>
      <h3>内容内容</h3>
      <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 50}" v-model="content"></el-input>
      <section>
      <span>是否展示到首页</span>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </section>
      <el-button @click="onCreate">立即发布</el-button>
    </div>
  </div>
</template>

<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>





