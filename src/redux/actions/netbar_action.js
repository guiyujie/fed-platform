import Action from 'utils/action'

const {types, api} = new Action('NETBAR')

//网吧模糊搜索：通过网吧名称
export const searchByName = (params = {}) => {
  return {
    type: types.get('LIST'),
    payload: {
      request: {
        url: api.get('LIST'),
        params:{
          netbarName: params.netbarName
        }
      }
    },
    params
  }
}

//网吧模糊搜索：通过网吧名称和订单ID
export const searchByNameAndOrderId = (params = {}) => {
  const url = api.get('LIST_BY_ORDERID')
        .replace(/\{orderid\}/, params.orderid)
  return {
    type: types.get('LIST_BY_ORDERID'),
    payload: {
      request: {
        url,
        params:{
          netbarName: params.netbarName
        }
      }
    },
    params
  }
}

//根据网吧gid获取网吧信息
export const getByGid = (params = {}) => {
  const url = api.get('INFO_BY_GID')
    .replace(/\{gid\}/, params.gid)
  return {
    type: types.get('INFO_BY_GID'),
    payload: {
      request: {
        url
      }
    }
  }
}

//清除网吧搜索结果
export const clearResult = () => {
    return {
        type: types.get('CLEAR')
    }
}

//清除网吧信息
export const clearInfo = () => {
    return {
        type: types.get('CLEAR_INFO')
    }
}
