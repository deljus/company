import { Employees, Departments } from '../API';
import { put, call } from 'redux-saga/effects';
import { message } from 'antd';
import { addEmployees, addEmployee, editEmployee, deleteEmployee } from '../actions';


export function* getAllEmployeesQuery(action) {
    try{
        const responseEmpl = yield call(Employees.getAll,action);

        yield put({type: 'GET_DEPARTMENTS'});
        yield put(addEmployees(responseEmpl.data));
    }
    catch(error) {
        message.error("Не удалось взять данные");
    }
}

export function* addEmployeeQuery(action) {
    try{
        const response = yield call(Employees.add, action.employee);
        yield put(addEmployee(response.data));
    }
    catch(error) {
        message.error("Не удалось добавить данные");
    }
}

export function* delEmployeesQuery(action) {
    try{
        const response = yield call(Employees.delete, action.id);
        yield put(deleteEmployee(action.id));
    }
    catch(error) {
        message.error("Не удалось удалить выбранные данные");
    }
}

export function* editEmployeesQuery(action) {
    try{
        const response = yield call(Employees.edit, action.id, action.employee);
        yield put(editEmployee(action.id,response.data));
    }
    catch(error) {
        message.error("Не удалось редактировать данные");
    }
}