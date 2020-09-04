import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import { AdditiveListComponent } from '../additive-list/AdditiveListcomponent';

export default function AdditiveIndexPage(): JSX.Element {

  return (
    <Row>
      <Col span="24">
        <h1>Aditivo</h1>
        <Button>
          <Link to='/additive/create'>Novo Aditivo</Link>
        </Button>
      </Col>
      <Col span="24">
        <AdditiveListComponent/>
      </Col>
    </Row>
  );
}
