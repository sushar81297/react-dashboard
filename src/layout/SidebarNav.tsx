
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { useLocation, Link } from 'react-router-dom';
import logoImg from '@assets/images/logo.png';
import {
  HomeOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  UserAddOutlined
} from '@ant-design/icons';

interface Props {
  collapsed: boolean;
}

export default function Sidebar({collapsed} : Props) {
  let openkeys = useLocation().pathname;
  let pathname = useLocation().pathname;
  if (pathname.split('/').length > 2) {
    openkeys = `/${pathname.split('/')[1]}`;
    pathname = `/${pathname.split('/')[2]}`;
  }

  const menuItems = [
    { key: '/home', icon: <HomeOutlined style={{fontSize: '20px'}} type="setting"  />, label: <Link to="/home">Home</Link> },
    { key: '/user', icon:<UserOutlined style={{fontSize: '20px'}} type="setting" />, label: <Link to="/user">Manage User</Link>,
      children: [
        { key: '/add', icon: <UserAddOutlined />, label: <Link to="/user/add">Create</Link>},
      ]
    },
    { key: '/item', icon: <AppstoreOutlined style={{fontSize: '20px'}} type="setting" />, label: <Link to="/item">Manage Item</Link>, 
    children: [
      { key: '/create', icon: <AppstoreAddOutlined />, label: <Link to="/item/create">Create</Link>},
    ]
   }
  ];
  return (
    // <Sider breakpoint="lg" width={250} style={{ background: '#1F3F49'}} collapsedWidth="0" collapsible collapsed={collapsed}>
    <Sider breakpoint="lg" width={250} style={{ background: '#1F3F49'}} collapsible collapsed={collapsed}>
      <div className="logo">
        <img src={logoImg} width={collapsed ? '80px' : '120px'} />
      </div>
      <Menu 
        theme="light" 
        defaultOpenKeys={[openkeys]}
        defaultSelectedKeys={[pathname]} 
        mode="inline" 
        style={{padding: '10px', background: '#1F3F49', color: '#ffffff'}}
        items={menuItems} />
    </Sider>
  );
}