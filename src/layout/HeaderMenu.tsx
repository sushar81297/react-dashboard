import { Avatar, Breadcrumb, Button, Col, Dropdown, Input, Row } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  setCollapsed: (arg0: boolean) => void;
}

export default function HeaderMenu({ collapsed, setCollapsed }: Props) {
  const navigate = useNavigate();
  const pathname = useLocation().pathname.split("/")[1];
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
      <Row style={{ padding: "16px", background: "#ffffff" }}>
        <Col span={10}>
          <Breadcrumb
            items={[
              { title: <Link to="/home">Home</Link> },
              { title: pathname },
            ]}
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
            <Col span={4}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  paddingTop: 0,
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
