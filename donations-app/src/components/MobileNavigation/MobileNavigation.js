import React, {useState} from "react";
import "./MobileNavigation.scss";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData/SidebarData";

export const MobileNavigation = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <GoThreeBars className="menu-bars--icon" onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#">
                            <AiOutlineClose className="menu-close--icon" onClick={showSidebar} />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}><Link to={item.path}>{item.title}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}