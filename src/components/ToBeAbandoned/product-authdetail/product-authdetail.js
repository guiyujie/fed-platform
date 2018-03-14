import React, {Component, PropTypes} from 'react';
import {Table, Modal, Button, Row, Col} from 'antd';
import AuthKeyStatus from 'Coms/authkey-status/authkey-status'
import SearchForm from 'Coms/search-form/search-form'
import style from './product-authdetail.less'


class Detail extends Component {
    render() {
        //列配置
        const columns = this.columns();
        //分页配置
        const pagination = this.pagination();
        //取数据
        const {ModalConf, SearchFormConf, loading, info, data} = this.props;
        const {list} = data.authInfo
        return (
            <Modal {...ModalConf}>
                <Row className={style.bd}>
                    <Col span={8}>
                        <p className={style.productName} title={info.productName}>{info.productName}</p>
                    </Col>
                    <Col span={16}>
                        <SearchForm {...SearchFormConf}/>
                    </Col>
                </Row>
                <Table className={style.tableWrapper}
                       columns={columns}
                       dataSource={list ? list : []}
                       pagination={pagination}
                       loading={loading}
                       rowKey={(data, index) => index}
                       bordered/>
            </Modal>
        )
    }

    columns() {
        const {shown} = this.props
        return [
            {
                title: '序号',
                dataIndex: 'authDetail.id',
                key: 'authDetail.id'
            },
            {
                title: '授权密钥',
                dataIndex: 'authDetail.authKey',
                key: 'authDetail.authKey'
            },
            {},
            shown.merchantInfo ? {
                title: '所属商户名称',
                dataIndex: 'merchantInfo.userName',
                key: 'merchantInfo.userName'
            } : {},
            shown.merchantInfo ? {
                title: '所属商户ID',
                dataIndex: 'merchantInfo.id',
                key: 'merchantInfo.id'
            } : {},
            {
                title: '授权期限',
                dataIndex: 'authDetail.period',
                key: 'authDetail.period'
            },
            {
                title: '网吧ID',
                dataIndex: 'netbarInfo.id',
                key: 'netbarInfo.id'
            },
            {
                title: '网吧名称',
                dataIndex: 'netbarInfo.name',
                key: 'netbarInfo.name'
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
                        authStartDate && authEndDate ?
                            `${authStartDate}至${authEndDate}` :
                            '-'
                    }
                    </span>
                    )
                }
            },
            {
                title: '密钥状态',
                dataIndex: 'strStatus',
                key: 'strStatus',
                render: (text, record, index) => {
                    const authDetail = record.authDetail || {}
                    return (
                        <AuthKeyStatus status={authDetail.status} text={text}/>
                    )
                }
            }
        ]
    }

    //表格分页配置
    pagination() {
        const {data} = this.props
        const {authInfo} = data;
        return {
            total: parseInt(data && authInfo.totalRecords) || 0,
            pageSize: parseInt(data && authInfo.length) || 20,
            current: parseInt(data && authInfo.pageNo) || 1,
            onChange: (page) => {
                let params = {pageno: page}
                this.props.SearchFormConf.onSearch(params)
            }
        }
    }
}

Detail.defaultProps = {
    //Modal组件配置
    ModalConf: {},
    //SearchForm组件配置
    SearchFormConf: {},
    //商品授权网吧列表
    list: {},
    //商品信息
    info: {},
    //显示信息
    shown: {
        merchantInfo: false
    }
}

export default Detail
