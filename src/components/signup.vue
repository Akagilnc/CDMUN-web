<template>
  <div class="wrapper">
    <div class="title">注册</div>
    <div class="content">
      用户名：
      <el-input
        placeholder="请输入内容"
        size="large"
        v-model="username">
      </el-input>
      密码：
      <el-input
        placeholder="请输入内容"
        size="large"
        type="password"
        v-model="password">
      </el-input>
      确认密码：
      <el-input
        placeholder="请输入内容"
        size="large"
        type="password"
        v-model="confirmPassword">
      </el-input>
      <el-button type="primary" @click.native="handleSubmit">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleSubmit () {
      if (this.password !== this.confirmPassword) {
        this.$message.error('两次密码输入不一致')
      } else {
        console.log(this.username)
        console.log(this.password)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  div.wrapper {
    background-color: #20244A;
    border: 1px #979797 solid;
    padding: 1rem 20%;
    .title {
      background: #2C305D;
      width: 15rem;
      line-height: 3rem;
    }
    .content {
      background: #2C305D;
      text-align: left;
      padding: 3% 20%;
    }
  }
</style>
