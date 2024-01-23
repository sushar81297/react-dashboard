import { ReactNode, useState } from "react";
import { Layout } from 'antd';
import SidebarNav from './SidebarNav';
import HeaderMenu from './HeaderMenu';
const { Content } = Layout;

interface Props {
  children: ReactNode
}

export default function DefaultLayout({children}: Props) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Layout style={{ minHeight: '97vh' }}>
      <SidebarNav collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderMenu collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Content style={{ margin: '16px' }}>
          <div style={{ color: '#fff', padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout >
  );
}