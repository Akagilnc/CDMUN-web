<template>
  <div class="header-wrapper">
    <div class="logo-line">
      <img src="@/assets/logo.png" alt="logo">
      <img src="@/assets/pat_human_small.png" alt="human">
      <div class="login">
        <router-link to="/signup">注册</router-link>
        <router-link to="/signin">登录</router-link>
      </div>
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#2C305C"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to='/'>首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to='/notice'>通知公告</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to='/join'>参会报名</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to='/about'>关于我们</router-link></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'web-header'
}
</script>

<style lang="scss">
  div.header-wrapper {
    a {
      color: #ffffff;
    }
    width: 100%;
    height: 210px;
    background-image: url(../../assets/bg_small.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .logo-line {
      height: 117px;
      padding : 30px 15% 0 15%;
      background-color: rgba(255,255,255,0.1);
      margin: 0 auto;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      img {
        width: 23%;
        height: auto;
        max-height: 100%;
      }
      .login {
        width: 20%;
      }
    }
    .nav {
      width: 50%;
      margin-left: 15%;
      ul {
        border: none;
      }
      ul li {
        height: 100%;
      }
    }
  }
</style>
