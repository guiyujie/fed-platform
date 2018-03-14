/**
*  通用
*/
export const COMMON = {
	API_MENU_LIST: "/api/menu/authMenuList"
	,OPTSTATUS   : ""
}

/**
*  网吧
*/
export const NETBAR = {
	API_LIST            : "/api/sys/netbars" 							//获取网吧列表（系统管理员）
	,API_LIST_BY_ORDERID: "/api/card/authDetail/netbarlist/{orderid}"	//通过订单ID获取网吧列表
	,API_INFO_BY_GID    : "/api/card/validGid/{gid}"					//通过gid获取网吧信息

	,CLEAR_RESULT       : ""
	,CLEAR_INFO         : ""
}


/**
 * 商户
 */
export const MERCHANT = {
	API_LIST        : "/api/sys/merchants"													//获取商户列表
	,API_SEARCH_LIST: "/api/sys/merchants"													//搜索商户列表
	,API_UPDATE     : "/api/sys/setAgentRole/{merchantId}/{agentOpened}/{serviceOpened}" 	//商户资质设置

	,TOGGLE_EDIT    : ""  																	//显示/隐藏编辑弹窗
	,CLEAR_RESULT   : ""																	//清空搜索结果
}

/**
 * 授权卡
 */

export const PRODUCT = {	
	API_SYS_LIST          : "/api/sys/productList" 					    //获取授权卡列表（系统管理员）	
	,API_SYS_AUTH_DETAIL  : "/api/sys/details4Product/{productId}"	    //通过商品ID获取商品授权明细（系统管理员）
	,API_SET_AUTH_TYPE    : "/api/sys/setProductType/{productId}/{type}"//设置商品类型(系统管理员)

	,API_LIST             : "/api/card/list/{pageno}"				    //获取授权卡列表
	,API_AUTH_DETAIL      : "/api/card/authDetail/{orderid}/{pageno}"   //通过订单ID获取商品授权明细
	,API_BUY              : "https://jiesuan.stnts.com/wallet/home.do"	//资金结算平台购买页面地址
	,API_GENERATE_AUTHKEY : "/api/card/generateAuthKey/{order_id}"	    //生成授权密钥
	,API_AUTH_NETBAR      : "/api/card/authNetbar/{orderId}/{gid}" 	    //授权网吧
	
	,TOGGLE_AUTH_SETUP    : ""											//显示/隐藏设置弹窗
	,TOGGLE_AUTH_DETAIL   : ""  										//显示/隐藏详情弹窗
	,TOGGLE_AUTH_FORM     : ""  										//显示/隐藏授权弹窗
}



/**
 * 代理商
 */
export const AGENT = {
	API_SYS_LIST        : "/api/sys/agentAuths"							//获取代理商网吧列表（系统管理员）	
	,API_SYS_AUTH_DETAIL: "/api/sys/authAgentDetails/{gid}"				//通过gid获取网吧授权明细（系统管理员）
	,API_SYS_DOWNLOAD   : "/api/sys/agentDownload"						//下载excel（系统管理员）		
	,API_SEARCH_LIST    : "/api/sys/agents"								//搜索代理商列表
	
	,API_LIST           : "/api/card/authInfo/agent/{pageno}"			//获取代理商网吧列表
	,API_DOWNLOAD       : "/api/card/agentDownload" 					//下载excel
	,API_AUTH_DETAIL    : "/api/card/authDetail/agent/{gid}/{pageno}" 	//通过gid获取网吧授权明细
	
	,TOGGLE_AUTH_DETAIL : ""  											//显示/隐藏详情弹窗
}

/**
 * 增值服务
 */
export const SERVICE = {
	
	API_SYS_LIST        : "/api/sys/serviceAuths"							//获取增值服务网吧列表（系统管理员）
	,API_SYS_DETAIL     : "/api/sys/netDetail/{gid}"						//获取网吧详情（系统管理员）
	,API_SYS_AUTH_DETAIL: "/api/sys/authAgentDetails/{gid}"					//通过gid获取网吧授权明细（系统管理员）
	,API_SYS_DOWNLOAD   : "/api/sys/serviceDownload"						//下载excel（系统管理员）		
	,API_SYS_MARKETING  : "/api/sys/serviceMarketing"						//获取运营数据（系统管理员）
	,API_SYS_NETBAR_NOTE: "/api/sys/addNetMarks"						    //设置网吧备注（系统管理员）
	,API_SEARCH_LIST    : "/api/sys/services"								//搜索增值服务列表
	
	,API_LIST           : "/api/card/authInfo/service/{pageno}"				//获取增值服务网吧列表
	,API_DETAIL         : "/api/card/authInfo/service/authorizedNetbar/{gid}"//获取网吧详情
	,API_AUTH_DETAIL    : "/api/card/authDetail/service/{gid}/{pageno}" 	//通过gid获取网吧授权明细
	,API_DOWNLOAD       : "/api/card/serviceDownload" 						//下载excel
	,API_MARKETING      : "/api/card/serviceMarketing"						//获取运营数据
	,API_NETBAR_NOTE    : "/api/card/addNetMarks"						    //设置网吧备注
	
	,TOGGLE_DETAIL      : ""  												//显示/隐藏详情弹窗
	,TOGGLE_AUTH_DETAIL : ""												//显示/隐藏授权明细弹窗
	,TOGGLE_MARKETING   : ""                                                //显示/隐藏运营数据
}