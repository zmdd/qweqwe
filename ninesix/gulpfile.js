var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	tool = require('url');

var dataBase = [
		{	
			"shopImg":"img/icon1_03.jpg",
			'shopName':"一说科技",
			"conts":[
				{
					"img":"img/logo1_03.jpg",
					"info":"一说 智能机器人S1儿童陪伴机器人 玩具 早教 故事机",
					"price":"898",
					"num":"1",
					"last":"1288"
				}
			]
		},
		{	
			"shopImg":"img/icon2_03.jpg",
			'shopName':"天猫超市",
			"conts":[
				{
					"img":"img/logo2_14.jpg",
					"info":"【天猫超市】达利园 瑞士卷蛋糕(草莓味)240g/袋(12枚)",
					"price":"14.9",
					"heavy":"0.24kg",
					"num":"1"
				},
				{
					"img":"img/logo3_19.jpg",
					"info":"【天猫超市】可比克薯我任性2+1袋装薯片122g",
					"price":"10.9",
					"heavy":"0.244kg",
					"num":"2"
				},
				{
					"img":"img/logo4_28.jpg",
					"info":"【天猫超市】可比克薯我任性2+1袋装薯片122g",
					"price":"10.9",
					"heavy":"0.244kg",
					"num":"1"
				}
			]
		}
]	

gulp.task("render",function(){
	gulp.src("gulp").pipe(webserver({
		port:"8081",
		middleware:function(req,res,next){
			var method=req.method,
				urlObj=tool.parse(req.url,true),
				pathname=urlObj.pathname;

			res.setHeader("Access-Control-Allow-Origin","*");
			if(method==="GET"){
				switch(pathname){
				case "/list":
				res.setHeader("content-type","application/json;charset=utf-8");
				res.write(JSON.stringify(dataBase))
				res.end();
				break;


				}
			}
		//	server(req,res,next)
		}
	}))	
})

gulp.task("default",["render"])