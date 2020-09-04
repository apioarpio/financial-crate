import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';


export default function AddAdditiveItemFormComponent(): JSX.Element {

  return (
    <Form layout="vertical">
      <Row>
        <Col span="6">
          <Form.Item name="document" label="Documento" className="form-element">
            <Input/>
          </Form.Item>
        </Col>
        <Col span="6">
          <Form.Item name="dueDate" label="Vencimento">
            <Input/>
          </Form.Item>
        </Col>
        <Col span="6">
          <Form.Item name="customer" label="Sacador">
            <Input/>
          </Form.Item>
        </Col>
        <Col span="6">
          <Form.Item name="value" label="Valor">
            <Input/>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Button type="primary" block>
            Adicionar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
