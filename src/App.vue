<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100vh;
        /*width:1200px;*/
        margin: 0 auto;
        .layout {
            display: flex;
            box-sizing: border-box;
        }
        .menu{
            display:flex;
            background: #1c2327;
            /*justify-content: space-between;*/
            & li{
                padding: 0 16px;
                line-height:50px;
                &:hover{
                    color: #00c1de;
                }
            }

            .active-menu{
                color: #00c1de;
            }
        }
    }
</style>
<template>
    <div id="app">
        <div class="menu f_c_fff">
            <div class="mr100">
                <!--<img src="/static/logo2.jpg" width="50" height="50" style="vertical-align: middle;">-->
                <span style="line-height:50px;font-size: 20px;padding-left: 20px;">舟航科技</span>
            </div>
            <ul class=" dif pointer f14 ">
                <li v-for="(item, index) in menuList" :class="{'active-menu':activeIndex === index}" class="f14 mr25" @click="selectMenu(item, index)">
                    {{ item.label }}
                </li>
                <li @click="value4=!value4">联系客服</li>
            </ul>
        </div>
        <div class="layout" :style="{minHeight: 'calc(90vh - 60px)'}">
            <Content :style="{ background: '#fff',}">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </Content>

        </div>
        <Drawer :closable="false" width="640" v-model="value4">
            <p :style="pStyle">联系客服</p>
            <p :style="pStyle">QQ号：2490472525</p>
            <Divider/>
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
    import { MENU_LIST, MENU } from './util/Constant';

    export default {
        name: 'App',
        data() {
            return {
                value4: false,
                menuList: MENU_LIST,
                activeIndex: -1,
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
            selectMenu(item, index) {
                this.activeIndex = index;
                if(item.value){
                    this.$router.push({
                        path: item.value,
                    });
                }
            },
        },
        mounted() {
            setTimeout( () => {
                this.activeIndex = MENU_LIST.findIndex( item => item.value === this.$route.path);
            },200)
        }
    };
</script>
