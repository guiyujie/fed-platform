import {ActionTypes} from 'utils/action'

const types = ActionTypes.PRODUCT;

const initialState = {
    //列表
    list: null,
    //授权明细
    authInfo:null,
    //是否显示授权明细
    showAuthDetail: false,
    //是否授权设置表单
    showAuthSetup: false,
    //授权密钥
    authKey: {}
}

export default function Reducer(state = initialState, action) {
	switch(action.type){
        //列表
		case `${types.get('LIST')}_SUCCESS`:
        case `${types.get('SYS_LIST')}_SUCCESS`:
			return {...state, list: {list: action.payload.data.data, ...(action.payload.data.page || {})}};
        //授权详情
        case `${types.get('AUTH_DETAIL')}_SUCCESS`:
            const {productOrder} = action.meta.previousAction;
            return {...state, authInfo: {list: action.payload.data.data, ...(action.payload.data.page || {}), productOrder}}
		case `${types.get('SYS_AUTH_DETAIL')}_SUCCESS`:
            const {product} = action.meta.previousAction;
            return {...state, authInfo: {list: action.payload.data.data, ...(action.payload.data.page || {}), product}}
		case types.get('TOGGLE_AUTH_DETAIL'):
            return {...state, showAuthDetail: action.shown};
        //授权key
        case `${types.get('GENERATE_AUTHKEY')}_SUCCESS`:
        	const {orderid} = action.meta.previousAction;
        	const authKey = {}
            authKey[orderid] = action.payload.data.data
        	return {...state, authKey}
        case types.get('CLEAR_AUTHKEY'):
            return {...state, authKey:{}}
        //授权设置
        case types.get('TOGGLE_AUTH_SETUP'):
            return {...state, showAuthSetup: action.id}
		default: 
			return state;
	}
}
