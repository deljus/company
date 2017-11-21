import { connect } from 'react-redux';
import { toggleModal } from '../../core/actions';
import EmployeesPage from './EmployeesPage';
import { employeeSelectors } from '../../core/selector'

const mapStateToProps = (state, props) => ({
    employees: employeeSelectors(state),
});

const mapDispatchToProps = (dispatch, props) => ({
    editEmployee: id => dispatch(toggleModal(id)),
    openModal: () => dispatch(toggleModal()),
    getEmployees: () => dispatch({type: 'GET_EMPLOYEES'}),
    deleteEmployee: id => dispatch({type: 'DEL_EMPLOYEE', id}),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesPage);