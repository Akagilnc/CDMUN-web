<template>
  <div class="footer-wrapper">
    <div>成都模拟联合国大会 CDMUN2018</div>
    <div><img src="@/assets/icon_QQ.png" alt="">官PO QQ：1276906357</div>
    <div><img src="@/assets/icon_QQ.png" alt="">微信公众号：CDMUN2018</div>
  </div>
</template>

<script>
export default {
  name: 'web-footer'
}
</script>

<style lang="scss" scoped>
  div.footer-wrapper {
    height: 156px;
    background: #20244A;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15%;
    div {
      height: 1.5rem;
      line-height: 1.5rem;
      img {
        width: 1rem;
        height: auto;
        display: inline-block;
        vertical-align: center;
        margin-right: .5rem;
      }
    }

  }

</style>
