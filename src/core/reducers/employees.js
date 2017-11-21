import { ADD_EMPLOYEES, ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE } from '../constants';

export const employees = (state = [], action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return [
                {
                    ...action.employee,
                },
                ...state,
            ];

        case ADD_EMPLOYEES:
            return action.employees;

        case EDIT_EMPLOYEE:
            return state.map(department =>
                (department.id === action.id ?
                    { ...department, ...action.employee } :
                    department),
            );

        case DELETE_EMPLOYEE:
            return  state.filter(apple =>
                apple.id !== action.id,
            );

        default:
            return state;
    }
};