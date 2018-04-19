<template>
  <div class="wrapper">
    <p>UCI第26届年会，UCIMUN 2018将于2018年4月28日至29日举行！注册现已开放！</p>
    <div class="banner">
      <img v-for="(value,index) in imgs" :key="index" :src="value" alt="">
    </div>
    <p v-for="(value, index) in texts" :key="index">{{value}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgs: [
        require('@/assets/pat_about1.png'),
        require('@/assets/pat_about2.png'),
        require('@/assets/pat_about3.png')
      ],
      texts: [
        '高山仰止，景行行止，虽不能至，然心向往之.',
        '每个模联人心中都有一个自己的天下，有一段年少轻狂而又气壮山河的梦想。',
        '2018，我们重新起航。',
        '一场学术盛宴，一个难忘的记忆，',
        '或许是一个完美的句号，又或是一个崭新的起点。',
        '我们期待着，',
        '在早春二月，洗去尘世喧嚣与尘埃的蓉城里，',
        '看到你的身影，',
        '和你一同西装革履，以外交官的身份尽情绽放！'
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
    .banner {
      display: flex;
      justify-content: space-between;
      padding: 2rem 0;
      img {
        height: auto;
        width: 30%;
      }
    }
  }
</style>
