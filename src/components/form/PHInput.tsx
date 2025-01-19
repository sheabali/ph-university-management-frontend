import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

type PhFormProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: PhFormProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
