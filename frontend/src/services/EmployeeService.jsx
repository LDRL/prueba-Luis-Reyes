import axios from 'axios';

export function getEmployees() {
  return axios.get('http://127.0.0.1:8000/api/empleados/')
    .then(response => response.data)
}