import React from 'react';
import {
  Modal,
  Form,
  Input,
  Typography,
  DatePicker,
} from 'antd';

interface Props {
  visible: boolean
  onClose: () => any
}

export const AddReportModal = ({
  visible,
  onClose,
}: Props) => (
  <Modal>
    <Form>
      <Form.Item label="Date">
        <DatePicker />
      </Form.Item>
    </Form>
  </Modal>
);
