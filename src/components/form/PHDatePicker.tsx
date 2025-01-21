import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';

type PhFormProps = {
  name: string;
  label?: string;
};

const PHDatePicker = ({ name, label }: PhFormProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker style={{ width: '100%' }} {...field} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
