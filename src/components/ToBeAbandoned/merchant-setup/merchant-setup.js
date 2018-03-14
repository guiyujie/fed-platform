import React, {Component, PropTypes} from 'react';
import {Form, Input, Checkbox, Button, Modal} from 'antd';
import style from './marchant-setup.less'

const FormItem = Form.Item;


class EditForm extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    const { ModalConf, data } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <Modal className={style.wrap} {...ModalConf}  onOk={this.handleSubmit.bind(this)}>
        <Form layout="vertical">
            {getFieldDecorator('agentOpened', {
                initialValue: !!data.agentOpened,
                valuePropName: 'checked',
                rules: [{
                  required: false
                }],
            })(
            <div>
               <Checkbox defaultChecked={!!data.agentOpened}>代理资质（标准版授权）</Checkbox>
               <p className={style.mtXs}>针对自己地域内的网吧，获取售卖<span>标准版授权</span>的资质。可查看自己地域内已购买标准版授权的网吧信息。</p>
            </div>

            )}
            {getFieldDecorator('serviceOpened', {
                initialValue: !!data.serviceOpened,
                valuePropName: 'checked',
                rules: [{
                  required: false
                }],
            })(
                <div className={style.mtLg}>
                   <Checkbox defaultChecked={!!data.serviceOpened}>服务资质（增值包授权）</Checkbox>
                   <p className={style.mtXs}>针对自己地域内的网吧，获取售卖<span>增值包授权</span>的资质。可查看自己地域内已购买标准版授权的网吧数据信息，并可对他们进行服务。</p>
                </div>
            )}
        </Form>
      </Modal>
    )
  }
  handleSubmit (e){
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {id} = this.props.data
        const data = {
          merchantId: id,
          agentOpened: values.agentOpened? 1: 0,
          serviceOpened: values.serviceOpened? 1: 0
        }
        this.props.onSubmit(data)
      }
    });
  }
}

EditForm.defaultProps = {
  data: {},
  validators: {},
  onSubmit: () => {}
}

EditForm = Form.create()(EditForm);

export default EditForm
