import React from 'react'
import {Form, Button, message} from 'antd'
import AutoComplete from 'Coms/autocomplete/autocomplete'
import style from './search-form.less'
const FormItem = Form.Item;

class SearchForm extends React.Component{

	static map = {
		//商户信息
		merchant:{
			dataParser: data => {
				return data? data.map(item => item.userName): []
			},
			dataSource: [],
			dataIndex: 'merchantName',
			label: '商户名称',
			onSearch: ()=>{},
			onClear: ()=>{}
		},
		//代理商信息
		agent:{
			dataParser: data => {
				return data? data.map(item => item.userName): []
			},
			dataSource: [],
			dataIndex: 'merchantName',
			label: '代理商名称',
			onSearch: ()=>{},
			onClear: ()=>{}
		},
		//服务商信息
		service:{
			dataParser: data => {
				return data? data.map(item => item.userName): []
			},
			dataSource: [],
			dataIndex: 'merchantName',
			label: '服务商名称',
			onSearch: ()=>{},
			onClear: ()=>{}
		},
		//网吧信息
		netbar: {
			dataParser: data => {
				return data? data.map(item => item.name): []
			},
			dataSource: [],
			dataIndex: 'netbarName',
			label: '网吧名称',
			onSearch: ()=>{},
			onClear: ()=>{}
		},
	}

	constructor(props) {
		super(props);

	}

	render(){
		return(
			<Form className={style.wrap} onSubmit={this.handleSearch.bind(this)}>
				{this.renderFormItem('merchant')}
				{this.renderFormItem('netbar')}
				<FormItem>
		          	<Button type="primary" htmlType="submit">搜索</Button>
				</FormItem>
			</Form>
		)
	}

	renderFormItem(type){
		let conf = this.props[type]
		if(!conf){
			return null
		}
		//非特殊字符
		const pattern = /^[^\/\\:*?"<>|;]*$/
		//合并默认配置
		conf = Object.assign({}, SearchForm.map[conf.type || type], conf)
		//模板渲染
		const {form} = this.props
		const {getFieldDecorator,setFieldsValue} = form
		const dataSource = conf.dataParser(conf.dataSource)
		const onSearch = (value) => {
		    if(value){
		  		const data = {}
		  		data[conf.dataIndex] = value
		  		if(pattern.test(value)){
		    		conf.onSearch(data)
		  		}
		    }else{
		        conf.onClear()
		    }
		    return false
		}
		return (
			<FormItem label={conf.label}>
			{getFieldDecorator(conf.dataIndex, {
	            rules: [{
	            	pattern,
	            	message:' '
	            }]
	         })(
	            <AutoComplete
                  dataSource={dataSource}
                  onSearch={onSearch}
                  //封装后的AutoComplete组件检测不到onChange事件，需要手动指定
                  onChange={value=>{
                  	const data = {}
		  			data[conf.dataIndex] = (value || '').trim()
                  	setFieldsValue(data)
                  }}
                />
	        )}
			</FormItem>
		)

	}

	handleSearch(e){
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
	      if (!err) {
	        this.props.onSearch(values)
	      }else{
	      	message.warning('搜索关键字不合法')
	      }
	    });
	}
}

SearchForm.defaultProps = {
	//商户信息
	merchant: null,
	//网吧信息
	netbar: null,
	//搜索接口
	onSearch: ()=>{}
}

export default Form.create({})(SearchForm)
