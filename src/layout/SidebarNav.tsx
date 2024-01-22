
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from '@assets/images/logo.png';

export default function Sidebar({ showMenu }: boolean) {
    return (
        <>
            <div className={showMenu ? 'menu-container' : 'menu-close-container'}>
                <div className="menu-logo">
                    <img src={logoImg} /> <span>{showMenu && 'Happy Shop'}</span>
                </div>
                <ul className="side-menu">
                    <li className="menu-active"><FontAwesomeIcon icon="check-square" className="menu-icon" />{showMenu && 'Home'}</li>
                    <li><FontAwesomeIcon icon="coffee" className="menu-icon" />{showMenu && 'About'}</li>
                    <li><FontAwesomeIcon icon="coffee" className="menu-icon" />{showMenu && 'Profile'}</li>
                </ul>
            </div >
        </>
    );
}
