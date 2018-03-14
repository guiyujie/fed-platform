import React from 'react';
import {Form, Radio, Button, message} from 'antd';
import style from './authsetup.less'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class AuthForm extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const { data, form } = this.props
		const { getFieldDecorator } = form
		const formItemLayout = {
	      labelCol: {
	        xs: { span: 24 },
	        sm: { span: 6 }
	      },
	      wrapperCol: {
	        xs: { span: 24 },
	        sm: { span: 14 }
	      }
	    };
	    const tailFormItemLayout = {
	      wrapperCol: {
	        xs: {
	          span: 24,
	          offset: 0
	        },
	        sm: {
	          span: 12,
	          offset: 12
	        }
	      }
	    };
	    return (
			<Form layout="horizontal" style={{width:'400px'}} onSubmit={this.handleSubmit.bind(this)}>
				<FormItem {...formItemLayout}  label="授权类型">
					{getFieldDecorator('type', {
		                valuePropName: 'checked',
		                rules: [{
		                  required: true,
		                  message: ' '
		                }],
		            })(
		             <RadioGroup>
				        <Radio value={0}>标准授权卡</Radio>
				        <Radio value={1}>增值授权卡</Radio>
				      </RadioGroup>
		            )}
				</FormItem>
                <div className={style.msg}>
                    <span>*</span>一经设置，概不支持修改，请慎重
                </div>
				<FormItem style={{textAlign:'right',marginTop:'50px'}} {...tailFormItemLayout}>
		          <Button onClick={this.props.onCancel.bind(this)}>取消</Button>
		          <Button type="primary" htmlType="submit">设置</Button>
		        </FormItem>
			</Form>
	    )
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
	      if (!err) {
	        this.props.onSubmit(values)
	      }else{
	      	message.warning('请选择授权卡类型')
	      }
	    });
	}
}

AuthForm.defaultProps = {
	onSubmit: ()=>{},
	onCancel: ()=>{}
}

export default Form.create({})(AuthForm);
