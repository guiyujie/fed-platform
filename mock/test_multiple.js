//一个js文件对应多个mock
//接口地址不会根据文件名解析，需要手动指定
module.exports = {
	//支持自定义回调
	'/test/callback': (req, res) => {
		res.json({
			status:"success",
			info:"测试js文件中自定义回调",
			data:null
		})
	},
	//支持直接返回Object
	'/test/object': {
		status:"success",
		info:"测试js文件中直接返回Object",
		data:null
	},
	//支持proxy
	'/api/games.do': 'https://testbilling.stnts.com/api/games.do'
}