import React, { useEffect, useState } from 'react';
import { getEmployees } from '../../services/EmployeeService';
import Modal from '../Modal';

const Employees = () => {
    const [option, setOption] = useState(false)
    const [modal, setModal] = useState(false)
	const [animarModal, setAnimarModal] = useState(false)

    const [employees, setEmployees] = useState([]);
    const [editEmployee, setEditEmployee] = useState([]);

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

    const handleUpdate = (e,employee) =>{
        e.preventDefault();
        setModal(true);
    }

	const handdleDelete = id => {
		
	}

    return (
        <div className="container-fluid side-container">
            <div className='nuevo-gasto'>
                <button type='buton'
                    onClick={handleNewEmployee}
                >Nuevo </button>
            </div>

            <div className="row side-row" >
                <p id="before-table"></p>
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
                                        onClick={event => handleUpdate(event, stu)}
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

            {modal && <Modal
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                editEmployee={editEmployee}
                setEditEmployee={setEditEmployee}
            />
            }
        </div>
    );
};

export default Employees;