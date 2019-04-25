<template>
  <header :class="{'login':isLogin, 'no_login': !isLogin}">
    <template v-if="!isLogin">
      <h1><router-link to="/">Let's share</router-link></h1>
      <p>共享精彩世界</p>
      <div class="log_button">
        <router-link to="login"><el-button>立即登录</el-button></router-link>
        <router-link to="register"><el-button>注册账号</el-button></router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <div>
        <h1><router-link to="/">Let's share</router-link></h1>
      </div>
      <div class="icon_img">
        <router-link to="/create"><i class="el-icon-edit"></i></router-link>
        <div class="user">
          <img :src="user.avatar" :alt="user.username">
          <ul>
            <li>
              <router-link to="/my">我的</router-link>
            </li>
            <li @click=onLogout>
              <router-link to="/">注销</router-link>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </header>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import auth from "@/api/auth";
window.auth = auth;

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user", "isLogin"])
  },
  created() {
    this.checkLogin().then(isLogin => {});
  },
  methods: {
    ...mapActions(["checkLogin","logout"]),
    onLogout(){
        this.logout()
    }
  }
};
</script>


<style lang="less" scoped>
@import "../assets/base.less";

header.no_login {
  padding: 0 12% 30px 12%;
  background: @bgColor;
  display: grid;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
    a{
      text-decoration: none;
      color: #ffffff;
    }
  }
  p {
    margin: 15px 0 0 0;
    color: #fff;
    text-align: center;
  }
  .log_button {
    margin: 0 auto;
  }
  button {
    margin: 30px 10px 0;
    padding: 4px 15px;

    span{
      line-height: 28px;
      color: @bgColor;
    }
  }
}

header.login {
  padding: 0 12% 0 12%;
  background: @bgColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 30px;
    margin: 10px 0;
    text-transform: uppercase;
  }
  .icon_img {
    i {
      display: inline-block;
      width: 30px;
      height: 30px;
      font-size: 30px;
      color: #fff;
      vertical-align: middle;
      padding-right: 10px;
    }

    .user {
        display: inline-block;
        position: relative;
        padding: 5px 0;
        &:hover ul{
            display: block;
        }
      img {
        width: 40px;
        border: 1px solid #2c3e50;
        border-radius: 50%;
        vertical-align: middle;
      }
      ul {
        display: none;
        list-style: none;
        position: absolute;
        background: #fafafa;
        border: 1px solid #f1f1f3;
        border-radius: 1px;
        margin-top: 5px;
        margin-right: 3px;
        padding: 0;
        right: 0;
        &:hover{
            display: block;
        }
        a {
          cursor: pointer;
          color: @fontColor;
          font-size: 12px;
          padding: 2px 5px;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
