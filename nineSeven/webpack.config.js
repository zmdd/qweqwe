var webpack = require('webpack');

var dataBase = [
	{
		'img':"img/2_r2_c2.jpg",
		'tit':"腾讯新闻",
		'cont':"大妈买鱼被“咬”住手 嚎啕大哭",
		'time':"13:59"
	},
	{
		'img':"img/2_r4_c2.jpg",
		'tit':"QQ看点",
		'cont':"这7部港产鬼片,不管看多少次都会吓出翔",
		'time':"13:59"
	},
	{
		'img':"img/2_r6_c2.jpg",
		'tit':"WEB前端 Vue.js HTTML5",
		'cont':"聊城-前端-小菜鸟:百度统计学院",
		'time':"13:59"
	},
	{
		'img':"img/2_r8_c2.jpg",
		'tit':"购物号",
		'cont':"拼多多商城:活动参与成功通知",
		'time':"12:28"
	},
	{
		'img':"img/2_r10_c2.jpg",
		'tit':"翟雨欣",
		'cont':"姬宵称呢",
		'time':"12:04"
	},
	{
		'img':"img/2_r12_c2.jpg",
		'tit':"网站1506A",
		'cont':"辅导员￥朱昭君:白醋爱 11:49:28 哈哈哈",
		'time':"11:53"
	},
	{
		'img':"img/2_r14_c2.jpg",
		'tit':"网站工程❤卫生部",
		'cont':"院办-张琳:晋南市场部 11:49:28 啦啦啦",
		'time':"11:51"
	}

]

module.exports = {

	entry:__dirname+'index.js',
	output:{
		path:__dirname+'dist',
		filename:'[name].js'
	},
	module:{
		rules:[{
			test:/\.js$/,
			loader:'babel-loader'
		}]
	},
	devServer:{
		hot:true,
		port:8860,
		host:"127.0.0.1",
		setup(app){
			app.get('/list',function(req,res){
				res.setHeader('Access-Control-Allow-Origin','*');
				res.setHeader('content-type','application/json;charset=utf-8');
				res.json(dataBase)
			})
		}
	}
}