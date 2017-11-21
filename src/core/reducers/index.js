import { combineReducers } from 'redux';
import { departments } from './departments';
import { employees } from './employees';
import { modalDepartment } from './modalDepartment'

export const reducer = combineReducers({
    modalDepartment,
    departments,
    employees
});