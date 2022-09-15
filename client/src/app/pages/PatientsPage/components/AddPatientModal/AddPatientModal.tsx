import React from 'react';
import {
  Modal,
  Form,
  Input,
  Typography,
  DatePicker,
} from 'antd';

import styles from './AddPatientModal.module.scss';

const { Title, Paragraph } = Typography;

interface Props {
  visible: boolean
  onClose: () => any
}

const description = 'Fill in the required fields to add a new test patient';

export const AddPatientModal = ({ visible, onClose }: Props) => (
  <Modal
    closable
    open={visible}
    onCancel={onClose}
    className={styles.modalContainer}
  >
    <div className={styles.modalHeader}>
      <Title level={3}>Add patient</Title>
      <Paragraph className={styles.description}>{description}</Paragraph>
    </div>
    <Form
      className={styles.addPatientForm}
      layout="vertical"
    >
      <Form.Item
        required
        label="Patient ID"
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item
        required
        label="Age"
      >
        <Input
          required
          className={styles.ageInput}
          type="number"
        />
      </Form.Item>

      <Form.Item
        required
        label="Date"
      >
        <DatePicker />
      </Form.Item>
    </Form>
  </Modal>
);
