import { ADD_DEPARTMENT, ADD_DEPARTMENTS, EDIT_DEPARTMENT, DELETE_DEPARTMENT } from '../constants';

export const departments = (state = [], action) => {
    switch (action.type) {
        case ADD_DEPARTMENT:
            return [
                {
                    ...action.department
                },
                ...state,
            ];

        case ADD_DEPARTMENTS:
            return action.departments;

        case EDIT_DEPARTMENT:
            return state.map(department =>
                (department.id === action.id ?
                    { ...department, ...action.department } :
                    department),
            );

        case DELETE_DEPARTMENT:
            return  state.filter(apple =>
                apple.id !== action.id,
            );

        default:
            return state;
    }
};