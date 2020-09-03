import { Col, Form, Input, Row, List } from 'antd';
import React from 'react';

export default function TaxTableFormComponent(): JSX.Element {

  const data = [
    { key: 1, day: 'SEG', returnDay: 'TER', taxCalculatedByDayString: 'D + 1', taxCalculatedByDay: 1 },
    { key: 2, day: 'TER', returnDay: 'QUA', taxCalculatedByDayString: 'D + 1', taxCalculatedByDay: 1 },
    { key: 3, day: 'QUA', returnDay: 'QUI', taxCalculatedByDayString: 'D + 1', taxCalculatedByDay: 1 },
    { key: 4, day: 'QUI', returnDay: 'SEX', taxCalculatedByDayString: 'D + 1', taxCalculatedByDay: 1 },
    { key: 5, day: 'SEX', returnDay: 'SEG', taxCalculatedByDayString: 'D + 3', taxCalculatedByDay: 3 },
    { key: 6, day: 'SAB', returnDay: 'TER', taxCalculatedByDayString: 'D + 3', taxCalculatedByDay: 3 },
    { key: 7, day: 'DOM', returnDay: 'TER', taxCalculatedByDayString: 'D + 2', taxCalculatedByDay: 2 }
  ];

  return (

    <Row>
      <Col span="24">
        <Form.Item name="factor" label="Fator" className="form-element">
          <Input/>
        </Form.Item>
        <Form.Item name="adValoren" label="AD-Valorem / Tipo">
          <Input/>
        </Form.Item>
        <List
          size="small"
          header={
            <Row style={{ width: '100%' }}>
              <Col span="8"><strong>Dia</strong></Col>
              <Col span="8"><strong>Pagamento</strong></Col>
              <Col span="8"><strong>Juros</strong></Col>
            </Row>
          }
          // footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item =>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span="8">{item.day}</Col>
                <Col span="8">{item.returnDay}</Col>
                <Col span="8">{item.taxCalculatedByDayString}</Col>
              </Row>
            </List.Item>
          }
        />
      </Col>
    </Row>

  );

}
