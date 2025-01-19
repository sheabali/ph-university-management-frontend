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

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={10}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect options={nameOptions} label="Name" name="name" />
          <PHSelect options={yearOptions} label="Year" name="year" />
          <PHSelect
            options={nameOptions}
            label="Start Month"
            name="startMonth"
          />
          <PHSelect options={nameOptions} label="End Month" name="endMonth" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
