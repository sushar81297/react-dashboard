import { Avatar, Button, Col, Dropdown, Input, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";

interface Props {
  collapsed: boolean;
  themeColor: {
    primaryColor: string;
    secondaryColor: string;
    whiteColor: string;
  };
  setCollapsed: (arg0: boolean) => void;
}

export default function HeaderMenu({
  collapsed,
  themeColor,
  setCollapsed,
}: Props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <TeamOutlined />,
      label: <Link to="/profile">Profile</Link>,
    },
    {
      key: "2",
      icon: <LogoutOutlined />,
      label: <span onClick={handleLogout}>Logout</span>,
    },
  ];

  return (
    <>
      <Row style={{ padding: "16px", background: themeColor.whiteColor }}>
        <Col span={10}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              paddingTop: 0,
            }}
          />
        </Col>
        <Col span={6}>
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={8} style={{ direction: "rtl" }}>
          <Row>
            <Col span={4}>
              <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
