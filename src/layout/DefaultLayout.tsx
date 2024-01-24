import { ReactNode, useEffect, useState } from "react";

import HeaderMenu from "./HeaderMenu";
import { Layout } from "antd";
import SidebarNav from "./SidebarNav";

const { Content } = Layout;

interface Props {
  children: ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth < 992) setCollapsed(true);
    else setCollapsed(false);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) setCollapsed(true);
      else setCollapsed(false);
    });
  }, []);
  return (
    <Layout style={{ minHeight: "97vh" }}>
      <SidebarNav collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderMenu collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content style={{ margin: "16px" }}>
          <div className="content-container">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
