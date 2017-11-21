import { connect } from 'react-redux';
import { ModalDepartment } from '../../components';
import { toggleModal } from '../../core/actions';

const mapStateToProps = (state, props) => ({
    data: state.departments,
    visible: state.toggleModal.visible,
    id: state.toggleModal.id
});

const mapDispatchToProps = (dispatch, props) => ({
    onCancel: () => dispatch(toggleModal()),
    create: department => dispatch({type: 'PUT_DEPARTMENT', department}),
    edit: (id, department) => dispatch({type: 'ED_DEPARTMENT', id, department}),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalDepartment);