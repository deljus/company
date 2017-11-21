import { connect } from 'react-redux';
import { ModalEmployees } from '../../components';
import { toggleModal } from '../../core/actions';

const mapStateToProps = (state, props) => ({
    employees: state.employees,
    departments: state.departments,
    visible: state.toggleModal.visible,
    id: state.toggleModal.id
});

const mapDispatchToProps = (dispatch, props) => ({
    onCancel: () => dispatch(toggleModal()),
    create: employee => dispatch({type: 'PUT_EMPLOYEE', employee}),
    edit: (id, employee) => dispatch({type: 'ED_EMPLOYEE', id, employee}),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalEmployees);