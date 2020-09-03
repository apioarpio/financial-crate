import { Form, Input, Row, Col } from 'antd';
import React from 'react';

export default function CustomerFormComponent(): JSX.Element {
  return (

    <Row>
      <Col span="24">
        <Form.Item name="name" label="Nome" className="form-element">
          <Input/>
        </Form.Item>
        <Form.Item name="address" label="Endereço">
          <Input/>
        </Form.Item>
        <Form.Item name="city" label="Municipio">
          <Input/>
        </Form.Item>
      </Col>
    </Row>

  );

}
