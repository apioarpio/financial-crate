import React, { useState } from 'react';
import AdditiveForm from '../components/AdditiveForm';
import Header from './components/header/Header';
import {AddAdctiveItemsComponent} from '../components/AddAdctiveItemsComponent';


export default function AdditiveCreatePage(): JSX.Element {
  const [navigate, setNavigate] = useState('createAddictive');

  const setAddictiveComponent = () => {
    if (navigate === 'createAddictive') {
      return <AdditiveForm/>;
    } else if (navigate === 'addItems') {
      return <AddAdctiveItemsComponent/>;
    }
  };

  return (
    <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <Header changeRoute={setNavigate} route={navigate}/>
      {setAddictiveComponent()}
    </div>
  );
}
