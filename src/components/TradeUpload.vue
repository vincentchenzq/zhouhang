<style>
.demo-upload-list {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-right: 4px;
}
.demo-upload-list img {
    width: 100%;
    height: 100%;
}
.demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
    display: block;
}
.demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
}
</style>

<template>
    <div class="trade-upload text-left">
        <Card>
            <p slot="title">商标上传</p>
            <Form :label-width="80">
                <FormItem label="商标类型">
                    <Select v-model="fileType" clearable filterable style="width:200px">
                        <Option
                            v-for="item in tradeTypes"
                            :value="item.value"
                            :key="item.value"
                        >{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem label="商标名称">
                    <Input v-model="tradeMarkName" style="width:200px"/>
                </FormItem>
                <FormItem label="商标注册号">
                    <Input v-model="registerNo" style="width:200px"/>
                </FormItem>
                <FormItem label="选择图片">
                    <Upload
                        ref="upload"
                        :show-upload-list="false"
                        :default-file-list="defaultList"
                        :on-success="handleSuccess"
                        :format="['jpg','jpeg','png']"
                        :max-size="2048"
                        :on-format-error="handleFormatError"
                        :on-exceeded-size="handleMaxSize"
                        :before-upload="handleBeforeUpload"
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/"
                        style="display: inline-block;width:58px;"
                    >
                        <div style="width: 58px;height:58px;line-height: 58px;">
                            <Icon type="ios-camera" size="20"></Icon>
                        </div>
                    </Upload>
                    <Divider/>
                    <div class="demo-upload-list" v-for="(item, index) in uploadList" :key="index">
                        <img :src="item.url">
                        <div class="demo-upload-list-cover">
                            <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
                            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                        </div>
                    </div>
                </FormItem>
            </Form>
            <div class="text-center">
                <Button type="primary" @click="handleSubmit">上传</Button>
            </div>
        </Card>
        <Modal title="View Image" v-model="visible">
            <img :src="imgUrl" v-if="visible" style="width: 100%">
        </Modal>
    </div>
</template>
<script>
import Utils from '../util/Utils';
import { tradeTypes } from '../util/Constant';
import { imageUpload, tradeUpload } from '../service/fileUploadApi';

export default {
    data() {
        return {
            defaultList: [],
            imgUrl: '',
            visible: false,
            fileType: '',
            tradeMarkName: '',
            registerNo: '',
            uploadList: [],
            tradeTypes: tradeTypes
        };
    },
    methods: {
        handleView(img) {
            this.imgUrl = img.url;
            this.visible = true;
        },
        handleRemove(file) {
            this.uploadList.splice(this.uploadList.indexOf(file), 1);
        },
        handleSuccess(res, file) {
            file.url =
                'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError(file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc:
                    'File format of ' +
                    file.name +
                    ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize(file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        handleBeforeUpload(file) {
            this.uploadList.push(Utils.getBase64Url(file));
            return false;
        },
        handleSubmit() {
            if (!this.fileType) {
                this.$Message.error('请选择文件类型！');
                return;
            }
            if (!this.tradeMarkName) {
                this.$Message.error('请输入商标名称！');
                return;
            }
            if (!this.registerNo) {
                this.$Message.error('请输入商标注册号！');
                return;
            }
            if (this.uploadList === 0) {
                this.$Message.error('请选择文件！');
                return;
            }

            let params = new FormData();
            this.uploadList.forEach(({ file }) => {
                params.append('file', file);
            });
            // params.append('file', this.uploadList[0].file);
            imageUpload(params).then(data => {
                this.uploadList = [];
                tradeUpload({
                    category: this.fileType,
                    categoryName: this.tradeTypes.find(
                        item => this.fileType === item.value
                    ).label,
                    imageUrl: data,
                    registerNo: this.registerNo,
                    tradeMarkName: this.tradeMarkName
                }).then(data => {
                    this.$Message.success(`${data.imageUrl},上传成功！`);
                });
            });
        }
    },
    mounted() {
        this.uploadList = this.$refs.upload.fileList;
    }
};
</script>
