/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { Button } from 'antd';
import type { Patient } from 'src/api/types/Patient';

const logPatientData = (patient: Patient) => {
  alert(patient.id);
};

export const getTableColumns = (openModal: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'test 1',
      render: (_, record: Patient) => (
        record.test1 ? <Button>View report</Button>
          : (
            <Button
              type="primary"
              onClick={() => openModal(record, 'test1')}
            >
              + Add report
            </Button>
          )
      ),
    },
    {
      title: 'test 2',
      render: (_, record: Patient) => (
        record.test2 ? <Button>View report</Button>
          : (
            <Button
              type="primary"
              onClick={() => openModal(record, 'test2')}
            >
              + Add report
            </Button>
          )
      ),
    },
    {
      title: 'test 3',
      render: (_, record: Patient) => (
        record.test3 ? <Button>View report</Button>
          : (
            <Button
              type="primary"
              onClick={() => openModal(record, 'test3')}
            >
              + Add report
            </Button>
          )
      ),
    },
  ];
  return columns;
};
