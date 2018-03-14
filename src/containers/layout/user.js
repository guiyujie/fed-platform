import React from 'react'
import { Menu, Dropdown, Icon} from 'antd'

class User extends React.Component {
	render() {
		return (
			<div className={this.props.className}>
                <span className="ant-dropdown-link">
                  <Icon type="user" /> admin
                </span>
			</div>
		)
	}
}

export default User
