import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Alert from '../../components/Alert'
import clientAxios from '../../config/ClientAxios'
import useAuth from '../../hooks/useAuth'
import "./Login.css";

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState({})

    const { setAuth } = useAuth()

    const navigate = useNavigate()


    const handleSubmit = async e => {
        e.preventDefault();

        if ([userName, password].includes('')) {
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }

        try {
            const user = {
                email: userName,
                password: password
            }

            const { data } = await clientAxios.post('/jwt/create/', user)
            setAlert({})
            localStorage.setItem('token', data.access)           
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }

        const token = localStorage.getItem("token");
        console.log(token);

        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
        }

        try {
            const { data } = await clientAxios.get("/users/me/", config);
            console.log(data)
            setAuth(data);
            navigate("/home");
        } catch (error) {
            setAuth({});
        }
    }

    const { msg } = alert

    return (
        <>
            <div className='screen'>
                <div className='screen__content'>
                    <h1 className='form-title'>
                        Inicia sesión
                    </h1>


                    {msg && <Alert alert={alert} />}

                    <form
                        className="form-signin"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-signin__content">
                            <label className="form-signin__text"
                                htmlFor="username">
                                User Name
                            </label>
                            <input id="username" type="text"
                                placeholder="Usuario de registro"
                                className="inp"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div>

                        <div className="form-signin__content">
                            <label className="form-signin__text"
                                htmlFor="password">
                                Contraseña
                            </label>
                            <input id="password" type="password"
                                placeholder="Contraseña de registro"
                                className="inp"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <input type="submit"
                            value="Iniciar Sesión"
                            className="button button__submit"
                        />
                    </form>



                    <nav className="nav">
                        <Link
                            className="nav__link
                        block text-center my-5 text-slate-500 uppercase text-sm"
                            to="registrar">
                            ¿No tienes una cuenta ? Regístrate
                        </Link>

                        <Link
                            className="nav__link"
                            to="olvide-password">
                            Olvide mi contraseña
                        </Link>
                    </nav>

                </div>
            </div>


        </>
    )
}

export default Login
