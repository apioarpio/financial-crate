import { Table, Tag, Space } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    // render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: 'Aditivo',
    dataIndex: 'additive',
    key: 'additive',
  },
  {
    title: 'Quantidade',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Valor',
    key: 'value',
    dataIndex: 'value',
    // render: value => <Tag color={'geekblue'} key={value}>{Number(value).toFixed(2)}</Tag>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Apioarpio Ferreira',
    additive: '00001',
    quantity: 3,
    value: '10.000,000',
  },
  {
    key: '2',
    name: 'Apioarpio Ferreira',
    additive: '00002',
    quantity: 5,
    value: '1.000,000',
  },
  {
    key: '3',
    name: 'Apioarpio Ferreira',
    additive: '00003',
    quantity: 6,
    value: '6.000,000',
  },
];

export function AdditiveListComponent() {

  return(
    <Table columns={columns} dataSource={data} />
  )

}
