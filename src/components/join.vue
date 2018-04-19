<template>
  <div class="wrapper">
    <div class="title">
      <div class="left">
        <h3>填写报名</h3>
      </div>
      <div class="right">
        <p>NOTICE：<small>请完整填写信息，账号、密码仅用于网站登录，不作为参会信息使用，所有注册信息将严格保密，请放心填写</small></p>
      </div>
    </div>
    <div class="content">
      <div class="left">基本信息:</div>
      <div class="right">
        <div v-for="(item, index) in inputs" :key="index" class="input-group">
          {{item}}
          <el-input
            size="small"
            placeholder="请输入内容"
            :v-model="`input${index}`">
          </el-input>
        </div>
      </div>
      <hr/>
      <div class="left">基本信息:</div>
      <div class="right">
        <div v-for="(item, index) in infos" :key="index" class="input-group wide">
          {{item}}
          <el-input
            size="small"
            placeholder="请输入内容"
            :v-model="`info${index}`">
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputs: [
        '姓名:', '性别:', '学校:', '邮箱:', '手机:', '意向双代:', '参会经历:', '监护人手机:'
      ],
      infos: [
        '一志愿会场：', '二志愿会场：', '三志愿会场：', '四志愿会场：'
      ]
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
      display: flex;
      .right {
        width: 50%
        small {
          font-size: 10px;
          font-weight: normal;
        }
      }
      .left {
        width: 50%;
        background: #2C305D;
      }
    }
    .content {
      background: #2C305D;
      text-align: left;
      padding: 3%;
      hr {
        margin: 2rem 0;
      }
      .left {
        width: 15%;
        display: inline-block;
      }
      .right {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        .input-group {
          width: 20%;
          margin: 1% 1%;
          &.wide {
            width: 45%;
          }
        }
      }
    }
  }
</style>
