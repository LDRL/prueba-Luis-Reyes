import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'
import { getEmployee, createEmployee, updateEmployee } from '../services/EmployeeService'
import { ToastContainer,toast } from 'react-toastify'


import { styled } from 'styled-components'
const Modal = ({ setModal, animarModal, setAnimarModal, id, setId, employees, setEmployees }) => {

    const [mensaje, setMensaje] = useState('')
    // const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [salarioBase, setSalarioBase] = useState(0)
    const [horaTrabajada, setHoraTrabajada] = useState(0)

    useEffect(() => {
        console.log(id);
        async function loadEmployee() {
            if (id) {
                const { data } = await getEmployee(id);
                setNombre(data.nombre)
                setSalarioBase(data.salario_base)
                setHoraTrabajada(data.horas_trabajadas)
                console.log(data);
            }
        }
        loadEmployee();

    }, []);

    const ocultarModal = () => {
        setAnimarModal(false)
        setId("")
        //setEditEmployee({})

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        if ([nombre, salarioBase, horaTrabajada].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }

        const employee = {
            nombre: nombre,
            salario_base: salarioBase,
            horas_trabajadas: horaTrabajada
        }

        if (id) {
            const result = await updateEmployee(id, employee)
            const UpdatesEmployee = employees.map(employeeState => employeeState.id === result.data.id ? result.data : employeeState);
            setEmployees(UpdatesEmployee);

            toast.success("Empleado actualizado",{
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            })
        } else {
            const resul = await createEmployee(employee);
            setEmployees([...employees, resul.data])
        }

        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>{id ? 'Editar Empleado' : 'Nuevo Empleado'}</legend>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Empleado</label>

                    <input
                        id="nombre"
                        type="text"
                        placeholder='Añade el nombre del empleado'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="salariobase">Salario Base</label>

                    <input
                        id="salariobase"
                        type="number"
                        placeholder='Agregar salario base'
                        value={salarioBase}
                        onChange={e => setSalarioBase(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="horatrabajada">Horas trabajadas</label>
                    <input
                        id="horatrabajada"
                        type="number"
                        placeholder='Agregar la horas trabajadas'
                        value={horaTrabajada}
                        onChange={e => setHoraTrabajada(Number(e.target.value))}
                    />
                </div>

                <input type="submit"
                    value={id ? 'Editar gasto' : 'Añadir gasto'} />
            </form>
        </div>
    )
}

export default Modal