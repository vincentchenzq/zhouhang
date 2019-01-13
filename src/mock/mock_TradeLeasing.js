/* eslint-disable no-param-reassign */
const getImages = [
    {
        name: '化工原料',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '油漆涂料',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '化妆清洁',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '工业油脂',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '药品制剂',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '五金器具',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '机械机器',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '手工用具',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '电子电器',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '医疗器械',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '家用电器',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '车船配件',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '火器烟花',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '珠宝饰品',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '乐器乐辅',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '文具办公',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '橡胶制品',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '皮具制品',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '建筑材料',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '家具工艺',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '厨具日用',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '缆绳帐篷',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '线纱丝纺',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '家用纺品',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '服装鞋帽',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '缝纫用品',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '地毯席垫',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '运动器械',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '食品鱼肉',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '食品作料',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '生鲜农产',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '啤酒饮料',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '酒精饮料',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '烟草制品',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '广告商业',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '金融经济',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '修理安装',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '通讯服务',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '运输旅行',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '加工服务',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '教育娱乐',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '科技研究',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '餐饮住宿',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '医疗美容',
        url: '/static/sansongguo.jpg',
    },
    {
        name: '法律安全',
        url: '/static/sansongguo.jpg',
    },
];
getImages.forEach((item, index) => {
    const prefix = index < 9 ? `0${index + 1}类 ` : `${index + 1}类 `;
    item.name = prefix + item.name;
});

export default {
    getImages,
};
