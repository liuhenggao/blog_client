<template>
  <div id="login">
    <div class="login_form">
      <h3>用户名</h3>
      <el-input class="login_input" v-model="username" placeholder="请输入用户名" clearable></el-input>
      <h3>密码</h3>
      <el-input class="login_input" v-model="password" placeholder="请输入密码"   @keyup.enter="onLogin" show-password></el-input>
      <el-button @click="onLogin">立即登录</el-button>
      <span>没有账号？<a>注册新用户</a></span>
    </div>
  </div>
</template>


<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>

