import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';

import { Button, Col, Flex } from 'antd';
import PHSelect from '../../../components/form/PHSelect';
const nameOptions = [
  {
    value: '01',
    label: 'Autuam',
  },
  {
    value: '02',
    label: 'Summer',
  },
  {
    value: '03',
    label: 'Fall',
  },
];
const CreateAcademicSemester = () => {
  const semesterData = {
    name: 'Something',
    code: 'Something',
  };
  console.log(semesterData);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={10}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect options={nameOptions} label="Name" name="name" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
