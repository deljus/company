import { TRIGGER } from '../constants';

export const modalDepartment = (departmentId) => ({
    type: TRIGGER, departmentId
});