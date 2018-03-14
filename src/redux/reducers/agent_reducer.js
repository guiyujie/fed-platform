import {ActionTypes} from 'utils/action'

const types = ActionTypes.AGENT;

const initialState = {
    //列表
    list: null,
    //授权明细
    authInfo:null,
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

export default function AgentReducer(state = initialState, action) {
	switch(action.type){
		case `${types.get('LIST')}_SUCCESS`:
		case `${types.get('SYS_LIST')}_SUCCESS`:
			return {...state, list: {list: action.payload.data.data, ...(action.payload.data.page || {})}};
        case `${types.get('SEARCH_LIST')}_SUCCESS`:
            return {...state, search: { params: action.meta.previousAction.params, data: action.payload.data.data}};
		case `${types.get('AUTH_DETAIL')}_SUCCESS`:
		case `${types.get('SYS_AUTH_DETAIL')}_SUCCESS`:
			const {netbarInfo} = action.meta.previousAction;
			return {...state, authInfo: {list: action.payload.data.data, ...(action.payload.data.page || {}), netbarInfo}}
		case types.get('TOGGLE_AUTH_DETAIL'):
            return {...state, showAuthDetail: action.shown};
		default: 
			return state;
	}
}
