/**
 1、启动server,模块热替换
 2、JS模块化开发
 3、编译SASS，less，CSS抽离
 4、Mock数据
 5、版本控制
 6、devtool
 7、合并压缩
 8、环境切换
*/

//引入文本抽离插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//html生成插件
var HtmlPlugin = require("html-webpack-plugin");
//引入webpcak
var webpack = require("webpack");
//引入openBrowser插件
var openBrowser = require("open-browser-webpack-plugin");

var public={
	//入口
	entry:{
		'scripts/index':'./src/scripts/index.js',  //属性名为chunk name 可以带路径
	},
	//devtool
	devtool:'source-map',
	//别名配置
	resolve:{
		alias:{
			'vue$':'vue/dist/vue.js',
			'vue-router$': 'vue-router/dist/vue-router.js'
		}
	},
}
var dev={
	//出口
	output:{
		filename:'[name].js',         //[name]为chunk name
		path:__dirname+'/dev'   //必须是绝对路径
	},
	//配置webserver
	devServer:{
		host:'localhost',
		port:9000,
		contentBase:__dirname+'/dev',
		noInfo:true
	},
	//模块
	module:{
		rules:[
			//解析es6+
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:[
					{loader:'babel-loader'}
				]
			},
			//加载Vue单文件组件
			{
				test:/\.vue$/,
				exclude:/node_modules/,
				use:[
					{loader:'vue-loader'}
				]
			},
			//加载sass
			{
				test:/\.scss$/,
				use:/*[            //反向执行，sass-css-style
					{loader:'style-loader'},
					{oader:'css-loader'},
					{loader:'sass-loader'}
				],*/
				//css抽离
				ExtractTextPlugin.extract({
            		fallback: 'style-loader',
           			use: ['css-loader', 'sass-loader']
          		})
			},
			//加载css
			{
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'}
				]
			},
			// 加载图片
		    {
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 1000,
		          name: 'media/images/[name].[ext]'
		        }
		    },
		
		    // 加载媒体文件
		    {
		        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 1000,
		          name: 'media/mp4/[name].[ext]'
		        }
		    },
		
		    // 加载iconfont
		    {
		        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10,
		          name: 'media/iconfont/[name].[ext]'
		        }
		    }
		]
	},
	//插件
	plugins:[
		//抽离css
		new ExtractTextPlugin({
			filename:(getPath)=>{
				return getPath('[name].css').replace('scripts','styles')
			},
			allChunks:true
		}),
		//编译html
		new HtmlPlugin({
			template:'./src/index.html',
			filename:'index.html',
			chunks:['scripts/index']
		}),
		//自动打开浏览器
		/*new openBrowser({
			url:'http://localhost:9000'
		})*/
	],
	externals:{
		'vue':'window.Vue',
		'vue-router':'window.VueRouter',
		'axios':'window.axios'
	}
}
var prd={
	//出口
	output:{
		filename:'[name]-[chunkhash:6].js',         //[name]为chunk name
		path:__dirname+'/prd'   //必须是绝对路径 
	},
	//模块
	module:{
		rules:[
			//解析es6+
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:[
					{loader:'babel-loader'}
				]
			},
			//加载Vue单文件组件
			{
				test:/\.vue$/,
				exclude:/node_modules/,
				use:[
					{loader:'vue-loader'}
				]
			},
			//加载sass
			{
				test:/\.scss$/,
				use:/*[            //反向执行，sass-css-style
					{loader:'style-loader'},
					{oader:'css-loader'},
					{loader:'sass-loader'}
				],*/
				//css抽离
				ExtractTextPlugin.extract({
            		fallback: 'style-loader',
           			use: ['css-loader', 'sass-loader']
          		})
			},
			//加载css
			{
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'}
				]
			},
			// 加载图片
		    {
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000,
		          name: 'media/images/[name].[hash:7].[ext]'
		        }
		    },
		
		    // 加载媒体文件
		    {
		        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000,
		          name: 'media/mp4/[name].[hash:7].[ext]'
		        }
		    },
		
		    // 加载iconfont
		    {
		        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000,
		          name: 'media/iconfont/[name].[hash:7].[ext]'
		        }
		    }
		]
	},
	//插件
	plugins:[
		//抽离css
		new ExtractTextPlugin({
			filename:(getPath)=>{
				return getPath('[name]-[chunkhash:6].css').replace('scripts','styles')
			},
			allChunks:true
		}),
		//编译html
		new HtmlPlugin({
			template:'./src/index.html',
			filename:'index.html',
			chunks:['scripts/index']
		}),
		//代码压缩
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			},
			output:{
				comments:false
			}
		})
	],
	externals:{
		'vue':'window.Vue',
		'vue-router':'window.VueRouter'
	}
}
if(process.env.NODE_ENV == 'dev'){
	module.exports = Object.assign({}, public, dev)
}else{
	module.exports = Object.assign({}, public, prd)
}