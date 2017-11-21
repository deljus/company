import { compose } from 'redux';
import { connect } from 'react-redux';
import { modalDepartment } from '../../core/actions';
import EmployeesPage from './EmployeesPage';
import { employeeSelectors } from '../../core/selector'

const mapStateToProps = (state, props) => ({
    employees: employeeSelectors(state),
});

const mapDispatchToProps = (dispatch, props) => ({
    editEmployee: id => { dispatch(modalDepartment(id))},
    openModal: () => dispatch(modalDepartment()),
    getEmployees: () => dispatch({type: 'GET_EMPLOYEES'}),
    deleteEmployee: id => dispatch({type: 'DEL_EMPLOYEE', id}),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(EmployeesPage);