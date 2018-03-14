import { combineReducers } from 'redux';
//引入reducers
import commonState from './common_reducer';
import merchant from './merchant_reducer';
import product from './product_reducer';
import agent from './agent_reducer';
import service from './service_reducer';
import netbar from './netbar_reducer';

export default function rootReducer (reducers){
	return combineReducers({
		commonState,
	    merchant,
	    product,
	    agent,
	    service,
	    netbar,
	    ...reducers
	});	
}
