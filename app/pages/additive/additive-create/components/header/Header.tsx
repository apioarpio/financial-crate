import { PageHeader, Menu, Dropdown, Button, Row } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React from 'react';
import './header.css';

const menu = (

  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top'
          }}
        />
      </Button>
    </Dropdown>
  );
};

const routes = [
  {
    path: '/additive/index',
    breadcrumbName: 'Aditivo'
  },
  {
    path: '/additive/create',
    breadcrumbName: 'Cadastro de Aditivos'
  }
];

// @ts-ignore
const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text}/>
    {text}
  </a>
);

// @ts-ignore
const Content = ({ children, extraContent }) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};

export default function Header({ changeRoute, route }): JSX.Element {

  const routerParams = {
    createAddictive: {
      description: 'Informações do Aditivo',
      navigateButtonLabel: 'Adicionar Itens'
    },
    addItems: {
      description: 'Cadastro de Itens do Aditivo',
      navigateButtonLabel: 'Informações do Aditivo'
    }
  };

  const navigateAddictive = () => {
    if (route == 'createAddictive') {
      changeRoute('addItems');
    } else if (route === 'addItems') {
      changeRoute('createAddictive');
    }
  };

  return (
    <PageHeader
      title="Cadastro de Atidivo"
      className="site-page-header"
      // @ts-ignore
      subTitle={routerParams[route].description}
      // tags={<Tag color="blue">Running</Tag>}
      extra={[
        // <Button key="3">Operation</Button>,
        // <Button key="2">Operation</Button>,
        <Button key="1" type="primary" onClick={() => navigateAddictive()}>
          {routerParams[route].navigateButtonLabel}
        </Button>
        // <DropdownMenu key="more"/>
      ]}
      breadcrumb={{ routes }}
    >
    </PageHeader>
  );
}
