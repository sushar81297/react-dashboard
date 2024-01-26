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
  const [showMenu, setShowMenu] = useState<boolean>(true);

  // Theme Color
  const primaryColor = "#1F3F49";
  const secondaryColor = "#488A99";
  const whiteColor = "#ffffff";

  // const primaryColor = "#A30962";
  // const secondaryColor = "#E6007E";
  // const whiteColor = "#ffffff";

  document.documentElement.style.setProperty("--primary-color", primaryColor);
  document.documentElement.style.setProperty(
    "--secondary-color",
    secondaryColor
  );
  document.documentElement.style.setProperty("--bg-color", whiteColor);

  const themeColor = {
    primaryColor,
    secondaryColor,
    whiteColor,
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", () => {
      handleWindowResize();
    });
    return window.removeEventListener("resize", () => {
      handleWindowResize();
    });
  }, []);

  const handleWindowResize = () => {
    if (window.innerWidth < 992) {
      setCollapsed(true);
      setShowMenu(false);
    } else {
      setCollapsed(false);
      setShowMenu(true);
    }
  };
  return (
    <Layout style={{ minHeight: "97vh" }}>
      <SidebarNav collapsed={collapsed} themeColor={themeColor} />
      <Layout className="site-layout">
        <HeaderMenu
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          showMenu={showMenu}
          themeColor={themeColor}
        />
        <Content style={{ margin: "16px" }}>
          <div className="content-container">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
