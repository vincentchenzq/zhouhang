<style></style>
<template>
  <div class="about-us">
    <Card>
      <p slot="title">{{ msg }}</p>
      <div class="text-left" style="padding-left:20px;">
        <div>舟航是从事商标业务的知识产权网站平台，旨在为用户解决商标问题。</div>
        <div>
          舟航有能为客户提供商标注册、商标转让、商标撤三等相关业务，
          平台建立商标转让数据库。
        </div>
        <div>平台种类多、数据全，包含45大类所有商标。</div>
        <div>
          平台网站拥有诸多资深商标专业人士，
          商标业务实践经验丰富，技术功底扎实，
          全方位地为客户提供专业的商标服务。
        </div>
        <div>舟航以数据库为依托，有国内大量闲置商标。</div>
        <div>总会找到适合你一款的商标，让商标购买更省心。</div>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
    data() {
        return {
            msg: '关于我们'
        };
    }
};
</script>
