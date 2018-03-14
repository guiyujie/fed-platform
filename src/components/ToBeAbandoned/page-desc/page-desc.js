import React from 'react'
import {Alert} from 'antd'
import style from './page-desc.less'

class PageDesc extends React.Component {
	static map = {
		product: {
			title:'授权卡',
			desc() {
		      return (
		          <ul>
		            <li>a.网吧安装凯狮平台后，需获取授权密钥才可正常使用。</li>
		            <li>b.授权卡购买成功后，需使用时可随时生活授权密钥。授权密钥关联GID成功后，才正式生效。若无GID关联，该密钥自动销毁，无使用价值。</li>
		            <li>c.密钥生成后48小时内必须激活，否则密钥失效。</li>
		          </ul>
		      )
		    }
		},
		agent: {
			title:'标准授权管理',
			desc() {
		      return (
		        <ul>
		          <li>实时查看网吧当前的授权情况及授权记录。</li>
		        </ul>
		      )
		    }
		},
		service: {
			title:'增值服务管理',
			desc(){
			      return (
			        <ul>
			          <li>实时查看网吧标准授权和增值授权的时间，及网吧运营数据查看入口。</li>
			        </ul>
			      )
    		}
		},
		merchant: {
			title:'商户资质管理',
			desc() {
		      return (
		        <ul>
		          <li>商户信息来自于资金结算平台。</li>
		          <li>资质管理：拥有凯狮标准版业务线的具有代理资质，拥有凯狮增值版业务线的具有服务资质。两业务线都有的，则具有代理和服务资质。</li>
		        </ul>
		      )
		    }
		}
	}

	render(){
		const {type} = this.props  //取type
		const {title, desc} = PageDesc.map[type] || PageDesc.map['product'] //在type中取到title,desc，默认type是product
		return(
			<Alert message={title} description={desc()} type="info" closable showIcon/>
		)
	}
}

PageDesc.defaultProps = {
	type:'product'
}

export default PageDesc
