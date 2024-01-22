import { useState } from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import { Button } from 'antd';
import Sidebar from '@layout/Sidebar';

export default function App() {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <div style={{ width: 256 }}>
                <Sidebar collapsed={collapsed} />
            </div >
        </>
    );
}