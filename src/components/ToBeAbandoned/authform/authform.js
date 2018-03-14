import React from 'react';
import {Form, Input, Button} from 'antd';
import debounce from 'lodash/debounce'
import style from './authform.less'

const FormItem = Form.Item;

class AuthForm extends React.Component{

	constructor(props) {
		super(props);
		//实时验证设置触发间隔为300ms
	    this.validators = {}
	    for(var i in this.props.validators){
	      this.validators[i] = debounce(this.props.validators[i], 300)
	    }

	    this.state = {

	    }
	}

	render() {
		const { data, form } = this.props
		const { getFieldDecorator } = form
		const formItemLayout = {
	      labelCol: {
	        xs: { span: 24 },
	        sm: { span: 5 },
	      },
	      wrapperCol: {
	        xs: { span: 24 },
	        sm: { span: 18 },
	      }
	    };
	    const tailFormItemLayout = {
	      wrapperCol: {
	        xs: {
	          span: 24,
	          offset: 0,
	        },
	        sm: {
	          span: 14,
	          offset: 9,
	        },
	      }
	    };
	    return (
			<Form layout="horizontal" style={{width:'400px'}} onSubmit={this.handleSubmit.bind(this)}>
				<FormItem {...formItemLayout}  label="授权密钥">
					{data.authKey}
				</FormItem>
				<FormItem {...formItemLayout}  label="网吧GID" hasFeedback>
					{getFieldDecorator('gid', {
						initialValue: data.gid,
			            rules: [{
			              required: true,
			              message: '网吧GID校验失败',
 		                  transform: (value) => (value || '').trim(),
        		          validator: this.checkGid.bind(this)
			        	}]
			         })(
			            <Input placeholder="填写获取授权资质的网吧GID" autoComplete="off"/>
			        )}
				</FormItem>
				<FormItem {...formItemLayout}  label="网吧名称">
					{data.netbarName || '-'}
				</FormItem>
				<FormItem style={{'textAlign':'right'}} className={style.buttons} {...tailFormItemLayout}>
		          <Button onClick={this.props.onCancel.bind(this)}>取消</Button>
		          <Button type="primary" htmlType="submit" disabled={!data.netbarName}>授权</Button>
		        </FormItem>
			</Form>
	    )
	}

	checkGid(rule, value, callback){
		if(!value){
		  this.props.onClear()
	      callback('请输入gid')
	      return false
	    }
	    const {checkGid} = this.validators
	    if(checkGid){
	      checkGid(value, this.props.data, callback)
	      return false
	    }
	    return callback()
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
	      if (!err) {
	        this.props.onSubmit(values)
	      }
	    });
	}
}

AuthForm.defaultProps = {
	data:{
		authKey:'',
		gid: '',
		netbarName:''
	},
	validators:{
		checkGid: ()=>{}
	},
	onSubmit: ()=>{},
	onCancel: ()=>{},
	onClear: ()=>{}
}

export default Form.create({})(AuthForm);
