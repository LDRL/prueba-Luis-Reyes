import clientAxios from "../config/ClientAxios";

const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export function getEmployees() {
  return clientAxios
    .get("http://127.0.0.1:8000/api/empleados/", config)
    .then((response) => response.data);
}

export const getEmployee = (id) => clientAxios.get(`empleados/${id}/`, config);

export const createEmployee = (employee) =>
  clientAxios.post("/empleados/", employee, config);

export const updateEmployee = (id, employee) =>
  clientAxios.put(`/empleados/${id}/`, employee, config);
