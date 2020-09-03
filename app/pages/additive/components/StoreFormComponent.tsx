import { Form, Input, Row, Col } from 'antd';
import React from 'react';

export default function StoreFormComponent(): JSX.Element {

  return (

    <Row>
      <Col span="24">
        <Form.Item name="store" label="Loja" className="form-element">
          <Input/>
        </Form.Item>
        <Form.Item name="customer" label="Cliente">
          <Input/>
        </Form.Item>
        <Form.Item name="additive" label="Aditivo">
          <Input/>
        </Form.Item>
      </Col>
    </Row>

  );

}
