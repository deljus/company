import { createSelector } from 'reselect';

export const employeeSelectors = createSelector(
    state => state.departments,
    state => state.employees,
    ( departments, employees ) => employees.map(employee => {
        return { ...employee,
            departmentName: "11111"
        }
    })
);