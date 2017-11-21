import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button, Select } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

class ModalEmployees extends Component {



    handleSubmit = (e) => {
        e.preventDefault();

        const { id, create, edit, onCancel, form } = this.props;

        form.validateFields((err, values) => {
            if (!err) {
                id ? edit(id, values) : create(values);
                onCancel();
                form.resetFields();
            }

            if(err){
                return false
            }

        });
    };

    render() {
        const {id, visible, onCancel, form, employees, departments} = this.props;
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
                    <FormItem label="Фамилия">
                        {getFieldDecorator('firstName', {
                            initialValue: id ? employees.filter(e => e.id === id)[0].firstName : '',
                            rules: [{required: true, message: 'Введите фамилию сотрудника'}],
                        })(
                            <Input/>,
                        )}
                    </FormItem>
                    <FormItem label="Имя">
                        {getFieldDecorator('lastName', {
                            initialValue: id ? employees.filter(e => e.id === id)[0].lastName : '',
                            rules: [{required: true, message: 'Введите имя сотрудника'}],
                        })(
                            <Input/>,
                        )}
                    </FormItem>
                    <FormItem label="Отдел">
                        {getFieldDecorator('departmentId', {
                            initialValue: id ? employees.filter(e => e.id === id)[0].departmentId : '',
                            rules: [{required: true, message: 'Выберите департамент'}],
                        })(
                            <Select >
                                { departments.map((d, i) => <Option key={i + d.name} value={d.id}>{d.name}</Option>) }
                            </Select>,
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form>
            </Modal>
        );
    }
};

ModalEmployees.propTypes = {
    employees: PropTypes.array,
    departments: PropTypes.array,
    id: PropTypes.number
};

ModalEmployees.defaultProps = {
    employees: null,
    departments: null,
    id: null
};


export default Form.create()(ModalEmployees);