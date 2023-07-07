import { useState } from "react";
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import React from "react"
import styled from 'styled-components';
import SidebarData from "./SidebarData";
import SubMenu from "./SubMenu";


const Sidebar = () => {

    const { auth } = useAuth()

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <aside className="md:w-80 lg:w-96 px-5 py-10">
             <Link
                 to="crear-producto"
                 className="bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg"
             >Nuevo
             </Link>
        </aside>
    )
}

export default Sidebar
