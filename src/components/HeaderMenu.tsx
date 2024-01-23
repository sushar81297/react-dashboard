import { Dropdown, Breadcrumb, Avatar, Col, Row, Input } from 'antd';
import type { MenuProps } from 'antd';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { UserOutlined, TeamOutlined, SearchOutlined, LogoutOutlined } from '@ant-design/icons';

export default function HeaderMenu() {
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
      <Row gutter={[24, 0]} style={{ padding: '5px 16px' }}>
        <Col span={24} md={6}> <Breadcrumb items={[{ title: <Link to="/home">Home</Link> }, { title: pathname }]} /></Col>
        <Col span={24} md={6}>
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={24} md={12} style={{ direction: 'rtl' }}>
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
          </Dropdown>
        </Col>
      </Row >
    </>
  );
}