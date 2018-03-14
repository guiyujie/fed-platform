import React, {Component, PropTypes} from 'react';
import {Table, Modal} from 'antd';
import AuthKeyStatus from 'Coms/authkey-status/authkey-status'
import style from './netbar-authdetail.less'


class Detail extends Component {
	constructor(props) {
		super(props);

	}

	render(){
		//列配置
        const columns = this.columns();
        //分页配置
        const pagination = this.pagination();
        //取数据
        const { data , loading, ModalConf } = this.props;
        const { list, netbarInfo } = data;
		return(
		<Modal {...ModalConf}>
            <h3 className={style.subtitle}>网吧GID：{netbarInfo.id}，网吧名称：{netbarInfo.name}</h3>
			<Table columns={columns}
                    dataSource={data? data.list: []}
                    pagination={pagination}
                    loading={loading}
                    rowKey={(data, index)=>index}
                    bordered/>
		</Modal>
		)
	}

	columns() {
      return [
          {
              title: '序号',
              dataIndex: 'authDetail.id',
              key: 'authDetail.id'
          },
          {
              title: '商品名称',
              dataIndex: 'product.productName',
              key: 'product.productName'
          },
          {
              title: '授权密钥',
              dataIndex: 'authDetail.authKey',
              key: 'authDetail.authKey'
          },
          {
              title: '授权期限',
              dataIndex: 'authDetail.period',
              key: 'authDetail.period'
          },
          {
              title: '激活日期',
              dataIndex: 'activeDate',
              key: 'activeDate'
          },
          {
              title: '授权期',
              key: 'date',
              render: (text, record, index) => {
                const {authStartDate, authEndDate} = record
                return (
                    <span>
                    {
                      authStartDate && authEndDate?
                        `${authStartDate}至${authEndDate}`:
                        '-'
                    }
                    </span>
                )
              }
          },
          {
              title: '密钥状态',
              dataIndex:'strStatus',
              key: 'strStatus',
              render: (text, record, index) => {
                return (
                  <AuthKeyStatus status={record.authDetail.status} text={text} />
                )
              }
          }
        ]
    }

    //表格分页配置
    pagination() {
      const {list, netbarInfo} = this.props.data
      return {
          total: parseInt(list && list.totalRecords) || 0,
          pageSize: parseInt(list && list.length) || 20,
          current: parseInt(list && list.pageNo) || 1,
          onChange: (page) => {
              let params = { pageno: page, gid: netbarInfo.id }
              this.props.actions.fetchList(params)
          }
      }
    }
}

Detail.defaultProps = {
  data:{
    //商品列表
    list: {},
    //网吧信息
    netbarInfo: {}
  },
  //Modal组件配置
  ModalConf:{}
}

export default Detail
