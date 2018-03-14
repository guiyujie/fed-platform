import Action from 'utils/action'

const {types, api} = new Action('MERCHANT')


//获取列表信息
export const fetchList = (params = {}) => {
    params = { pageno:1, ...params }
    return {
        type: types.get('LIST'),
        payload: {
            request: {
                url: api.get('LIST'),
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

//清除商家搜索结果
export const clearResult = () => {
    return {
        type: types.get('CLEAR_RESULT')
    }
}

//显示/隐藏编辑表单
export const toggleEdit = (data) => {
    const {shown, info} = data
    return {
        type: types.get('TOGGLE_EDIT'),
        shown,
        info
    }
}

//更新信息
export const update = (params) => {
    const url = api.get('UPDATE')
        .replace(/\{merchantId\}/, params.merchantId)
        .replace(/\{agentOpened\}/, params.agentOpened)
        .replace(/\{serviceOpened\}/, params.serviceOpened)
    return {
        type: types.get('UPDATE'),
        payload: {
            request: {
                url
            }
        }
    }
}