import { Form, Input, Row, Col } from 'antd';
import React from 'react';

import '../customerCreate/CustomerCreate.css'

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
      <Row>
        <Col span="12">
          <Form.Item name="email" label="Email" className="form-element">
            <Input/>
          </Form.Item>
        </Col>
        <Col span="12">
          <Form.Item name="phone" label="Telefone">
            <Input/>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <Form.Item name="state" label="Estado">
            <Input/>
          </Form.Item>
        </Col>
        <Col span="6">
          <Form.Item name="city" label="municipio">
            <Input/>
          </Form.Item>
        </Col>
        <Col span="6">
          <Form.Item name="neighborhood" label="Bairro">
            <Input/>
          </Form.Item>
        </Col>
        <Col span="6">
          <Form.Item name="street" label="Rua">
            <Input/>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );

}
