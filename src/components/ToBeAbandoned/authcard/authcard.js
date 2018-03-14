import React, {Component, PropTypes} from 'react';
import {Card, Icon, Popover} from 'antd';
import style from './authcard.less'

class AuthCard extends Component {

  static productType = {
    0:'标准授权卡',
    1:'增值授权卡'
  }

	constructor(props) {
		super(props);
	}

	render(){
    const {data, actions, shown, authForm, authSetup} = this.props;
    const {setup, authorize, detail} = actions;
    const {productOrder, product, productImgurlPrefix} = data;
    return(
      <Card className={style.card} title={product.productName}>
        <div className={style.photoWrap}>
          <img className={style.photo} src={productImgurlPrefix + product.img} alt={product.productName}/>
            <div className={style.numWrap}>
                {shown.availableCount?<span>可用量：{data.availableCount || 0}张</span>: null}
                {shown.soldStock?<span>已售量：{data.soldStock || 0}张</span>: null}
                {shown.authStock?<span>授权量：{data.authStock || 0}张</span>: null}
            </div>
        </div>
        <div>
          <p className={style.details}>{product.productInfo}</p>
        </div>
        <div className={style.bottom}>
          <div className={style.time} title={"授权期限：" + (product.authPeriod || '-') + "天"}>授权期限：{product.authPeriod || '-'}天</div>
          <div className={style.handle}>
          {
            AuthCard.productType[product.type] ? <span className={style.handleInfo}>{AuthCard.productType[product.type]}</span>: null
          }
          {
            setup?(
              authSetup?
                <Popover placement="topRight" title={null} content={authSetup} trigger="click" visible={!!authSetup}>
                  <a href="javascript:;" className={style.iconSet} onClick={setup}><Icon type="setting" />{/*设置*/}</a>
                </Popover>:
                <a href="javascript:;" className={style.iconSet} onClick={setup}><Icon type="setting" />{/*设置*/}</a>
            )
            :null
          }
          {
            authorize?(
              authForm?
                <Popover placement="topRight" title={null} content={authForm} trigger="click" visible={!!authForm}>
                  <a href="javascript:;" className={style.iconKey} onClick={authorize}><Icon type="key" />{/*授权*/}</a>
                </Popover>:
                <a href="javascript:;" className={style.iconKey} onClick={authorize}><Icon type="key" />{/*授权*/}</a>
            )
           :null
          }
          {
            detail?<a href="javascript:;" className={style.iconDetails} onClick={detail}><Icon type="ellipsis" />{/*详情*/}</a>:null
          }
          </div>
        </div>
      </Card>
    )
	}
}

AuthCard.defaultProps = {
  data:{
    product:{
      productName:'商品名称',
      productInfo: '商品描述',
      img: '商品图片'
    },
    productImgurlPrefix:'/'
  },
  authForm: null,
  authSetup: null,
  actions:{
    setup: null,
    authorize: null,
    detail: null
  },
  shown:{
    availableCount: false,
    soldStock: false,
    authStock: false
  }
}

export default AuthCard
