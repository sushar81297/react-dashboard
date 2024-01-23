
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { useLocation, Link } from 'react-router-dom';
import logoImg from '@assets/images/logo.png';

import {
  ApartmentOutlined,
  HomeOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  UserAddOutlined
} from '@ant-design/icons';

export default function Sidebar() {
  let openkeys = useLocation().pathname;
  let pathname = useLocation().pathname;
  if (pathname.split('/').length > 2) {
    openkeys = `/${pathname.split('/')[1]}`;
    pathname = `/${pathname.split('/')[2]}`;
  }

  const menuItems = [
    { key: '', icon: <img src={logoImg} width='50px' />, label: 'Happy' },
    { key: '/home', icon: <HomeOutlined />, label: <Link to="/home">Home</Link> },
    { key: '/user', icon:<UserOutlined />, label: <Link to="/user">Manage User</Link>,
      children: [
        { key: '/create', icon: <UserAddOutlined />, label: <Link to="/user/create">Create</Link>},
      ]
    },
    { key: '/item', icon: <AppstoreOutlined />, label: <Link to="/item">Manage Item</Link>, 
    children: [
      { key: '/create', icon: <AppstoreAddOutlined />, label: <Link to="/item/create">Create</Link>},
    ]
   }
  ];
  return (
    <Sider breakpoint="lg" style={{ background: '#ffffff' }} collapsedWidth="0">
      <div className="logo" />
      <Menu 
        theme="light" 
        defaultOpenKeys={[openkeys]}
        defaultSelectedKeys={[pathname]} 
        mode="inline" 
        items={menuItems} />
    </Sider>
  );
}