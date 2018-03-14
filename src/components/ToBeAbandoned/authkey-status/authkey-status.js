import React from 'react'
import {Badge} from 'antd'
import style from './authkey-status.less'

class AuthKey extends React.Component {
	static map = {
		//待激活
		1:'error',
		//授权中
		2:'success',
		//授权结束
		3:'error',
		//密钥失效（未激活）
		4:'default'
	}

	render() {
		const {status, text} = this.props
		return (
			<Badge status={AuthKey.map[status]} text={text} />
		)
	}
}

AuthKey.defaultProps = {
	status: 1,
	text: '待激活'
}

export default AuthKey