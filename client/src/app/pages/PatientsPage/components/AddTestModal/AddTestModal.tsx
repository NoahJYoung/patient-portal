import React from 'react';
import {
  Form,
  Input,
  Modal,
  Typography,
} from 'antd';
import { Patient } from 'src/api/types/Patient';

import styles from './AddTestModal.module.scss';

const { Title, Paragraph } = Typography;

interface Props {
  visible: boolean
  onClose: () => any
  patient: Patient | null
  test: string | null
}

export const AddTestModal = ({
  visible,
  onClose,
  patient,
  test,
}: Props) => {
  const test1 = 'test';
  return (
    <Modal
      closable
      open={visible}
      onCancel={onClose}
    >
      <Title level={3}>{patient?.id}</Title>
      <Paragraph>{test}</Paragraph>
      <Form layout="vertical">
        <Form.Item label="Input 1">
          <Input type="text" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
