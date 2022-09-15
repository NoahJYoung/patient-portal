import React, {
  ChangeEvent,
  useState,
  SetStateAction,
} from 'react';
import {
  Table,
  Typography,
  TablePaginationConfig,
  Input,
  Button,
} from 'antd';
import type { Patient } from 'src/api/types/Patient';

import { AddPatientModal, AddTestModal } from './components';
import { getTableColumns, testData } from './helpers';

import styles from './PatientsPage.module.scss';

const { Title } = Typography;

const PAGE_SIZE = 100;
const { Search } = Input;

export const PatientsPage = () => {
  const [patients, setPatients] = useState(testData);
  const [addPatientModalVisible, setAddPatientModalVisible] = useState(false);
  const [addTestModalVisible, setAddTestModalVisible] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [currentTest, setCurrentTest] = useState(null);

  const handlePatientModal = () => {
    setAddPatientModalVisible(!addPatientModalVisible);
  };

  const handleTestModal = (record: SetStateAction<any>, test: SetStateAction<any>) => {
    setCurrentPatient(record);
    setCurrentTest(test);
    setAddTestModalVisible(!addTestModalVisible);
  };

  const handleFilterPatients = (event: ChangeEvent): void => {
    if ((event.target as HTMLInputElement).value) {
      setPatients(testData.filter(patient => patient.id.includes((event.target as HTMLInputElement).value)));
    } else {
      setPatients(testData);
    }
  };

  const tableColumns = getTableColumns(handleTestModal);
  const paginationConfig: TablePaginationConfig = {
    total: 100,
    current: 1,
    pageSize: PAGE_SIZE,
    hideOnSinglePage: true,
  };

  return (
    <div className={styles.pageContainer}>
      <AddPatientModal
        visible={addPatientModalVisible}
        onClose={handlePatientModal}
      />
      <AddTestModal
        visible={addTestModalVisible}
        onClose={() => setAddTestModalVisible(!addTestModalVisible)}
        patient={currentPatient}
        test={currentTest}
      />

      <Title
        className={styles.pageTitle}
        level={2}
      >
        Patient List
      </Title>

      <div className={styles.btnDiv}>
        <Button
          type="primary"
          onClick={handlePatientModal}
        >
          + Add patient
        </Button>
        <div className={styles.searchContainer}>
          <Search
            placeholder="Find by ID"
            onChange={handleFilterPatients}
          />
        </div>
      </div>

      <Table
        dataSource={patients}
        className={styles.patientsTable}
        columns={tableColumns}
        tableLayout="fixed"
        pagination={paginationConfig}
        scroll={{ y: '60vh' }}
      />
    </div>
  );
};
