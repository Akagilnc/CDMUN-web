<template>
  <div class="wrapper">
    <div class="title">关于我们</div>
    <div class="content">
      <div class="top3">
        <div class="top" v-for="(item,index1) in top3" :key="index1">
          <img :src="item.avatar" alt="">
          <h4>{{item.name}}<span>{{item.desc}}</span></h4>
          <p>{{item.intro}}</p>
          <div class="exp" v-for="(values, name ,index2) in item.exp" :key="index2">
            <p>{{name}}：</p>
            <ul>
              <li v-for="(value, index3) in values" :key="index3">{{value}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom5">
        <div class="bottom" v-for="(item,index) in bottom5_1" :key="index">
          <img :src="item.avatar" alt="">
          <div class="left">{{item.name}}</div>
          <div class="right">{{item.desc}}</div>
        </div>
      </div>
      <div class="bottom5">
        <div class="bottom" v-for="(item,index) in bottom5_2" :key="index">
          <img :src="item.avatar" alt="">
          <div class="left">{{item.name}}</div>
          <div class="right">{{item.desc}}</div>
        </div>
      </div>
      <div class="bottom5">
        <div class="bottom" v-for="(item,index) in bottom5_3" :key="index">
          <img :src="item.avatar" alt="">
          <div class="left">{{item.name}}</div>
          <div class="right">{{item.desc}}</div>
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
      top3: [
        {
          avatar: require('@/assets/pat_about2.png'),
          name: '李宇嘉',
          desc: '首席秘书长',
          exp: {
            '个人简历': [
              '第八届树德中学模拟联合国大会 最具潜力奖',
              '第十一届实外模拟联合国大会  荣誉提名',
              '第十一届成都七中模拟联合国大会  杰出代表',
              '第十届成都石室中学模拟联合国大会 副秘书长',
              '第十届成都石室中学模拟联合国大会 最佳配合奖',
              '2017复旦大学国际中学生模拟联合国大会',
              '2017树德外国语&国际模拟联合国大会 最佳报道奖',
              '2017成都嘉祥外国语学校模拟联合国大会 主席',
              '第九届成都树德中学模拟联合国大会 荣誉提名',
              '2018成都模拟联合国大会 副秘书长',
              '第十二届成都七中模拟联合国大会 主席',
              '2018北京大学全国中学生模拟联合国大会 最佳风采奖',
              '2018北京大学全国中学生模拟联合国大会 教师与社团领袖峰会'
            ]
          },
          intro: '拾世初心，方得始终'

        }, {
          avatar: require('@/assets/pat_about2.png'),
          name: '葛俊成',
          desc: '副秘书长',
          intro: '愿与各位模联同仁一起，秉承着学术至上的精神，以严谨的态度来解决问题',
          exp: {
            '个人简历': [
              '第九届成都树德中学模拟联合国大会 最佳文件写作',
              '2018成都模拟联合国大会',
              '第十二届成都七中模拟联合国大会 最佳会议推动',
              '2018北京大学全国中学生模拟联合国大会'
            ]
          }
        },
        {
          avatar: require('@/assets/pat_about3.png'),
          name: '卢天若',
          desc: '首席学术顾问',
          intro: '笔鉴时宜，文起山河',
          exp: {
            '个人简历': [
              '第十一届实外模拟联合国大会 最佳风采',
              '2017复旦大学国际中学生模拟联合国大会 杰出代表',
              '第九届成都树德中学模拟联合国大会 主席',
              '第十二届成都七中模拟联合国大会 荣誉提名'
            ]
          }
        }
      ],
      bottom5_1: [{
        avatar: require('@/assets/pat_about1.png'),
        name: '晏子凌',
        desc: '协调总监'
      }, {
        avatar: require('@/assets/pat_about1.png'),
        name: '陈鑫',
        desc: '会务总监'
      }, {
        avatar: require('@/assets/pat_about6.png'),
        name: '曹东宇',
        desc: '外联总监'
      }, {
        avatar: require('@/assets/pat_about1.png'),
        name: '李显滨',
        desc: '技术总监'
      }, {
        avatar: require('@/assets/pat_about1.png'),
        name: '洪云涛',
        desc: '财务总监'
      }],
      bottom5_2: [{
        avatar: require('@/assets/pat_about1.png'),
        name: '李一灿 ',
        desc: '学术协理'
      }, {
        avatar: require('@/assets/pat_about10.png'),
        name: '黄乐婧',
        desc: '学术协理'
      }, {
        avatar: require('@/assets/pat_about1.png'),
        name: '任思劼',
        desc: '学术协理'
      }, {
        avatar: require('@/assets/pat_about1.png'),
        name: '贾尚霖',
        desc: '学术协理'
      }, {
        avatar: require('@/assets/pat_about13.png'),
        name: '张雪盈',
        desc: '学术协理'
      }],
      bottom5_3: [{
        avatar: require('@/assets/pat_about1.png'),
        name: '潘采菱',
        desc: '会务协理'
      }, {
        avatar: require('@/assets/pat_about1.png'),
        name: '梁菡洋',
        desc: '会务协理'
      }, {
        avatar: require('@/assets/pat_about1.png'),
        name: '周雨婷',
        desc: '技术协理'
      }, {
        avatar: require('@/assets/pat_about1.png'),
        name: '周雨婷',
        desc: '技术协理'
      }, {
        avatar: require('@/assets/pat_about1.png'),
        name: '周雨婷',
        desc: '技术协理'
      }]
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
      padding: 3%;
      p,ul {
        font-size: 12px;
      }
      .top3 {
        display: flex;
        justify-content: space-between;
        .top {
          width: 25%;
          h4 {
            span {
              font-size: 12px;
              display: inline-block;
              width: 65%;
              margin-left: 1rem;
              font-weight: normal;
            }
          }
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .bottom5 {
        display: flex;
        justify-content: space-between;
        .bottom {
          padding: 2rem 2%;
          .left {
            float: left;
          }
          .right {
            float: right;
            font-size: 12px;
          }
        }
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>
