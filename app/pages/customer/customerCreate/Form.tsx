import { Form, Input, Row, Col } from 'antd';
import React from 'react';

import './CustomerCreate.css'

export default function CustomerCreateForm(): JSX.Element {

  return (
    <Form layout="vertical">
      <Row>
        <Col span="12">
          <Form.Item name="name" label="Nome" className="form-element">
            <Input/>
          </Form.Item>
        </Col>
        <Col span="12">
          <Form.Item name="identifier" label="CPF/CNPJ">
            <Input/>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );

}
