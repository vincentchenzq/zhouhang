<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
    width:1200px;
    margin:0 auto;
    .layout{
      display: flex;
      box-sizing: border-box;
      border: 1px solid #ddd;
    }
    .ivu-layout-header{
      height: 40px;
      line-height: 40px;
      color:#fff;
    }
  }
</style>
<template>
  <div id="app">
    <Header>
      <Row>
        <Col span="1" :offset="23">
          <Tooltip content="联系客服" :offset="10" placement="bottom-end" >
            <Icon type="ios-help-circle" size="26" @click="value4=!value4" />
          </Tooltip>
        </Col>
      </Row>
    </Header>
    <div class="layout">
      <Menu active-name="1-2"
            theme="light"
            width="200px"
            @on-select="selectMenu"
            :open-names="['1']">
        <!--<Submenu name="1" >-->
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          网站导航
        </template>
        <MenuItem v-for="item in menuList"
                  :name="item.value"
                  :to="item.value"
                  :key="item.value">{{ item.label }}</MenuItem>
        <!--</Submenu>-->
      </Menu>
      <Content :style="{padding: '24px', minHeight: '90vh', background: '#fff',width:'1000px'}">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </Content>

    </div>
    <Drawer :closable="false" width="640" v-model="value4">
      <p :style="pStyle">联系客服</p>
      <p :style="pStyle">QQ号：2490472525</p>
      <Divider />
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            Full Name: vincent
          </Col>
          <Col span="12">
            Account: aresn@aresn.com
          </Col>
        </Row>
        <Row>
          <Col span="12">
            City: BeiJing
          </Col>
          <Col span="12">
            Country: China
          </Col>
        </Row>
        <Row>
          <Col span="12">
            Birthday: May 14, 1991
          </Col>
          <Col span="12">
            Website: <a href="https://dev.iviewui.com" target="_blank">https://dev.iviewui.com</a>
          </Col>
        </Row>
        Message: Hello, Developer
      </div>
    </Drawer>
  </div>
</template>

<script>
import { MENU_LIST } from './util/Constant';

export default {
  name: 'App',
  data() {
    return {
      value4: false,
      menuList: MENU_LIST,
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px',
      },
    };
  },
  methods: {
    selectMenu(url) {
      this.$router.push({
        path: url,
      });
    },
  },
};
</script>
