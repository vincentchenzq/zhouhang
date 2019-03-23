<style lang="less">
.trade-leasing {
    @active-color: #da251d;
    .trade-mark {
        border: 1px solid #f0f0f0;
        margin-right: 29px;
        margin-bottom: 20px;
        box-sizing: border-box;
        width: 200px;
    }
    .tradeItem {
        white-space: nowrap;
        height: 32px;
        padding: 0 9px;
        margin: 0 0 7px 7px;
        color: #323232;
        border-radius: 3px;
        font-size: 13px;
        width: 130px;
        cursor: pointer;
        &.active,
        &:hover {
            background-color: @active-color;
        }
    }

    .lh32 {
        line-height: 32px;
    }
}
</style>
<template>
    <div class="trade-leasing text-left" style="padding-left: 20px;">
        <Row class="mt10">
            <Col span="2" class="text-right lh32 mr25">商标名称:</Col>
            <Col span="6">
                <Input v-model="queryCondition.name"></Input>
            </Col>
        </Row>
        <Row class="mt10">
            <Col span="2" class="text-right lh32 mr25">注册号:</Col>
            <Col span="6">
                <Input v-model="queryCondition.no"></Input>
            </Col>
        </Row>
        <Row class="mt10">
            <Col span="2" class="text-right lh32 mr25">商标类型:</Col>
            <Col span="20" class="clearfix">
                <div
                    class="fl tradeItem text-center lh32"
                    :class="{'active':activeTradeType ===''}"
                    @click="selectTradeType('')"
                >不限</div>
                <div
                    class="fl tradeItem lh32"
                    v-for="(item, index) in tradeTypes"
                    :value="item.value"
                    :key="item.value"
                    @click="selectTradeType(index)"
                    :class="{'active':activeTradeType ===index}"
                >{{ `第${index +1} 类` + item.label }}</div>
            </Col>
        </Row>

        <Scroll :on-reach-bottom="getImageData" :distance-to-edge="[-30,-30]" :height="height">
            <ul class="clearfix">
                <li class="fl trade-mark" v-for="(item, index) in imageUrl" :key="index">
                    <img :src="item.url" alt width="176">
                    <div>
                        <input :value="item.name">
                    </div>
                </li>
            </ul>
        </Scroll>
    </div>
</template>
<script>
import Utils from '../util/Utils';
import { tradeTypes } from '../util/Constant';

export default {
    data() {
        return {
            text: '',
            type: '01',
            fileType: [],
            height: 0,
            msg: 'trade-leasing--商标转让',
            imageUrl: [],
            imageData: {},
            queryCondition: {
                type: '',
                name: '',
                no: ''
            },
            typeList: [
                {
                    label: '商标名称',
                    value: '01'
                },
                {
                    label: '注册号',
                    value: '02'
                }
            ],
            tradeTypes,
            activeTradeType: ''
        };
    },
    methods: {
        selectTradeType(index) {
            if (this.activeTradeType === index) {
                this.activeTradeType = '';
            } else {
                this.activeTradeType = index;
            }
        },
        getImageData() {
            return new Promise(resolve => {
                this.imageUrl = this.imageUrl.concat([]);
            });
        },
        handleReachBottom() {
            return this.getImageData();
        }
    },
    mounted() {
        const style = getComputedStyle(
            document.querySelector('.ivu-layout-content')
        );
        this.height = parseInt(style.height);
        this.getImageData();
    }
};
</script>
