import axios from 'axios';
import { API } from '../../config'


class Departments {

    static getAll(){
        return axios.get(API.DEPARTMENTS);
    }

    static add(name){
        return axios.post(API.DEPARTMENTS, {name});
    }

    static delete(id){
        return axios.delete(`${API.DEPARTMENTS}/${id}`);
    }

    static edit(id, name){
        return axios.put(`${API.DEPARTMENTS}/${id}`, {name});
    }
}

export default Departments;