<style lang="less">
#app {
    font-family: 'PingFang sc', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
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
        padding-top: 50px;
        width: 1200px;
        margin: 0 auto;
    }
    .menu {
        display: flex;
        background: #1c2327;
        position: fixed;
        width: 100%;
        z-index: 10;
        /*justify-content: space-between;*/
        & li {
            padding: 0 16px;
            line-height: 50px;
            &:hover {
                color: #00c1de;
            }
        }

        .active-menu {
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
                <span
                    style="line-height:50px;font-size: 20px;padding-left: 20px;"
                    @click="baseToIndex"
                >舟航网络</span>
            </div>
            <ul class="dif pointer f14">
                <li
                    v-for="(item, index) in menuList"
                    :key="index"
                    :class="{'active-menu':activeIndex === index}"
                    class="f14 mr25"
                    @click="selectMenu(item, index)"
                >{{ item.label }}</li>
                <li @click="value4=!value4">联系我们</li>
            </ul>
        </div>
        <div class="layout">
            <Content :style="{ background: '#fff'}">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </Content>
        </div>
        <Drawer :closable="false" width="300" v-model="value4">
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="6">
                        <img width="50" src="./assets/images/qq.png" alt>
                    </Col>
                    <Col style="line-height: 50px;" span="12">2490472525</Col>
                </Row>
                <Row style="margin-top: 10px;">
                    <Col span="6">
                        <img width="50" src="./assets/images/telephone.png" alt>
                    </Col>
                    <Col style="line-height: 50px;" span="12">15057142127</Col>
                </Row>
                <Row style="margin-top: 10px;">
                    <Col span="6">
                        <img width="50" src="./assets/images/wechat.png" alt>
                    </Col>
                    <Col style="line-height: 50px;" span="12">15057142127</Col>
                </Row>
                <Row style="margin-top: 10px;">
                    <Col span="6">
                        <img width="50" src="./assets/images/email.jpg" alt>
                    </Col>
                    <Col style="line-height: 50px;" span="12">
                        <a href="mailto:2490472525@qq.com">2490472525@qq.com</a>
                    </Col>
                </Row>
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
            activeIndex: -1,
            pStyle: {
                fontSize: '16px',
                color: 'rgba(0,0,0,0.85)',
                lineHeight: '24px',
                display: 'block',
                marginBottom: '16px'
            }
        };
    },
    computed: {
        menuList() {
            return MENU_LIST.filter(item => {
                if (!this.$store.state.user.token) {
                    return item.value !== MENU.tradeUpload;
                }
                return true;
            });
        }
    },
    methods: {
        baseToIndex() {
            this.$router.push({
                path: MENU.index
            });
        },
        selectMenu(item, index) {
            this.activeIndex = index;
            if (item.value) {
                this.$router.push({
                    path: item.value
                });
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.activeIndex = MENU_LIST.findIndex(
                item => item.value === this.$route.path
            );
        }, 200);
    }
};
</script>
