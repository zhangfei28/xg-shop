import style from '@/common/style.js';
// #ifdef MP
function toPx(value) {
	const result = /(\d+\.?\d*)(\w+)/.exec(value);
	if ('rpx' === result[2].trim()) {
		return uni.getSystemInfoSync().screenWidth * Number(result[1]) / 750;
	} else if('px' === result[2].trim()) {
		return Number(result[1]);
	} else {
		throw new TypeError(`${value}单位格式不正确`);
	}
	
}

const systemInfo = uni.getSystemInfoSync();
const statusBarHeight = systemInfo.statusBarHeight;
const windowWidth = systemInfo.windowWidth;
const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
let navBarHeight = menuButtonInfo.height + 2*(menuButtonInfo.top - statusBarHeight);
let navBarRightOffset = windowWidth - menuButtonInfo.left;
// console.log(menuButtonInfo,statusBarHeight, systemInfo);
// #endif

const user = {
	data() {
		return {
			navBgImageConfig: 'http://img0.imgtn.bdimg.com/it/u=3297191922,2404858156&fm=26&gp=0.jpg',
			navBarConfig: {
				// #ifndef MP
				fixedHeight: `100rpx`,
				// #endif
				// #ifdef MP
				fixedHeight: `${navBarHeight}px`,
				// #endif
				left: {
					iconStyle: `margin-left: ${style.UNI_SPACING_COL_BASE};
								margin-top: ${style.UNI_SPACING_ROW_SM};
								margin-bottom: ${style.UNI_SPACING_ROW_SM};
								`,
					iconList: [
						{
							id: 'avatar',
							thumb: '',
							thumbStyle: `
										border-radius: ${style.UNI_BORDER_RADIUS_CIRCLE};
										width: ${style.UNI_ICON_SIZE_SM};
										height: ${style.UNI_ICON_SIZE_SM};
										`,
						},
					]
				},
				right: {
					fontFamily: 'xg-iconfont',
					iconStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `margin-bottom: ${style.UNI_SPACING_ROW_SM}; 
								margin-top: ${style.UNI_SPACING_ROW_SM}; 
								font-size: ${style.UNI_ICON_SIZE_SM};
								color:${style.UNI_TEXT_COLOR_WHITE};`,
					titleStyle: `color:${style.UNI_TEXT_COLOR_WHITE};`,
					iconList: [
						{
							id: 'setting',
							url: '',
							title: '设置',
						},
						{
							id: 'message',
							text: '\ue624',
							
							// #ifndef MP
							iconStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};`,
							// #endif
							// #ifdef MP
							iconStyle: `margin-right: ${navBarRightOffset + toPx(style.UNI_SPACING_COL_BASE)}px;`,
							// #endif
						}
					],
				},
				title: {
					textStyle: `color:${style.UNI_TEXT_COLOR_WHITE};`,
					iconList: [
						{
							id: 'user',
							text: '',
						}
					],
				}
					
			},
			
			orderSectionConfig: {
				fontFamily: 'xg-iconfont',
				textStyle: `font-size: ${style.UNI_ICON_SIZE_MD}`,
				titleStyle: `font-size: ${style.UNI_FONT_SIZE_SM};margin-top: ${style.UNI_SPACING_ROW_SM};`,
				subtitleStyle: `font-size: ${style.UNI_FONT_SIZE_MI};margin-top: ${style.UNI_SPACING_ROW_SM};`,
				iconList: [
					{
						id: 'uncompeletedPay',
						text: '\ue607',
						title: '待付款',
						subtitle: '',
					},
					{
						id: 'uncompeleteReceive',
						text: '\ue604',
						title: '待收货',
						subtitle: '',
					},
					{
						id: 'uncompeleteComment',
						text: '\ue66e',
						title: '待评价',
						subtitle: '送积分',
					},
					{
						id: 'afterSale',
						text: '\ue60d',
						title: '退换/售后',
						subtitle: '',
					},
					{
						id: 'order',
						text: '\ue627',
						title: '我的订单',
						subtitle: '全部订单',
						textStyle: `color: ${style.UNI_TEXT_COLOR_RED};`
					},
				]
			},
			
			serviceListConfig: {
				fontFamily: 'xg-iconfont',
				thumbStyle: `width: ${style.UNI_ICON_SIZE_BASE};
							height: ${style.UNI_ICON_SIZE_BASE};`,
				titleStyle: `font-size: ${style.UNI_FONT_SIZE_SM};margin-top: ${style.UNI_SPACING_ROW_SM};`,
				subtitleStyle: `font-size: ${style.UNI_FONT_SIZE_MI};margin-top: ${style.UNI_SPACING_ROW_SM};`,
				iconList: [
					{
						thumb: '/static/user/kehufuwu.png',
						title: '客户服务',
						subtitle: '',
					},
					{
						thumb: '/static/user/jijian.png',
						title: '寄件服务',
						subtitle: '快递/收纳存储',
					},
					{
						thumb: '/static/user/huanfu.png',
						title: '主题换肤',
						subtitle: '春天来了',
					},
					{
						thumb: '/static/user/guanjiaxuanzhong.png',
						title: '闲置管家',
						subtitle: '',
					},
					{
						thumb: '/static/user/wenyisheng.png',
						title: '问医生',
						subtitle: '',
					},
					{
						thumb: '/static/user/wodepintuan.png',
						title: '我的拼团',
						subtitle: '',
					},
					{
						thumb: '/static/user/huochepiao.png',
						title: '火车票',
						subtitle: '',
					},
					{
						thumb: '/static/user/huiyuan.png',
						title: '会员',
						subtitle: '',
					},
				]
			}
			
			
		}	
			
	},
}

export default user;