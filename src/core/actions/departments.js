import { ADD_DEPARTMENT, ADD_DEPARTMENTS, EDIT_DEPARTMENT, DELETE_DEPARTMENT } from '../constants';

export const addDepartments = departments => ({
    type: ADD_DEPARTMENTS,
    departments,
});

export const addDepartment = department => ({
    type: ADD_DEPARTMENT,
    department,
});

export const deleteDepartment = id => ({
    type: DELETE_DEPARTMENT,
    id,
});
export const editDepartment = (id, department) => ({
    type: EDIT_DEPARTMENT,
    id,
    department,
});
