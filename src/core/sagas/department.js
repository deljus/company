import { Departments } from '../API';
import { put, call } from 'redux-saga/effects';
import { message } from 'antd';
import { addDepartments, editDepartment, addDepartment, deleteDepartment } from '../actions';


export function* getAllDepartmentsQuery(action) {
    try{
        const response = yield call(Departments.getAll,action);
        yield put(addDepartments(response.data));
    }
    catch(error) {
        message.error("Не удалось взять данные");
    }
}

export function* addDepartmentQuery(action) {
    try{
        const response = yield call(Departments.add, action.department);
        yield put(addDepartment(response.data));
    }
    catch(error) {
        message.error("Не удалось добавить данные");
    }
}

export function* delDepartmentQuery(action) {
    try{
        const response = yield call(Departments.delete, action.id);
        yield put(deleteDepartment(action.id));
    }
    catch(error) {
        message.error("Не удалось удалить выбранные данные");
    }
}

export function* editDepartmentQuery(action) {
    try{
        const response = yield call(Departments.edit, action.id, action.department.name);
        yield put(editDepartment(action.id,response.data));
    }
    catch(error) {
        message.error("Не удалось редактировать данные");
    }
}