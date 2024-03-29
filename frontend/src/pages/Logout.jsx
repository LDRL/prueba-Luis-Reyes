import { useEffect, useState } from "react"
import axios from "axios";
export const Logout = () => {
    useEffect(() => {
        (async () => {
            try {
                const { data } = await
                    axios.post('http://localhost:8000/api/logout/', {
                        refresh_token: localStorage.getItem('refresh_token')
                    }, { headers: { 'Content-Type': 'application/json' } },
                        { withCredentials: true });
                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                window.location.href = '/login'
            } catch (e) {
                console.log('logout not working', e)
            }
        })();
    }, []);
    return (
        <div></div>
    )
}

export default Logout

// https://medium.com/@ronakchitlangya1997/jwt-authentication-with-react-js-and-django-c034aae1e60d