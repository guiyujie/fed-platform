import Prefixer from 'utils/prefixer'
import * as config from 'config/action_config'

const Api = {}
const ActionTypes = {}

//解析配置
Object.keys(config).map(key => {
	const api = {}
	const types = {}
	Object.keys(config[key]).forEach(i => {
		//以API_开头的key被认为是一个Api配置
		if(/^API_/i.test(i)){
			//最终的key将去掉API_前缀
			const j = i.replace(/^API_/i, '')
			//获取api地址，加入到api配置中
			api[j] = config[key][i]
			//生成与key同名的action type
			types[j] = j
			return true
		}
		//解析非api的key，加入到types配置中（不填则与key值i相同）
		types[i] = config[key][i] || i
	})
	//实例化对应的Api对象
	Api[key] = new Prefixer('', api)
	//实例化对应的ActionTypes对象
	ActionTypes[key] = new Prefixer(key, types)
})

/**
 * Action对象
 * eg. const action = new Action('USER') //实例化一个Action对象
 * eg. import {Api, ActionTypes} from 'utils/action' //获取全局action配置
 */
export default class Action {
	//具有Api和ActionTypes两个静态成员
	static Api = Api
	static ActionTypes = ActionTypes
	//在构造器中传入key，将得到对应的action对象
	constructor(key) {
		return {
			api: Api[key],
			types: ActionTypes[key]
		}
	}
}