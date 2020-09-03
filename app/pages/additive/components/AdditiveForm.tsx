import { Form, Row, Col } from 'antd';
import React from 'react';
import StoreFormComponent from './StoreFormComponent';
import CustomerFormComponent from './CustomerFormComponent';
import TaxTableFormComponent from './TaxTableFormComponent';

export default function AdditiveForm(): JSX.Element {

  return (
    <Form layout="horizontal">
      <Row>
        <Col span="12" style={{ padding: 10 }}>
          <StoreFormComponent/>
        </Col>
        <Col span="12" style={{ padding: 10 }}>
          <CustomerFormComponent/>
        </Col>
      </Row>
      <Row>
        <Col span="12" style={{ padding: 10 }}>
          <TaxTableFormComponent/>
        </Col>
      </Row>
    </Form>
  );

}
