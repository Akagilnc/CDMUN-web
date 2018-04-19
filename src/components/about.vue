<template>
  <div class="wrapper">
    <div class="title">关于我们</div>
    <div class="content">
      <div class="top3">
        <div class="top" v-for="(item,index1) in top3" :key="index1">
          <img :src="item.avatar" alt="">
          <h4>{{item.name}}<span>{{item.desc}}</span></h4>
          <div class="exp" v-for="(values, name ,index2) in item.exp" :key="index2">
            <p>{{name}}：</p>
            <ul>
              <li v-for="(value, index3) in values" :key="index3">{{value}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom5">
        <div class="bottom" v-for="(item,index) in bottom5" :key="index">
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
          avatar: require('@/assets/pat_about1.png'),
          name: '李雨潇',
          desc: '现任成都市实验外国语学校模拟联合国社团社长',
          exp: {
            '代表经历': [
              '2016 七中嘉祥MUN 最佳新人奖',
              '2016 国际关系学院MUN  最佳风采奖',
              '2017 优梦西南MUN',
              '2017 七中林荫MUN 荣誉提名',
              '2017 复旦大学国际中学生MUN'
            ],
            '秘书处经历': [
              '2017 树德协进MUN 秘书处',
              '2017 西南MUN 秘书处'
            ],
            '学术团队经历': [
              '2017 石室MUN 七国集团首脑会议 Dais',
              '2017 七中嘉祥MUN  联动体系阿盟会场 Dais'
            ]
          }
        }, {
          avatar: require('@/assets/pat_about2.png'),
          name: '李雨潇',
          desc: '现任成都市实验外国语学校模拟联合国社团社长',
          exp: {
            '代表经历': [
              '2016 七中嘉祥MUN 最佳新人奖',
              '2016 国际关系学院MUN  最佳风采奖',
              '2017 优梦西南MUN',
              '2017 七中林荫MUN 荣誉提名',
              '2017 复旦大学国际中学生MUN'
            ],
            '秘书处经历': [
              '2017 树德协进MUN 秘书处',
              '2017 西南MUN 秘书处'
            ],
            '学术团队经历': [
              '2017 石室MUN 七国集团首脑会议 Dais',
              '2017 七中嘉祥MUN  联动体系阿盟会场 Dais'
            ]
          }
        }, {
          avatar: require('@/assets/pat_about3.png'),
          name: '李雨潇',
          desc: '现任成都市实验外国语学校模拟联合国社团社长',
          exp: {
            '代表经历': [
              '2016 七中嘉祥MUN 最佳新人奖',
              '2016 国际关系学院MUN  最佳风采奖',
              '2017 优梦西南MUN',
              '2017 七中林荫MUN 荣誉提名',
              '2017 复旦大学国际中学生MUN'
            ],
            '秘书处经历': [
              '2017 树德协进MUN 秘书处',
              '2017 西南MUN 秘书处'
            ],
            '学术团队经历': [
              '2017 石室MUN 七国集团首脑会议 Dais',
              '2017 七中嘉祥MUN  联动体系阿盟会场 Dais'
            ]
          }
        }
      ],
      bottom5: [{
        avatar: require('@/assets/pat_about4.png'),
        name: '余紫琪 ',
        desc: '公关总监'
      }, {
        avatar: require('@/assets/pat_about5.png'),
        name: '余紫琪 ',
        desc: '公关总监'
      }, {
        avatar: require('@/assets/pat_about6.png'),
        name: '余紫琪 ',
        desc: '公关总监'
      }, {
        avatar: require('@/assets/pat_about7.png'),
        name: '余紫琪 ',
        desc: '公关总监'
      }, {
        avatar: require('@/assets/pat_about8.png'),
        name: '余紫琪 ',
        desc: '公关总监'
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
