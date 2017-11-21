import axios from 'axios';
import { API } from '../../config'


class Employees {

    static getAll(){
        return axios.get(API.EMPLOYEES);
    }

    static add(name){
        return axios.post(API.EMPLOYEES, { ...name});
    }

    static delete(id){
        return axios.delete(`${API.EMPLOYEES}/${id}`);
    }

    static edit(id, name){
        return axios.put(`${API.EMPLOYEES}/${id}`, {...name});
    }
}

export default Employees;