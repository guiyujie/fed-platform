/**
 * 生产环境入口文件
 */

import React from 'react';
import Layout from 'containers/layout';
import style from './style.less'

export default class Root extends React.Component {

  render () {
    return (
    	<div className={style.root}>
      		<Layout>{this.props.children}</Layout>
      	</div>
    )
  }
}

