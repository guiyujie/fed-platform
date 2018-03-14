import {ActionTypes} from 'utils/action'

const types = ActionTypes['NETBAR'];

const initialState = {
     /**
     * 网吧信息
     */
    info: null,
    /**
     * 网吧搜索结果
     */
    search: {
        //搜索条件
        params: {},
        //搜索结果
        data: []
    }
}

export default function Reducer(state = initialState, action) {
    switch(action.type){
        case `${types.get('LIST')}_SUCCESS`:
        case `${types.get('LIST_BY_ORDERID')}_SUCCESS`:
            return {...state, search: { params: action.meta.previousAction.params, data: action.payload.data.data}};
        case `${types.get('INFO_BY_GID')}_SUCCESS`:
            return {...state, info: action.payload.data.data}
        case types.get('CLEAR'):
            return {...state, search: { params: {}, data: [] }}
        case types.get('CLEAR_INFO'):
            return {...state, info: {}}
        default: 
            return state;
    }
}
