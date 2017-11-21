import { createSelector } from 'reselect';

export const employeeSelectors = createSelector(
    state => state.employees,
    state => state.departments,
    ( employees, departments ) => employees.map(employee => {
        return { ...employee,
            department: departments.filter( dep => dep.id === employee.departmentId )[0]
        }
    })
);