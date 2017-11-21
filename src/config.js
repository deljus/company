const BASE_API_URL = 'http://localhost:3001'

export const PAGES_URLS = {
    INDEX:       { NAME: 'Главная', URL: '/'},
    DEPARTMENTS: { NAME: 'Департаменты', URL: '/departments'},
    EMPLOYEES:   { NAME: 'Работники', URL: '/employees'}
};

export const API = {
    DEPARTMENTS: `${BASE_API_URL}/departments`,
    EMPLOYEES: `${BASE_API_URL}/employees`
};