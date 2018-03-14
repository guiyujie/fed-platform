import Action from 'utils/action'

const {types, api} = new Action('AGENT')

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

//查询列表信息
export const searchByName = (params = {}) => {
    return {
        type: types.get('SEARCH_LIST'),
        payload: {
            request: {
                url: api.get('SEARCH_LIST'),
                params:{
                  merchantName: params.merchantName
                }
            }
        },
        params
    }
}

//清除搜索结果
export const clearResult = () => {
    return {
        type: types.get('CLEAR_RESULT')
    }
}

//查询列表信息（系统管理员）
export const fetchSysList = (params = {}) => {
    params = { pageno:1, ...params }
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
    const {pageno, netbarInfo} = params
    const url = api.get('AUTH_DETAIL')
        .replace(/\{pageno\}/, pageno || 1)
        .replace(/\{gid\}/, netbarInfo.id)
    return {
        type: types.get('AUTH_DETAIL'),
        payload: {
            request: {
                url
            }
        },
        //插入网吧信息
        netbarInfo
    }
}

//查询授权明细（系统管理员）
export const fetchSysAuthDetail = (params = {}) => {
    const {pageno, netbarInfo, merchantId} = params
    const url = api.get('SYS_AUTH_DETAIL')
        .replace(/\{gid\}/, netbarInfo.id)
    return {
        type: types.get('SYS_AUTH_DETAIL'),
        payload: {
            request: {
                url,
                params: {
                    pageno: pageno || 1,
                    merchantId
                }
            }
        },
        //插入网吧信息
        netbarInfo
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