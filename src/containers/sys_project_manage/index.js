import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link,browserHistory} from 'react-router';
import { Menu, Icon } from 'antd'
const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;
import actions from './actions'
import { Api } from 'utils/action'
const api = Api['PRODUCT']
import style from './style.less'

class Manage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		//      this.props.actions.fetchSysList()
		var t = this;
		console.log(t.props);
	}

	componentWillReceiveProps(nextProps) {}

	shouldComponentUpdate(newProps, newState) {

		console.log(newProps.location.query);

		return true;
	}

	switchWebSit = (link) => {
		browserHistory.push({
			pathname: link
		});
	}

	render() {
		const t = this;
		const {
			children,
			routing
		} = this.props;

		return(
			<div>
				
				<div className={style.content_frame}>
		        <Menu
		          mode="inline"
		          theme="dark"
		          className={style.content_menu}
		        >
		          <Menu.Item key="1">
		          	<div onClick={this.switchWebSit.bind(t,"/fx/sys/project/screen/baidu")}>
			            <Icon type="pie-chart" />
			            <span>百度</span>
		            </div>
		          </Menu.Item>
		          <Menu.Item key="2">
			          	<div onClick={this.switchWebSit.bind(t,"/fx/sys/project/screen/taobao")}>
				            <Icon type="desktop" />
				            <span>淘宝</span>
			            </div>
		          </Menu.Item>
		          <Menu.Item key="3">
		            <Icon type="inbox" />
		            <span>Option 3</span>
		          </Menu.Item>
		          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
		            <Menu.Item key="5">Option 5</Menu.Item>
		            <Menu.Item key="6">Option 6</Menu.Item>
		            <Menu.Item key="7">Option 7</Menu.Item>
		            <Menu.Item key="8">Option 8</Menu.Item>
		          </SubMenu>
		          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
		            <Menu.Item key="9">Option 9</Menu.Item>
		            <Menu.Item key="10">Option 10</Menu.Item>
		            <SubMenu key="sub3" title="Submenu">
		              <Menu.Item key="11">Option 11</Menu.Item>
		              <Menu.Item key="12">Option 12</Menu.Item>
		            </SubMenu>
		          </SubMenu>
		        </Menu>
					{
                      children?
                        React.Children.map(children, child => (
                        <div>
                            {child}
                        </div>
                        )):
                        <div className={style.content_window}>
							<div>loading....</div>
						</div>
                    }
				</div>
            </div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		commonState: state.commonState,
		data: state.product,
		merchant: state.merchant.search,
		netbar: state.netbar.search
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Manage);