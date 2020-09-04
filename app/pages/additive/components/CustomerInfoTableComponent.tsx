import { Col, Row, List } from 'antd';
import React from 'react';

export default function CustomerInfoTableComponent(): JSX.Element {

  const data = [
    { key: 1, label: 'Chaques Negociados', quantity: 0, value: 0 },
    { key: 2, label: 'Duplicatas Negociadas', quantity: 0, value: 0 },
    { key: 3, label: 'Total Valor Negociado', quantity: 0, value: 0 },
    { key: 4, label: 'Cheques em aberto', quantity: 0, value: 0 },
    { key: 5, label: 'Total Valor em aberto', quantity: 0, value: 0 },
    { key: 6, label: 'Cheques Devolvidos', quantity: 0, value: 0 },
    { key: 7, label: 'Total Devolvido', quantity: 0, value: 0 }
  ];

  return (

    <Row>
      <Col span="24">
        <List
          size="large"
          header={
            <Row style={{ width: '100%' }}>
              <Col span="8"><strong></strong></Col>
              <Col span="8"><strong>Quantidade</strong></Col>
              <Col span="8"><strong>Valor</strong></Col>
            </Row>
          }
          // footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item =>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span="8">{item.label}</Col>
                <Col span="8">{item.quantity}</Col>
                <Col span="8">{item.value}</Col>
              </Row>
            </List.Item>
          }
        />
      </Col>
    </Row>

  );

}
