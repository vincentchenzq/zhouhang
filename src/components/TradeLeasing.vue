<style lang="less">
  .trade-leasing{
    .trade-mark{
      border: 1px solid #f0f0f0;
      margin-right: 29px;
      margin-bottom: 20px;
      box-sizing: border-box;
      width: 200px;
    }
  }
</style>
<template>
  <div class="trade-leasing text-left">
    <!--<Collapse accordion>-->
      <!--<Panel>-->
        <!--商标上传-->
        <!--<div slot="content">-->
          <!--<div class="text-left">-->
            <!--<Form>-->
              <!--<FormItem label="图片类型">-->
                <!--<Select v-model="uploadCondition.type"
                 clearable filterable style="width:200px">-->
                  <!--<Option v-for="item in tradeTypes"-->
                          <!--:value="item.value"-->
                          <!--:key="item.value">{{ item.label }}</Option>-->
                <!--</Select>-->
              <!--</FormItem>-->
              <!--<FormItem label="请选择图片">-->
                <!--<Upload-->
                  <!--ref="upload"-->
                  <!--:show-upload-list="false"-->
                  <!--:on-success="handleSuccess"-->
                  <!--:format="['jpg','jpeg','png']"-->
                  <!--:max-size="2048"-->
                  <!--:on-format-error="handleFormatError"-->
                  <!--:on-exceeded-size="handleMaxSize"-->
                  <!--:before-upload="handleBeforeUpload"-->
                  <!--type="drag"-->
                  <!--action="//jsonplaceholder.typicode.com/posts/"-->
                  <!--style="display: inline-block;width:58px;">-->
                  <!--<div style="width: 58px;height:58px;line-height: 58px;">-->
                    <!--<Icon type="ios-camera" size="20"></Icon>-->
                  <!--</div>-->
                <!--</Upload>-->
                <!--<Divider />-->
                <!--<img :src="imageData.url" alt="" width="170">-->
              <!--</FormItem>-->
            <!--</Form>-->
          <!--</div>-->
        <!--</div>-->
      <!--</Panel>-->
      <!--<Panel>-->
        <!--商标查询-->
        <!--<div slot="content">-->
        <!--</div>-->
      <!--</Panel>-->
    <!--</Collapse>-->
    <Scroll :on-reach-bottom="getImageData" :distance-to-edge="[-30,-30]" :height="height">
      <ul class="clearfix">
        <li class="fl trade-mark" v-for="(item, index) in imageUrl" :key="index">
          <img :src="item.url" alt="" width="176">
          <div>
            <input :value="item.name"/>
          </div>
        </li>
      </ul>
    </Scroll>
  </div>
</template>
<script>
/* eslint-disable no-param-reassign,radix */

import { getImage } from '../service/tradeLeasingApi';
import { tradeTypes } from '../util/Constant';
import Utils from '../util/Utils';

export default {
  data() {
    return {
      height: 0,
      msg: 'trade-leasing--商标转让',
      imageUrl: [],
      tradeTypes,
      imageData: {},
      uploadCondition: {
        type: '',
      },
    };
  },
  methods: {
    handleSuccess(res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
      file.name = '7eb99afb9d5f317c912f08b5212fd69a';
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: `File format of ${file.name} is incorrect, please select jpg or png.`,
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: `File  ${file.name} is too large, no more than 2M.`,
      });
    },
    handleBeforeUpload(file) {
      this.imageData = Utils.getBase64Url(file);
      return false;
    },
    getImageData() {
      return new Promise((resolve) => {
        getImage().then((response) => {
          this.imageUrl = this.imageUrl.concat(response);
          resolve();
        });
      });
    },
    handleReachBottom() {
      return this.getImageData();
    },
  },
  mounted() {
    const style = getComputedStyle(document.querySelector('.ivu-layout-content'));
    this.height = parseInt(style.height);
    this.getImageData();
  },
};
</script>
