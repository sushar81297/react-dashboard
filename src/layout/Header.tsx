import '@scss/_header.scss';
import SidebarNav from '@layout/SidebarNav';

export default function Sidebar() {
    return (
        <>
            <div className="header-container">
                <SidebarNav />
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </>
    );
}