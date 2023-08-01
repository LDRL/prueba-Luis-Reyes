import React, { useEffect, useState } from 'react';
import { getEmployees, getEmployee } from '../../services/EmployeeService';
import Modal from '../Modal';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Employees = () => {
    const [option, setOption] = useState(false)
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)

    const [employees, setEmployees] = useState([]);
    const [editEmployee, setEditEmployee] = useState([]);
    const [id, setId] = useState('')


    useEffect(() => {
        let mounted = true;
        getEmployees()
            .then(data => {
                if (mounted) {
                    setEmployees(data)
                }
            })
        return () => mounted = false;
    }, [])

    const handleNewEmployee = () => {
        setModal(true)

        setTimeout(() => {
            setAnimarModal(true)
        }, 500);
    }

    const handleUpdate = (e, employee) => {
        e.preventDefault();

        setId(employee);

        setModal(true);

        setTimeout(() => {
            setAnimarModal(true)
        }, 500);
    }

    const handdleDelete = id => {

    }

    

    return (
        <div className="container-fluid side-container">
            <div className='nuevo'>
                <button type='buton'
                    onClick={handleNewEmployee}
                >Nuevo </button>
            </div>

            <div className="row side-row" >
                <table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Salario base</th>
                            <th>Horas trabajas</th>
                            <th>Actión</th>

                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((stu) =>
                            <tr key={stu.id}>
                                <td>{stu.id}</td>
                                <td>{stu.nombre}</td>
                                <td>{stu.salario_base}</td>
                                <td>{stu.horas_trabajadas}</td>

                                <td>
                                    <button
                                        type="button"
                                        onClick={event => handleUpdate(event, stu.id)}
                                    >
                                        Editar
                                    </button>

                                    <span>&nbsp;&nbsp;&nbsp;</span>
                                    <button
                                        type='button'
                                        onClick={event => handdleDelete(event, stu)}>
                                        Eliminar
                                    </button>
                                </td>

                            </tr>)}
                    </tbody>
                </table>
            </div>

            <ToastContainer />

            {modal && <Modal
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                id={id}
                setId={setId}
                employees = {employees}
                setEmployees = {setEmployees}
            />
            }
        </div>
    );
};

export default Employees;