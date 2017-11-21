import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { PageHeader, RightShift, EmployeesTable } from '../../components';
import ModalEmployees from './ModalWrapper';


class EmployeesPage extends Component {

    componentDidMount(){
        const { getEmployees } = this.props;
        getEmployees();
    }

    render(){
        const { openModal, employees, deleteEmployee, editEmployee } = this.props;
        return(
            <div>
                <PageHeader>Работники</PageHeader>
                <RightShift>
                    <Button type="primary" onClick={() => openModal()}>Добавить</Button>
                </RightShift>
                <ModalEmployees />
                <EmployeesTable
                    data={employees}
                    editItem={editEmployee}
                    deleteItem={deleteEmployee}
                />
            </div>
        )
    }
};

EmployeesPage.propTypes = {
    departments: PropTypes.array,
    editEmployee: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    deleteEmployee: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
};

EmployeesPage.defaultProps = {
    departments: null,
    isLoading: false,
};

export default EmployeesPage;


