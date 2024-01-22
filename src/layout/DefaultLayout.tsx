import { Layout } from 'antd';
import SidebarNav from '@components/SidebarNav';
import HeaderMenu from '@components/HeaderMenu';
const { Content } = Layout;

export default function Main({children} : any) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarNav />
      <Layout className="site-layout">
        <HeaderMenu />
        <Content style={{ margin: '16px' }}>
          <div style={{ background: '#fff', color: '#000', padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout >
  );
}