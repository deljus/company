import { compose } from 'redux';
import { connect } from 'react-redux';
import { ModalEmployees } from '../../components';
import { modalDepartment } from '../../core/actions';

const mapStateToProps = (state, props) => ({
    employees: state.employees,
    departments: state.departments,
    visible: state.modalDepartment.visible,
    id: state.modalDepartment.id
});

const mapDispatchToProps = (dispatch, props) => ({
    onCancel: () => dispatch(modalDepartment()),
    create: employee => dispatch({type: 'PUT_EMPLOYEE', employee}),
    edit: (id, employee) => dispatch({type: 'ED_EMPLOYEE', id, employee}),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(ModalEmployees);