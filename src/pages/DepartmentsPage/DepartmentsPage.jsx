import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { PageHeader, RightShift, DepartmentsTable } from '../../components';
import ModalDepartment from './ModalWrapper';


class DepartmentsPage extends Component {

    componentDidMount(){
        const { addAllDepartments } = this.props;
        addAllDepartments();
    }

    render(){
        const { openModal, departments, deleteDepartment, editDepartment } = this.props;
        return(
            <div>
                <PageHeader>Отделы</PageHeader>
                    <RightShift>
                        <Button type="primary" onClick={() => openModal()}>Добавить</Button>
                    </RightShift>
                <ModalDepartment />
               <DepartmentsTable
                   data={departments}
                   editItem={editDepartment}
                   deleteItem={deleteDepartment}
               />
            </div>
        )
    }
};

DepartmentsPage.propTypes = {
    departments: PropTypes.array,
    editDepartment: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    deleteDepartment: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
};

DepartmentsPage.defaultProps = {
    departments: null,
    isLoading: false,
};

export default DepartmentsPage;


