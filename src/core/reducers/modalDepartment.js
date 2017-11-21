import { TRIGGER } from '../constants';

const initState = {
    visible: false,
};

export const modalDepartment = (state = initState, action) => {
    switch (action.type) {
        case TRIGGER:
            return { visible: !state.visible, id: action.departmentId };
        default:
            return state;
    }
};
