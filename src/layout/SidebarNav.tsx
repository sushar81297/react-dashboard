import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  HomeOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

import logoImg from "@assets/images/logo.png";

const { Sider } = Layout;

interface Props {
  collapsed: boolean;
}

export default function Sidebar({ collapsed }: Props) {
  let openkeys = useLocation().pathname;
  const pathname = useLocation().pathname;
  if (openkeys.split("/").length > 2) openkeys = `/${openkeys.split("/")[1]}`;
  openkeys = `${openkeys}tag`;

  const menuItems = [
    {
      key: "/home",
      icon: <HomeOutlined style={{ fontSize: "20px" }} type="setting" />,
      label: <Link to="/home">Home</Link>,
    },
    {
      key: "/usertag",
      icon: <UserAddOutlined style={{ fontSize: "20px" }} type="setting" />,
      label: "Manage User",
      children: [
        {
          key: "/user",
          icon: <UserAddOutlined />,
          label: <Link to="/user">Users</Link>,
        },
        {
          key: "/user/create",
          icon: <UserAddOutlined />,
          label: <Link to="/user/create">Create</Link>,
        },
      ],
    },
    {
      key: "/itemtag",
      icon: <AppstoreOutlined style={{ fontSize: "20px" }} type="setting" />,
      label: "Manage Item",
      children: [
        {
          key: "/item",
          icon: <AppstoreOutlined />,
          label: <Link to="/item">Items</Link>,
        },
        {
          key: "/item/create",
          icon: <AppstoreAddOutlined />,
          label: <Link to="/item/create">Create</Link>,
        },
      ],
    },
  ];
  return (
    // <Sider breakpoint="lg" width={250} style={{ background: '#1F3F49'}} collapsedWidth="0" collapsible collapsed={collapsed}>
    <Sider
      breakpoint="lg"
      width={250}
      style={{ background: "#1F3F49" }}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo">
        <img src={logoImg} width={collapsed ? "80px" : "120px"} />
      </div>
      <Menu
        theme="light"
        defaultOpenKeys={[openkeys]}
        defaultSelectedKeys={[pathname]}
        mode="inline"
        style={{ padding: "10px", background: "#1F3F49", color: "#ffffff" }}
        items={menuItems}
      />
    </Sider>
  );
}
