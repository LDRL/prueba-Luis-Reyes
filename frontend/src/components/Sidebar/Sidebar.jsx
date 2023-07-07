import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import classNames from "classnames";

import { SidebarData } from "../SidebarData";
import SubMenu from "../Submenu/SubMenu";

import "./Sidebar.css";


const Sidebar = ({menuCollapse}) => {

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className={classNames("sidebar", `${menuCollapse ? "" : "close"}`)} >
                    <div className="logo-details">
                        <i className="bx"> <AiIcons.AiFillCopyrightCircle /></i>

                        <span className="logo_name">BACLDR</span>
                    </div>

                    <ul className="nav-links">
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </ul>
                </div>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;