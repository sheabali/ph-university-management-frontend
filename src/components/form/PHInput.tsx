import { Input } from 'antd';
import { Controller } from 'react-hook-form';

type PhFormProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: PhFormProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: '5px' }}>{label ? label : null}</div>
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
