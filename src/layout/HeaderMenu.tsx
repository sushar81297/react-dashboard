import { Dropdown, Breadcrumb, Avatar, Col, Row, Input, Button } from 'antd';
import type { MenuProps } from 'antd';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { 
  UserOutlined, 
  TeamOutlined, 
  SearchOutlined, 
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
 } from '@ant-design/icons';

interface Props {
  collapsed: boolean;
  setCollapsed: (arg0: boolean) => void;
}

export default function HeaderMenu({collapsed, setCollapsed} : Props) {
  const navigate = useNavigate();
  const pathname = useLocation().pathname.split('/')[1];
  const handleLogout = () => {
    navigate('/');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <TeamOutlined />,
      label: <Link to="/profile">Profile</Link>
    },
    {
      key: '2',
      icon: <LogoutOutlined />,
      label: <span onClick={handleLogout}>Logout</span>
    }
  ];

  return (
    <>
      <Row style={{ padding: '16px', background: '#ffffff' }}>
        <Col span={12} md={14}><Breadcrumb items={[{ title: <Link to="/home">Home</Link> }, { title: pathname }]} /></Col>
        <Col span={12} md={6}>
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={12} md={3} style={{ direction: 'rtl' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              paddingTop: 0
            }}
          />
        </Col>
        <Col span={12} md={1} style={{ direction: 'rtl' }}>
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
          </Dropdown>
        </Col>
      </Row >
    </>
  );
}