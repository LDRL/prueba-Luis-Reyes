import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'
import axios from 'axios'
const Modal = ({ setModal, animarModal, setAnimarModal, editEmployee, setEditEmployee }) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [salarioBase, setSalarioBase] = useState(0)
    const [horaTrabajada, setHoraTrabajada] = useState('')

    const [id, setId] = useState('')

    useEffect(() => {
        if (Object.keys(editEmployee).length > 0) {
            setNombre(editEmployee.nombre);
            setCantidad(editEmployee.salarioBase);
            setCategoria(editEmployee.horaTrabajada);
            setId(editEmployee.id);
        }
    }, []);

    const ocultarModal = () => {
        setAnimarModal(false)
        setEditEmployee({})

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if ([nombre, salarioBase, horaTrabajada].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }

        axios.post('http://127.0.0.1:8000/api/empleados/', {
            nombre: nombre,
            salario_base: salarioBase,
            horas_trabajadas: horaTrabajada

        }).then(response => response.data)

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
                <legend>{editEmployee.nombre ? 'Editar Empleado' : 'Nuevo Empleado'}</legend>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Empleado</label>

                    <input
                        id="nombre"
                        type="text"
                        placeholder='Añade el nombre del gasto'
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
                    <label htmlFor="horatrabajada">Salario Base</label>

                    <input
                        id="horatrabajada"
                        type="number"
                        placeholder='Agregar la horas trabajadas'
                        value={horaTrabajada}
                        onChange={e => setHoraTrabajada(Number(e.target.value))}
                    />
                </div>



                <input type="submit"
                    value={editEmployee.nombre ? 'Editar gasto' : 'Añadir gasto'} />
            </form>
        </div>
    )
}

export default Modal