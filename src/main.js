/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2020-08-25 18:03:14
 * @LastEditors: liuhaoran
 * @LastEditTime: 2020-08-28 15:19:25
 */
import Vue from 'vue';
import App from './App.vue';
import router from './route/router';
import echarts from 'echarts';
import china from './assets/json/china.json';
import world from './assets/json/world.json';

import Antd from 'ant-design-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';
import Mock from 'mockjs';
import _ from 'loadsh';
import * as filters from './api/filter.js';
import 'ant-design-vue/dist/antd.css';
import './assets/styles/common/index.less';
import 'moment/locale/zh-cn';
import 'echarts/map/js/world.js'; // 引入世界地图
import store from '@/store/index';
import 'echarts-gl';
// import WorldData from 'world-map-geojson';
// import WorldData from 'echarts/map/json/world.json';
import WorldData from './assets/json/worldGeoJson.json';
import coordinate from './assets/json/coordinate.json';

WorldData.features.forEach((i, idx) => {
	i.properties.name = world.namemap[i.properties.name];
});

world.dataArr.forEach((d) => {
	let nameEn = Object.keys(world.namemap).find((i) => {
		return world.namemap[i] === d.name;
  });
	d.cordinate = coordinate[nameEn];
});

moment.locale('zh-cn');

echarts.registerMap('china', china);
echarts.registerMap('world', WorldData);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$moment = moment;
Vue.prototype.$mock = Mock;
Vue.prototype._ = _;
Vue.use(VueAxios, axios);
Vue.use(Antd);


router.beforeEach((to, from, next) => {
	if (!store.state.UserToken) {
		next();
	} else {
	}
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
