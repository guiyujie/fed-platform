import {ActionTypes} from 'utils/action'

const types = ActionTypes.SERVICE;

const initialState = {
    //列表
    list: null,
    //详情
    info:null,
    //授权明细
    authInfo:null,
    //运营数据
    marketing:null,
    //是否显示详情
    showDetail: false,
    //是否显示授权明细
    showAuthDetail: false,
    //搜索结果
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
		case `${types.get('SYS_LIST')}_SUCCESS`:
			return {...state, list: {list: action.payload.data.data, ...(action.payload.data.page || {})}};
        case `${types.get('SEARCH_LIST')}_SUCCESS`:
            return {...state, search: { params: action.meta.previousAction.params, data: action.payload.data.data}};
		case `${types.get('DETAIL')}_SUCCESS`:
		case `${types.get('SYS_DETAIL')}_SUCCESS`:
			return {...state, info: action.payload.data.data}
		case `${types.get('AUTH_DETAIL')}_SUCCESS`:
		case `${types.get('SYS_AUTH_DETAIL')}_SUCCESS`:
			const {netbarInfo} = action.meta.previousAction;
			return {...state, authInfo: {list: action.payload.data.data, ...(action.payload.data.page || {}), netbarInfo}}
		case `${types.get('MARKETING')}_SUCCESS`:
        case `${types.get('SYS_MARKETING')}_SUCCESS`:
			const {gid} = action.meta.previousAction;
			return {...state, marketing: {gid, data: action.payload.data.data}}
		case types.get('TOGGLE_DETAIL'):
            return {...state, showDetail: action.shown};
		case types.get('TOGGLE_AUTH_DETAIL'):
            return {...state, showAuthDetail: action.shown};
        case types.get('TOGGLE_MARKETING'):
        	if(action.shown){
            	return {...state};
        	}
            return {...state, marketing: null};
		default: 
			return state;
	}
}
