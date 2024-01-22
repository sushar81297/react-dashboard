import '@scss/_header.scss';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarNav from '@layout/SidebarNav';

export default function Sidebar() {
    const [showMenu, setShowMenu] = useState(true);
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 1200) setShowMenu(false);
            else setShowMenu(true);
        });
    });
    return (
        <>
            <div className="header-container">
                <SidebarNav showMenu={showMenu} />
                <div className="header-menu">
                    <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </div>
            </div>
        </>
    );
}