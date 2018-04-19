<template>
  <div class="wrapper">
    <div class="content">
      <div class="time-line">
        <div v-for="n in 4" :key="n" class="time">
          <p>会场介绍贰</p>
          <p>2018-01-01</p>
        </div>
        <div class="line"></div>
      </div>
      <h4>【会场介绍一】</h4>
      <p>特殊委员会</p>
      <p>亚洲和太平洋联动体系</p>
      <h4>一、会场简介：</h4>
      <p>议 题：亚洲和太平洋联动体系</p>
      <p>工作语言：中文</p>
      <p>主席长： 刘晓林（青岛理工大学）</p>
      <p>主席团成员：冯春元（中国人民大学）</p>
      <p>冯铁岩（中国矿业大学）</p>
      <p>李思睿（中国政法大学）</p>
      <p>石瑞蒙（中国社会科学院大学）</p>
      <p>王思宇（上海师范大学）</p>
      <p>王若鑫（西南科技大学）</p>
      <h4>二、议题介绍：</h4>
      <p>2017年8月26日早晨6点，日本北海道突然警报大作，无数迷茫的日本人张望天空，只见一枚导弹自北海道方向呼啸而来，在空中缀出一道弧线，随后裂成三段，落入了日本东侧的太平洋海域。</p>
      <p>日本民众在短暂的惊吓过后，便头也不抬地投入了高压的生活当中。但是，亚太地区却更加躁动了起来。</p>
      <p>首先起身的，是蠢蠢欲动的朝鲜。他们以超人的积极性试验着早已被国际视为禁器的核弹。其“两弹”速度不断加快，半岛局势不断紧张。朝鲜正以弹丸之国的身躯，极尽刺激着世界的敏感的神经末梢。它走出强军之路，不断进行导弹试验，却也消磨着强权大国的战略耐心。邻国韩国国内政治动荡，却也高筑围墙，“萨德”成为撬动东亚的支点，为半岛乱局带去新的变数。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data () {
    return {
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
    .content {
      background: #2C305D;
      text-align: left;
      padding: 3%;
    }
    .time-line {
      display: flex;
      justify-content: space-around;
      position: relative;
      .line {
        position: absolute;
        background: #3B5787;
        z-index: 1;
        top: 50%;
        width: 100%;
        height: 2px;
      }
      .time {
        z-index: 2;
        background: #2C305D;
        padding: 0 1rem;
      }
    }
  }
</style>
