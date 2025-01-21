import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TPHSelectProps = {
  label: string;
  name: string;
  disabled?: boolean;
  options:
    | {
        value: string;
        label: string;
        disabled?: boolean;
      }[]
    | undefined;
};

const PHSelect = ({ label, name, options, disabled }: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label} style={{ marginBottom: '20px' }}>
          <Select
            {...field}
            style={{ width: '100%' }}
            options={options}
            disabled={disabled}
          />
          <small style={{ color: 'red' }}>{error && error.message}</small>
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
