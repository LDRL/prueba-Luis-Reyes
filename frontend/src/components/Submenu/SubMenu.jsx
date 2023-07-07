
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./SubMenu.css";




const SidebarLabel = styled.span`
    font-size: 18px;
    display: block;
`;

const DropdownLink = styled(Link)`
    
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <li className={`${subnav ? "showMenu" : ""}`}>
        <div className="iocn-link">

          <Link to={item.path}
            onClick={item.subNav && showSubnav}
          >
            <i className="bx">{item.icon}</i>

            <span className="link_name">{item.title}</span>

          </Link>
          <i className="bx arrow">
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
                ? item.iconClosed
                : null}
          </i>

        </div>

        {item.subNav ? <ul className="sub-menu">
          {
            item.subNav.map((item, index) => {
              return (
                <li key={index}>
                  <DropdownLink to={item.path} key={index}>
                    <SidebarLabel>{item.title}</SidebarLabel>
                  </DropdownLink>
                </li>
              );
            })}
        </ul> : ''}

      </li>
    </>
  );
};

export default SubMenu;