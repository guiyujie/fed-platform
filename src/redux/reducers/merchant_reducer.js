import {ActionTypes} from 'utils/action'

const types = ActionTypes.MERCHANT;

const initialState = {
    //列表
    list: null,
    //详情
    info:null,
    //查询结果
    search: {
    	//搜索条件
        params: {},
        //搜索结果
        data: []
    },
    //是否显示编辑表单
    showEditForm: false
}

export default function Reducer(state = initialState, action) {
	switch(action.type){
		case `${types.get('LIST')}_SUCCESS`:
			return {...state, list: {list: action.payload.data.data, ...(action.payload.data.page || {})}};
        case `${types.get('SEARCH_LIST')}_SUCCESS`:
            return {...state, search: { params: action.meta.previousAction.params, data: action.payload.data.data}};
		case types.get('TOGGLE_EDIT'):
            return {...state, info: action.info || {}, showEditForm: action.shown};
        case types.get('CLEAR_RESULT'):
        	return {...state, search: { params: {}, data: [] }}
		default: 
			return state;
	}
}
