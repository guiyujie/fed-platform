/**
 * 一个js文件对应一个mock
 * - 接口地址会根据文件名解析
 * @param  {object} req express request对象（http://www.expressjs.com.cn/4x/api.html#req）
 * @param  {object} res express response对象（http://www.expressjs.com.cn/4x/api.html#res）
 * @return {*}     
 */
module.exports = (req, res) => {
	//获取请求参数
	const query = req.query
	//res.json()方法返回json格式数据
	res.json({
	    "status": "success",
	    "info": "mock",
	    "data": {
	    	"list": [{
		    	"id": "1",
		        "name": "zhangshu",
		        "qq": "309597729"
		    }],
		    "total":100,
		    "pageSize":query.pageSize || 20,
		    "page":query.page || 1
	    }
	})
}