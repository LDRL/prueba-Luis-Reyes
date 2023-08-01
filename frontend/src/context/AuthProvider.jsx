import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clientAxios from "../config/ClientAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Todo cambiar a ingles

    const authenticatedUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }

      try {
        const { data } = await clientAxios.get("/users/me/", config);
        setAuth(data);
        navigate("/home");
      } catch (error) {
        setAuth({});
      } finally {
        setLoading(false);
      }
    };

    authenticatedUser();
  }, [])

  const logoutAuth = () => {
    setAuth({})
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        logoutAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
