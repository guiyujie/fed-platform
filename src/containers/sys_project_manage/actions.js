import * as actions from 'actions/product_action'
import * as merchantActions from 'actions/merchant_action'
import * as netbarActions from 'actions/netbar_action'

module.exports =  {
	//merchant action
	searchMerchantByName: merchantActions.searchByName,
	clearMerchant: merchantActions.clearResult,
	//netbar action
	searchNetbarByName: netbarActions.searchByName,
	clearNetbar: netbarActions.clearResult,
	...actions
}