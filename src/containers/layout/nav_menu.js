import React from 'react'
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
import {makeRouteUrl} from 'utils/helper';

const { SubMenu } = Menu

class LeftMenu extends React.Component {

  render() {
    const { mode, style, menu } = this.props
    const selectedKeys = this.selectedKeys()
    return (
    	<Menu theme="dark" mode={mode} selectedKeys={selectedKeys}>
    	{
    		menu && menu.map(item => {
    			return (
    				<Menu.Item key={item.id}>
                        <Link to={makeRouteUrl(item)}><Icon type={item.icon} /> <span>{item.name}</span></Link>
    				</Menu.Item>
    			)
    		})
    	}
	    </Menu>
    )
  }

  selectedKeys() {
     const {menu, routing} = this.props
     if(!menu){
        return []
     }
     return menu
        .filter(item => routing.pathname == makeRouteUrl(item))
        .map(item => item.id + '')
  }
}

export default LeftMenu
