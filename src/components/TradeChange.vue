<style>
/* .trade-change{

    } */
.lh1 {
    line-height: 1.5;
}
</style>
<template>
    <div class="trade-change text-left">
        <Collapse accordion v-model="value1">
            <Panel name="0">
                什么样的企业商标需要变更?
                <div slot="content" class>
                    <p class="ti20 lh1">1、注册商标需要办理变更注册人的名义、地址或者其他注册事项的，应当提出变更申请。</p>
                    <p class="ti20 lh1">2、申请人已经提交注册申请但尚未获准注册的，其名义、地址或者其他注册事项发生变更的，可以向商标局申请办理相应的变更手续。</p>
                    <p class="ti20 lh1">3、企业合并、兼并或改制等发生商标专用权移转的，应当办理移转手续。</p>
                </div>
            </Panel>
            <Panel name="1">
                为什么需要变更商标？
                <div slot="content" class="ti20">变更商标是为了保护权利人权益，如果发现营业执照地址和商标注册证地址不符会被撤销商标拥有资格。</div>
            </Panel>
            <Panel name="2">
                商标变更材料？
                <div slot="content" class>
                    <div class="mt10">1、申请变更商标申请人注册人名义：</div>
                    <div class="ml25 mt10">
                        <div class="lh1">① 商标代理委托书</div>
                        <div class="lh1">② 营业执照（新）</div>
                        <div class="lh1">③ 工商局出具的变更证明文件</div>
                    </div>
                    <div class="mt10">2、申请变更商标申请人地址材料：</div>
                    <div class="ml25 mt10">
                        <div class="lh1">① 商标代理委托书</div>
                        <div class="lh1">② 营业执照（新）</div>
                    </div>
                    <div class="mt10">3、变更集体商标、证明商标管理规则、集体成员名单</div>
                    <div class="ml25 mt10">
                        <div class="lh1">① 商标代理委托书</div>
                        <div class="lh1">② 营业执照（新）</div>
                        <div class="lh1">③ 变更后的集体商标集体成员名单</div>
                    </div>
                </div>
            </Panel>
            <Panel name="3">
                什么是商标撤三？
                <div slot="content" class="mt10">
                    <div class="ti20">
                        商标撤三是指，他人注册商标没有正当理由连续三年不适用的，个人或者企业向商标局申请撤销该商标的行为。
                        他人侵占商标资源却不使用，我们可以向其提出撤三申请。
                    </div>
                </div>
            </Panel>
            <Panel name="4">
                撤三材料？
                <div slot="content" class>
                    <div class="lh1">1、申请书</div>
                    <div class="lh1">2、营业执照副本（盖章）</div>
                    <div class="lh1">3、商标代理委托书</div>
                </div>
            </Panel>
            <Panel name="5">
                商标异议？
                <div slot="content" class>
                    <div class="lh1">1、商标异议申请书</div>
                    <div class="lh1">2、营业执照</div>
                    <div class="lh1">3、异议理由书（盖章）</div>
                    <div class="lh1">4、代理委托书</div>
                    <div class="lh1">5、申请人在先权利人或利害关系人的主题资格证明文件</div>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1: '0',
            msg: ' trade-change--商标变更'
        };
    }
};
</script>
