import Action from 'utils/action'

const {types, api} = new Action('SERVICE')

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

//查询网吧详情
export const fetchDetail = (params = {}) => {
    const {gid} = params
    const url = api.get('DETAIL')
        .replace(/\{gid\}/, gid)
    return {
        type: types.get('DETAIL'),
        payload: {
            request: {
                url
            }
        }
    }
}

//查询网吧详情（系统管理员）
export const fetchSysDetail = (params = {}) => {
    const {gid} = params
    const url = api.get('SYS_DETAIL')
        .replace(/\{gid\}/, gid)
    return {
        type: types.get('SYS_DETAIL'),
        payload: {
            request: {
                url
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
    const {pageno, netbarInfo} = params
    const url = api.get('SYS_AUTH_DETAIL')
        .replace(/\{gid\}/, netbarInfo.id)
    return {
        type: types.get('SYS_AUTH_DETAIL'),
        payload: {
            request: {
                url,
                params: {
                    pageno: pageno || 1
                }
            }
        },
        //插入网吧信息
        netbarInfo
    }
}

//设置网吧备注
export const setNetbarNote = (data) => {
    return {
        type: types.get('NETBAR_NOTE'),
        payload: {
            request: {
                url: api.get('NETBAR_NOTE'),
                method: 'POST',
                data
            }
        }
    }
}

//设置网吧备注(系统管理员)
export const setSysNetbarNote = (data) => {
    return {
        type: types.get('SYS_NETBAR_NOTE'),
        payload: {
            request: {
                url: api.get('SYS_NETBAR_NOTE'),
                method: 'POST',
                data
            }
        }
    }
}

//获取运营数据
export const fetchMarketing = (params = {}) => {
    const {gid} = params
    return {
        type: types.get('MARKETING'),
        payload: {
            request: {
                url: api.get('MARKETING'),
                params: {
                    gid
                }
            }
        },
        //插入gid
        gid
    }
}
//获取运营数据（系统管理员）
export const fetchSysMarketing = (params = {}) => {
    const {gid} = params
    return {
        type: types.get('SYS_MARKETING'),
        payload: {
            request: {
                url: api.get('SYS_MARKETING'),
                params: {
                    gid
                }
            }
        },
        //插入gid
        gid
    }
}

//显示/隐藏详情
export const toggleDetail = (data) => {
    const {shown} = data
    return {
        type: types.get('TOGGLE_DETAIL'),
        shown
    }
}

//显示/隐藏详情
export const toggleAuthDetail = (data) => {
    const {shown} = data
    return {
        type: types.get('TOGGLE_AUTH_DETAIL'),
        shown
    }
}

//显示/隐藏运营数据下拉
export const toggleMarketing = (data) => {
    const {shown} = data
    return {
        type: types.get('TOGGLE_MARKETING'),
        shown
    }
}