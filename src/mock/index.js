import TradeLeasingData from './mock_TradeLeasing';

// 引入mockjs
const Mock = require('mockjs');
// 使用mockjs模拟数据
Mock.mock('/api/img', () => TradeLeasingData.getImages);
