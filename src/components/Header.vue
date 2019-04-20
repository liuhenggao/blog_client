<template>
    <header :class="{'login':isLogin, 'no_login': !isLogin}">
        <template v-if=!isLogin>
            <h1>Let's share</h1>
            <p>共享精彩世界</p>
            <div class="log_button">
                <el-button>立即登录</el-button>
                <el-button>注册账号</el-button>
            </div>
        </template>
        <template v-else>
            <div>
                <h1>Let's share</h1>
            </div>
            <div class="icon_img">
                <i class="el-icon-edit"></i>
                <img src="../assets/logo.png">
            </div>
        </template>
    </header>
</template>


<script>
export default {
    data(){
        return {
            isLogin: false
        }
    }
}
</script>


<style lang="less" scoped>
@import "../assets/base.less";

header.no_login{
    padding: 0 12% 30px 12%;
    background: @bgColor;
    display: grid;
    justify-content: center;

    h1{
        color: #fff;
        font-size: 40px;
        margin: 60px 0 0 0;
        text-transform: uppercase;
    }
    p {
        margin: 15px 0 0 0;
        color: #fff;
        text-align: center;
    }
    .log_button{
        margin: 0 auto;
    }
    button{
        margin: 20px 5px 0;
    }
}
header.login{
    padding: 0 12% 0 12%;
    background: @bgColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        color: #fff;
        font-size: 30px;
        margin: 10px 0;
        text-transform: uppercase;
    }
    i{
        display: inline-block;
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: #fff;
        vertical-align: middle;
        padding-right: 10px;
    }
    img{
        width: 40px;
        border: 1px solid #2c3e50;
        border-radius: 40px;
        vertical-align: middle;
    }
}
</style>
