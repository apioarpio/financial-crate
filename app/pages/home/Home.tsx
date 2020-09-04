import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Link, Route, Switch } from 'react-router-dom';
import './Home.css';
import CustomerIndexPage from '../customer/customerIndex/CustomerIndex';
import AdditiveIndexPage from '../additive/additive-index/AdditiveIndex';
import AdditiveCreate from '../additive/additive-create/AdditiveCreate';

const { Header, Content, Footer, Sider } = Layout;

export default function Home(): JSX.Element {

  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined/>}>
            <Link to='/customer'>Cliente</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined/>}>
            <Link to='/additive/index'>Aditivo</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed)
            })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <Switch>
            <Route path="/customer" component={CustomerIndexPage}/>
            <Route path="/additive/index" component={AdditiveIndexPage}/>
            <Route path='/additive/create' component={AdditiveCreate}/>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Task Crate ©2020 Created by Apioarpio Ferreira</Footer>
      </Layout>
    </Layout>
  );
}
