import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class ModalDepartment extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        const { id, create, edit, onCancel, form } = this.props;

        form.validateFields((err, values) => {
            if (!err) {
                id ? edit(id, values) : create(values.name)
            }
            onCancel();
            form.resetFields();
        });

    };

    render() {
        const {id, visible, onCancel, form, data} = this.props;
        const {getFieldDecorator} = form;
        return (
            <Modal
                visible={visible}
                title={id ? 'Редактировать запись' : 'Создать запись'}
                okText="ОК"
                cancelText="Отмена"
                onCancel={() => onCancel()}
                footer={null}
            >
                <Form
                    layout="vertical"
                    onSubmit={this.handleSubmit}>
                    <FormItem label="Название департамента">
                        {getFieldDecorator('name', {
                            initialValue: id ? data.filter(dt => dt.id === id)[0].name : '',
                            rules: [{required: true, message: 'Введите название департамента'}],
                        })(
                            <Input/>,
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form>
            </Modal>
        );
    }
};

ModalDepartment.propTypes = {
    data: PropTypes.object,
    id: PropTypes.number
};

ModalDepartment.defaultProps = {
    data: null,
    id: null
};


export default Form.create()(ModalDepartment);