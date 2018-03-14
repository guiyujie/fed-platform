import React, {Component, PropTypes} from 'react';
import {Form, Modal, Input } from 'antd';
import style from './netbar-info.less'
const FormItem = Form.Item;
const { TextArea } = Input;


class DetailForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //取数据
        const {loading, ModalConf, form} = this.props;
        const { getFieldDecorator } = form
        const data = this.props.data || {}
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6}
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14}
            }
        };
        return (
            <Modal className={style.wrap} {...ModalConf} onOk={this.handleSubmit.bind(this)}>
                <Form  className={style.bg}  layout="horizontal">
                    <FormItem {...formItemLayout}
                              label="网吧GID">
                        {data.id || '-'}
                    </FormItem>
                    <FormItem {...formItemLayout}
                              label="网吧名称">
                        {data.name || '-'}
                    </FormItem>
                    <FormItem {...formItemLayout}
                              label="所属地域">
                        {`${data.provice || ''}${data.city || ''}` || '-'}
                    </FormItem>
                    <FormItem {...formItemLayout}
                              label="网吧详细地址">
                        {`${data.district || ''}${data.address || ''}` || '-'}
                    </FormItem>
                    <FormItem {...formItemLayout}
                              label="网吧联系人">
                        {data.principal || '-'}
                    </FormItem>
                    <FormItem {...formItemLayout}
                              label="网吧联系电话">
                        {data.phone || '-'}
                    </FormItem>
                    <FormItem {...formItemLayout}
                              label="备注">
                        {getFieldDecorator('note', {
                            initialValue: data.remarks,
                            rules: []
                         })(
                            <TextArea/>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            const {id} = this.props.data
            const data = {
                gid: id || '',
                note: values.note || ''
            }
            this.props.onSubmit(data)
          }
        });
    }
}

DetailForm.defaultProps = {
    data: {},
    //Modal组件配置
    ModalConf: {},
    onSubmit: () => {}
}

export default Form.create({})(DetailForm)
