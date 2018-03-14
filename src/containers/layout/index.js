import React from 'react'
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb, Icon,Input } from 'antd';
const Search = Input.Search;
import classNames from 'classnames'
import * as commonAction from 'actions/common_action'
import HeaderContent from './header'
import FooterContent from './footer'
import NavMenu from './nav_menu'
import User from './user'
import PageTitle from 'Coms/page-title/page-title'
import {isRouteRoot, makeRouteUrl} from 'utils/helper'
import  style from './style.less'
const { SubMenu } = Menu
const { Content, Sider, Header, Footer } = Layout


class Page extends React.Component {
    state = {
        // collapsed: false,
        mode: 'inline'
    };

    itemRender (route, params, routes, paths) {
      if(!route.breadcrumbName){
        return null
      }
	  const last = routes.indexOf(route) === routes.length - 1;
	  return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
    }

    onCollapse (collapsed) {
        this.setState({
          // collapsed,
          mode: collapsed ? 'vertical' : 'inline',
        });
    }

    componentWillReceiveProps(nextProps){
        const {menu} = nextProps
        const routing = nextProps.routing.locationBeforeTransitions
        // //获取菜单后,根路径进来默认跳到菜单第一个链接
        if(menu && menu[0] && isRouteRoot(routing)){
         //url带上参数和hash
          const url =  makeRouteUrl(menu[0]) + routing.search + routing.hash
          browserHistory.push(url)
        }
    }

    componentWillMount() {
//     this.props.actions.fetchMenuList();
		const {children, menu, routing} = this.props;
		console.log(children);
    }

    render() {
    	const t = this;
        const {children, menu, routing} = this.props
        const {mode} = this.state
        const headerClassName = classNames(style.header, 'clearfix')
        // const siderClassName = classNames({
        //   [style.collapsed]: collapsed
        // })

        if(!children || isRouteRoot(routing.locationBeforeTransitions)){
          return (
            <layout className={style.container}>
              <Content className={style.content}>loading...</Content>
            </layout>
          )
        }

        return (
          <div>

            {
              children.props.route.path !== '*'?

                <Layout className={style.layout}>
                  <Layout style={{backgroundColor:"#000"}}>
                    <Header className={headerClassName}>
						<div className={style.logo}><span></span></div>
						<div className={style.search_bar}>
					    	  <Search
							    placeholder="input search text"
							    style={{ width: 200 }}
							    onSearch={value => console.log(value)}
							  />
					    </div>
						<div className={style.nav_bar_center}>
							<HeaderContent/>
					    </div>
                    </Header>
                    {
                      children?
                        React.Children.map(children, child => (
                        <div>
                        	<PageTitle content={child.props.routes[child.props.routes.length-1].breadcrumbName}/>
                            <layout className={style.container}>
                              <Content className={style.content}>
                                {child}
                              </Content>
                            </layout>
                        </div>
                        )):
                        <layout className={style.container}>
                          <Content className={style.content}>welcome!</Content>
                        </layout>
                    }
                    <Footer className={style.footer}><FooterContent/></Footer>
                  </Layout>
                </Layout>
              :
              <div>
                {
                  React.Children.map(children, child => (
                      <div>{child}</div>
                  ))
                }
              </div>
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      routing: state.routing,
      ...state.commonState
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(commonAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
