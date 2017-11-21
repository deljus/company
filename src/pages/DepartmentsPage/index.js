import { compose } from 'redux';
import { connect } from 'react-redux';
import { modalDepartment } from '../../core/actions';
import DepartmentsPage from './DepartmentsPage';

const mapStateToProps = (state, props) => ({
    departments: state.departments,
});

const mapDispatchToProps = (dispatch, props) => ({
    editDepartment: id => { dispatch(modalDepartment(id))},
    openModal: () => dispatch(modalDepartment()),
    addAllDepartments: () => dispatch({type: 'GET_DEPARTMENTS'}),
    deleteDepartment: id => dispatch({type: 'DEL_DEPARTMENT', id}),
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsPage);