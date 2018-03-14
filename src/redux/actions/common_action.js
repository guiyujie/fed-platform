import Action from 'utils/action'

const {types, api} = new Action('COMMON')

//操作成功
export const optSuccess = (msg) => {
    return {
      type: types.get('OPTSTATUS'),
      optStatus: 'success',
      msg
    }
}

//操作失败
export const optError = (msg) => {
    return {
      type: types.get('OPTSTATUS'),
      optStatus: 'error',
      msg
    }
}

//提交中
export const optLoading = (msg) => {
    return {
        type: types.get('OPTSTATUS'),
        optStatus: 'loading',
        msg
    }
}

//获取菜单
export const fetchMenuList = (params = {}) => {
    return {
        type: types.get('MENU_LIST'),
        payload: {
            request: {
                url: api.get('MENU_LIST'),
                params
            }
        }
    }
}
