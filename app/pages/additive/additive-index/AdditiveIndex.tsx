import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default function AdditiveIndexPage(): JSX.Element {

  return (
    <div>
      <h1>Aditivo</h1>
      <Button>
        <Link to='/additive/create'>Novo Aditivo</Link>
      </Button>
    </div>
  );
}
