//自动添加前缀
//如： USER.LIST => USER_LIST
class Prefixer {
	constructor(prefix, values) {
		this.prefix = prefix? `${prefix}_`:''
		this.values = values || {}
	}

	get(key){
		key = (key || '').trim().toUpperCase()
		return this.values && this.values[key]? this.prefix + this.values[key]: null
	}
}

export default Prefixer