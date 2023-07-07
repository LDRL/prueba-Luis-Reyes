import styles from "./Wrapper.module.css";
import classNames from "classnames";
import * as FaIcons from "react-icons/fa";
import { Outlet } from "react-router";

const Wrapper = ({
    menuIconClick,
    menuCollapse
}) => {
    return (
        <div id="page-wrapper" className={classNames(styles["gray-bg"], `${menuCollapse ? styles["dashbard"] : styles["dashbard-min"]}`)}>
            <div className={classNames(styles["row"], styles["border-bottom"])}>

                <nav className={classNames(styles["navbar"], styles["navbar-static-top"])}
                    role="navigation" >
                    <div className={styles["navbar-header"]}>
                        <div className={styles["navIcon"]} onClick={menuIconClick}>
                            <FaIcons.FaBars />
                        </div>
                    </div>

                    <ul className={classNames(styles["nav"], styles["navbar-top-links"], styles["navbar-right"])}>
                        <li className={styles["dropdown"]}>
                            <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                <i className="fa fa-envelope"></i><span className="label label-warning"></span>
                            </a>
                          
                        </li>

                        <li>
                            <a href="#">
                                <FaIcons.FaOutdent />
                                Cerrar Sesion
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>


            <div className={classNames(styles["wrapper"], `${menuCollapse ? styles["wrapper-content"] : styles["wrapper-content-min"]}`)} >
                <Outlet />
            </div>
        </div>
    )
}

export default Wrapper;