import React from 'react'
import { Menu, Icon } from 'antd';
import { browserHistory } from 'react-router';
import style from './style.less'

class HeaderContent extends React.Component {
	componentWillMount() {
		this.setState({pathname:browserHistory.getCurrentLocation().pathname});
	}

	render() {
		var t = this;
		return(
			<Menu selectedKeys={[t.state.pathname]} mode="horizontal" theme="dark" className={style.nav_bar_menu}>
			        <Menu.Item key="project">
			          <Icon type="mail" />项目库
			        </Menu.Item>
			        <Menu.Item key="toollib">
			          <Icon type="appstore" />工具库
			        </Menu.Item>
			        <Menu.Item key="resourcelib">
			          <Icon type="appstore" />资源库 
			        </Menu.Item>
			        <Menu.Item key="report">
			          <Icon type="appstore" />分析报告
			        </Menu.Item>
			        <Menu.Item key="laboratory">
			          <Icon type="appstore" />实验室
			        </Menu.Item>
			        <Menu.Item key="about">
			          <Icon type="appstore" />关于
			        </Menu.Item>
		      </Menu>
		)
	}
}

export default HeaderContent