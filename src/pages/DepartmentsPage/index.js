import { connect } from 'react-redux';
import { toggleModal } from '../../core/actions';
import DepartmentsPage from './DepartmentsPage';

const mapStateToProps = (state, props) => ({
    departments: state.departments,
});

const mapDispatchToProps = (dispatch, props) => ({
    editDepartment: id => dispatch(toggleModal(id)),
    openModal: () => dispatch(toggleModal()),
    addAllDepartments: () => dispatch({type: 'GET_DEPARTMENTS'}),
    deleteDepartment: id => dispatch({type: 'DEL_DEPARTMENT', id}),
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsPage);