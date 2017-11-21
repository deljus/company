import { takeLatest } from 'redux-saga/effects';
import { getAllDepartmentsQuery, addDepartmentQuery, delDepartmentQuery, editDepartmentQuery,  } from "./department";
import { getAllEmployeesQuery, addEmployeeQuery, editEmployeesQuery, delEmployeesQuery  } from "./employee";

export function* sagas(){

    yield takeLatest('GET_DEPARTMENTS', getAllDepartmentsQuery);
    yield takeLatest('PUT_DEPARTMENT', addDepartmentQuery);
    yield takeLatest('DEL_DEPARTMENT', delDepartmentQuery);
    yield takeLatest('ED_DEPARTMENT', editDepartmentQuery);

    yield takeLatest('GET_EMPLOYEES', getAllEmployeesQuery);
    yield takeLatest('DEL_EMPLOYEE', delEmployeesQuery);
    yield takeLatest('PUT_EMPLOYEE', addEmployeeQuery);
    yield takeLatest('ED_EMPLOYEE', editEmployeesQuery);
}

