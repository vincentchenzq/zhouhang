<style lang="less">
.trade-leasing {
    .trade-mark {
        border: 1px solid #f0f0f0;
        margin-right: 29px;
        margin-bottom: 20px;
        box-sizing: border-box;
        width: 200px;
    }
}
</style>
<template>
  <div class="trade-leasing text-left" style="padding-left: 20px;">
    <Input v-model="text">
      <Select v-model="type" slot="prepend" style="width: 80px;">
        <Option v-for="(item, index) in typeList" :key="index" :value="item.value">{{ item.label }}</Option>
      </Select>
      <Button slot="append" icon="ios-search"></Button>
    </Input>

    <Select
      v-model="fileType"
      multiple
      clearable
      filterable
      style="margin-top:20px;margin-bottom: 20px;"
      placeholder="请选择类型"
    >
      <Option v-for="item in tradeTypes" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>

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
/* eslint-disable no-param-reassign,radix */

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
            uploadCondition: {
                type: ''
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
            tradeTypes
        };
    },
    methods: {
        handleSuccess(res, file) {
            file.url =
                'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError(file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: `File format of ${
                    file.name
                } is incorrect, please select jpg or png.`
            });
        },
        handleMaxSize(file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: `File  ${file.name} is too large, no more than 2M.`
            });
        },
        handleBeforeUpload(file) {
            this.imageData = Utils.getBase64Url(file);
            return false;
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
