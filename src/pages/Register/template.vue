<template>
  <div id="register">
    <div class="register_form">
      <h3>用户名</h3>
      <el-input class="register_input" v-model="username" placeholder="请输入用户名" clearable></el-input>
      <h3>密码</h3>
      <el-input class="register_input" v-model="password" placeholder="请输入密码" show-password></el-input>
      <el-button @click="onRegister">立即注册</el-button>
      <span>
        已有账号，
        <router-link to="/login">立即登录</router-link>
      </span>
    </div>
  </div>
</template>


<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>

