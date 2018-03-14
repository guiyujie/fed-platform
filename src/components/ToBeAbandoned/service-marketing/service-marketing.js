import React from 'react';
import {Dropdown, Menu } from 'antd';
import style from './service-marketing.less'


class MarketingDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, visible} = this.props
        const menu = (
          <Menu>
          {
            data && Object.keys(data).map(key=>{
              return (<Menu.Item key={key}>
                <a target="_blank" rel="noopener noreferrer" href={data[key]}>{key}</a>
              </Menu.Item>)
            })
          }
          </Menu>
        );
        return (
           <Dropdown trigger={["click"]} overlay={menu} visible={!!visible} placement="bottomCenter" onVisibleChange={this.onVisibleChange.bind(this)}>
            <a href="javascript:;">查看详情</a>
          </Dropdown>
        )
    }

    onVisibleChange(shown){
        const {onVisibleChange} = this.props
        onVisibleChange(shown)
    }
}

MarketingDropdown.defaultProps = {
    data: {},
    visible: false,
    onVisibleChange: () => {}
}

export default MarketingDropdown
