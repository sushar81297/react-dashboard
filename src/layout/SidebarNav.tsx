import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <div className={showMenu ? 'menu-container' : 'menu-close-container'}>
                <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
                    <FontAwesomeIcon icon="bars" />
                </button>
                <ul className="side-menu">
                    <li className="menu-active"><FontAwesomeIcon icon="check-square" className="menu-icon" />{showMenu && 'Home'}</li>
                    <li><FontAwesomeIcon icon="coffee" className="menu-icon" />{showMenu && 'About'}</li>
                    <li><FontAwesomeIcon icon="coffee" className="menu-icon" />{showMenu && 'Profile'}</li>
                </ul>
            </div >
        </>
    );
}
