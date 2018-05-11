<template>
  <div class="wrapper">
    <p>模拟联合国简介</p>
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
        '模拟联合国(Model United Nations)是模仿联合国及相关的国际机构，依 据其运作方式和议事原则，围绕国际上的热点问题召开的会议。',
        '青年学生们扮演 不同国家的外交官，作为各国代表，参与到“联合国会议”当中。',
        '代表们遵循大会 规则，在会议主席团的主持下，通过演讲阐述“自己国家”的观点，为了“自己国家” 的利益进行辩论、游说，他们与友好的国家沟通协作，解决冲突;',
        '他们讨论决议 草案，促进国际合作;他们在“联合国”的舞台上，以富有批判性和创造性的思维 和行动试图寻求解决重大国际问题的方法，充分发挥自己的才能。',
        '虽然对模拟联合国活动起源没有确切的历史记载，但普遍公认这项活动起源 于美国哈佛大学。',
        '在上个世纪五六十年代，就有一批学生活跃在校园里，他们对 国际组织、对国际政治充满了浓厚的兴趣。',
        '活跃的哈佛学子在积极活动的同时探 索出新的形式。',
        '他们开始模拟不同国家的外交官，参照国际联盟的来议事程序讨 论国际问题。',
        '后来联合国成立，这样一种模拟会议的形式被保留下，并逐步发展 成熟，形成了模拟联合国活动。',
        '经过60多年的发展，模拟联合国活动现在已经风靡全世界，形式多样，规模 不一，有国际大会、全国大会，还有地区级和校际间的大会，参与者有大学生到 高中生，乃至初中生。',
        '同时，模拟联合国活动已经不仅仅是对联合国机构的模拟， 它还包括对其他全球或地区性多边组织，政府内阁，国际论坛等组织或者会议的 模拟。',
        '目前全世界每年有近四百个国际模拟联合国大会在五大洲的50多个国家召 开。每年参与大会的师生来自世界100多个国家，总人数超过四百万人。 '
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
