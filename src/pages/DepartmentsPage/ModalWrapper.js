import { compose } from 'redux';
import { connect } from 'react-redux';
import { ModalDepartment } from '../../components';
import { modalDepartment } from '../../core/actions';

const mapStateToProps = (state, props) => ({
    data: state.departments,
    visible: state.modalDepartment.visible,
    id: state.modalDepartment.id
});

const mapDispatchToProps = (dispatch, props) => ({
    onCancel: () => dispatch(modalDepartment()),
    create: department => dispatch({type: 'PUT_DEPARTMENT', department}),
    edit: (id, department) => dispatch({type: 'ED_DEPARTMENT', id, department}),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(ModalDepartment);