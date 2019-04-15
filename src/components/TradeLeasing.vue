<style lang="less">
.trade-leasing {
    @active-color: #da251d;
    .trade-mark-container {
        padding: 40px 40px 0 40px;
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
        .trade-mark {
            border: 1px solid #f0f0f0;
            margin-bottom: 30px;
            box-sizing: border-box;
            width: 250px;
            margin-right: 30px;
        }
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
    <div class="trade-leasing text-left">
        <Row class="mt10">
            <Col span="2" class="text-right lh32 mr25">商标名称:</Col>
            <Col span="6">
                <Input v-model="queryCondition.tradeMarkName" @on-change="getImageData"></Input>
            </Col>
        </Row>
        <Row class="mt10">
            <Col span="2" class="text-right lh32 mr25">注册号:</Col>
            <Col span="6">
                <Input v-model="queryCondition.registerNo" @on-change="getImageData"></Input>
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

        <ul class="trade-mark-container clearfix">
            <li class="trade-mark fl oh" v-for="(item, index) in imageUrl" :key="index">
                <div style="width:250px;height:140px;">
                    <img
                        :src="item.imageUrl"
                        alt="图片加载失败"
                        width="250"
                        onerror="this.src='/static/default.jpg'"
                    >
                </div>
                <div class="mt10">商标名称：{{ item.tradeMarkName }}</div>
                <div class="mt10">注册号：{{ item.registerNo }}</div>
                <div class="mt10">商标类型：{{ item.categoryName }}</div>
            </li>
        </ul>

        <div class="clearfix">
            <div class="text-center" style="margin-top:50px;" v-show="!total">暂无数据</div>
            <Page
                v-show="total"
                class="text-right mr25"
                :total="total"
                :page-size="queryCondition.size"
                @on-change="changePageSize"
            />
        </div>
    </div>
</template>
<script>
import Utils from '../util/Utils';
import { tradeTypes } from '../util/Constant';
import { getImage } from '../service/tradeLeasingApi';
import throttle from 'lodash.throttle';
import { debug } from 'util';

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
            total: 0,
            queryCondition: {
                category: '',
                tradeMarkName: '',
                registerNo: '',
                page: 1,
                size: 40
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
                this.queryCondition.category = '';
            } else {
                this.activeTradeType = index;
                this.queryCondition.category = this.tradeTypes[index].value;
            }
            this.getImageData();
        },
        getImageData() {
            getImage(this.queryCondition).then(data => {
                this.total = data.total;
                this.imageUrl = data.data;
                this.imageUrl.forEach(item => {
                    item.categoryName = this.tradeTypes.find(
                        it => item.category === it.value
                    ).label;
                    item.imageUrl = `/backend/static/image${item.imageUrl}`;
                });
            });
        },
        changePageSize(page) {
            this.queryCondition.page = page;
            this.getImageData();
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
