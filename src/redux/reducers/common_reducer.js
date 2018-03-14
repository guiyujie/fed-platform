import {ActionTypes} from 'utils/action'

const types = ActionTypes['COMMON'];
const merchantTypes = ActionTypes['MERCHANT'];
const netbarTypes = ActionTypes['NETBAR'];

const initialState = {
     /**
     * 操作状态
     * @type {String}
     */
    optStatus: '',
    /**
     * 提示信息
     * @type {String}
     */
    msg: '',
    /**
     * 菜单信息
     */
    menu: []
}

export default function Reducer(state = initialState, action) {
    switch(action.type){
        //处理全局状态
        case types.get('OPTSTATUS'):
            return {...state, 
                optStatus: action.optStatus,
                msg: action.msg
            };
        //菜单列表
        case `${types.get('MENU_LIST')}_SUCCESS`:
            return {...state, menu: action.payload.data.data};
        default: 
            return state;
    }
}
