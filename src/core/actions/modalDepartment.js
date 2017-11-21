import { TRIGGER } from '../constants';

export const toggleModal = (departmentId) => ({
    type: TRIGGER, departmentId
});