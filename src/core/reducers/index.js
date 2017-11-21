import { combineReducers } from 'redux';
import { departments } from './departments';
import { employees } from './employees';
import { toggleModal } from './toggleModal'

export const reducer = combineReducers({
    toggleModal,
    departments,
    employees
});