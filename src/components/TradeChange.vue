<style>
  /* .trade-change{

  } */
</style>
<template>
  <div class="trade-change text-left">
    <Collapse  accordion>
      <Panel>
        什么样的企业商标需要变更?
        <div slot="content">
          <p class="ti20">
            1、注册商标需要办理变更注册人的名义、地址或者其他注册事项的，应当提出变更申请。
          </p>
          <p class="ti20">
            2、申请人已经提交注册申请但尚未获准注册的，其名义、地址或者其他注册事项发生变更的，可以向商标局申请办理相应的变更手续。
          </p>
          <p class="ti20">
            3、企业合并、兼并或改制等发生商标专用权移转的，应当办理移转手续。
          </p>
        </div>
      </Panel>
      <Panel>
        为什么需要变更商标？
        <div slot="content" class="ti20">
          变更商标是为了保护权利人权益，如果发现营业执照地址和商标注册证地址不符会被撤销商标拥有资格。
        </div>
      </Panel>
      <Panel>
        商标变更材料？
        <div slot="content">
          1、申请变更商标申请人注册人名义： <br>
          <div class="ml25">
            ① 商标代理委托书 <br>
            ② 营业执照（新） <br>
            ③ 工商局出具的变更证明文件 <br>
          </div>
          2、申请变更商标申请人地址材料： <br>
          <div class="ml25">
            ① 商标代理委托书 <br>
            ② 营业执照（新） <br>
          </div>
          3、变更集体商标、证明商标管理规则、集体成员名单 <br>
          <div class="ml25">
            ① 商标代理委托书 <br>
            ② 营业执照（新） <br>
            ③ 变更后的集体商标集体成员名单 <br>
          </div>
        </div>
      </Panel>
      <Panel>
        什么是商标撤三？
        <div slot="content">
          <div class="ti20">
            商标撤三是指，他人注册商标没有正当理由连续三年不适用的，个人或者企业向商标局申请撤销该商标的行为。
            他人侵占商标资源却不使用，我们可以向其提出撤三申请。
          </div>
        </div>
      </Panel>
      <Panel>
        撤三材料？
        <div slot="content">
          1、申请书 <br>
          2、营业执照副本（盖章） <br>
          3、商标代理委托书 <br>
        </div>
      </Panel>
      <Panel>
        商标异议？
        <div slot="content">
          1、商标异议申请书 <br>
          2、营业执照 <br>
          3、异议理由书（盖章） <br>
          4、代理委托书 <br>
          5、申请人在先权利人或利害关系人的主题资格证明文件 <br>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ' trade-change--商标变更',
    };
  },
};
</script>
