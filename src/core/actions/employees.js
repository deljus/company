import { ADD_EMPLOYEES, ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE } from '../constants';

export const addEmployees = employees => ({
    type: ADD_EMPLOYEES,
    employees,
});

export const addEmployee = employee => ({
    type: ADD_EMPLOYEE,
    employee,
});

export const deleteEmployee = id => ({
    type: DELETE_EMPLOYEE,
    id,
});
export const editEmployee = (id, employee) => ({
    type: EDIT_EMPLOYEE,
    id,
    employee,
});