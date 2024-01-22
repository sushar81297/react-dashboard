
import logoImg from '@assets/images/logo.png';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
import {
  ApartmentOutlined,
  HomeOutlined,
  FileOutlined,
  TeamOutlined,
} from '@ant-design/icons';

export default function Sidebar() {
  const menuItems = [
    { key: '0', icon: <img src={logoImg} width='50px' />, label: 'Happy' },
    { key: '1', icon: <HomeOutlined />, label: <Link to="/home">Home</Link> },
    { key: '2', icon: <ApartmentOutlined />, label: <Link to="/about">About</Link> },
    { key: '3', icon: <TeamOutlined />, label: <Link to="/profile">Profile</Link> },
    { key: '4', icon: <FileOutlined />, label: <Link to="/item">Item</Link> },
  ];
  return (
    <Sider breakpoint="lg" style={{ background: '#ffffff' }} collapsedWidth="0">
      <div className="logo" />
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
    </Sider>
  );
}