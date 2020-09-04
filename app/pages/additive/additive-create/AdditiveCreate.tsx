import React, { useState } from 'react';
import AdditiveForm from '../components/AdditiveForm';
import Header from './components/header/Header';
import { AddAdditiveItemsComponent } from '../components/AddAddiveItemsComponent';
import { Row, Col } from 'antd';
import AddAdditiveItemFormComponent from '../components/AddAdditiveItemFormComponent';


export default function AdditiveCreatePage(): JSX.Element {
  const [navigate, setNavigate] = useState('createAddictive');

  const setAddictiveComponent = () => {
    if (navigate === 'createAddictive') {
      return <AdditiveForm/>;
    } else if (navigate === 'addItems') {
      return (
        <Row>
          <Col span="24">
            <AddAdditiveItemFormComponent/>
          </Col>
          <Col span="24">
            <AddAdditiveItemsComponent/>
          </Col>
        </Row>
      );
    } else {
      return;
    }
  };

  return (
    <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <Header changeRoute={setNavigate} route={navigate}/>
      {setAddictiveComponent()}
    </div>
  );
}
