import Action from 'utils/action'

const {types, api} = new Action('PRODUCT')

//查询列表信息
export const fetchList = (params = {}) => {
    const url = api.get('LIST')
        .replace(/\{pageno\}/, params.pageno || 1)
    return {
        type: types.get('LIST'),
        payload: {
            request: {
                url
            }
        }
    }
}


//查询列表信息（系统管理员）
export const fetchSysList = (params = {}) => {
    return {
        type: types.get('SYS_LIST'),
        payload: {
            request: {
                url: api.get('SYS_LIST'),
                params
            }
        }
    }
}

//查询授权明细
export const fetchAuthDetail = (params = {}) => {
    const {pageno, netbarName, productOrder} = params
    const url = api.get('AUTH_DETAIL')
        .replace(/\{pageno\}/, pageno || 1)
        .replace(/\{orderid\}/, productOrder.id)
    return {
        type: types.get('AUTH_DETAIL'),
        payload: {
            request: {
                url,
                params: {netbarName}
            }
        },
        //插入商品订单信息
        productOrder
    }
}



//查询授权明细
export const fetchSysAuthDetail = (params = {}) => {
    const {pageno, product, netbarName, merchantName} = params
    const url = api.get('SYS_AUTH_DETAIL')
        .replace(/\{pageno\}/, pageno || 1)
        .replace(/\{productId\}/, product.id)
    return {
        type: types.get('SYS_AUTH_DETAIL'),
        payload: {
            request: {
                url,
                params:{pageno,netbarName, merchantName}
                // params: {netbarName, merchantName}
            }
        },
        //插入商品信息
        product
    }
}

//显示/隐藏授权明细
export const toggleAuthDetail = (data) => {
    const {shown, info} = data
    return {
        type: types.get('TOGGLE_AUTH_DETAIL'),
        shown,
        info
    }
}

//生成授权密钥
export const generateAuthKey = (params = {}) => {
    const url = api.get('GENERATE_AUTHKEY')
        .replace(/\{order_id\}/, params.orderid)
    return {
        type: types.get('GENERATE_AUTHKEY'),
        payload: {
            request: {
                url
            }
        },
        orderid: params.orderid
    }
}

//清理授权密钥
export const clearAuthKey = () => {
    return {
        type: types.get('CLEAR_AUTHKEY')
    }
}

//授权卡给网吧
export const authNetbar = (params = {}) => {
    const url = api.get('AUTH_NETBAR')
        .replace(/\{orderId\}/, params.orderid)
        .replace(/\{gid\}/, params.gid)
    return {
        type: types.get('AUTH_NETBAR'),
        payload: {
            request: {
                url
            }
        }
    }
}

//设置授权卡类型
export const setAuthType = (params = {}) => {
    const url = api.get('SET_AUTH_TYPE')
        .replace(/\{productId\}/, params.productId)
        .replace(/\{type\}/, params.type)
    return {
        type: types.get('SET_AUTH_TYPE'),
        payload: {
            request: {
                url
            }
        }
    }
}

//显示/隐藏授权设置
export const toggleAuthSetup = (id) => {
    return {
        type: types.get('TOGGLE_AUTH_SETUP'),
        id
    }
}
