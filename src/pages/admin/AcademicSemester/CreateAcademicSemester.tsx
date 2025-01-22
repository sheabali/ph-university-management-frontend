import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import { academicSemesterSchema } from '../../../../schemas/academicSemester.schema.ts';
import { Button, Col, Flex } from 'antd';
import PHSelect from '../../../components/form/PHSelect';
import { samesterOptions } from '../../../components/constant/semster';
import { monthOption } from '../../../components/constant/global';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAddAcademicSemesterMutation } from '../../../redux/features/admin/academicManagement.api.ts';
import { toast } from 'sonner';
import { TResponse } from '../../../types/global.ts';

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const semesterId = toast.loading('Loading...');
    const name = samesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: semesterId });
      } else {
        toast.success('Semester Created Successfully.', { id: semesterId });
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={10}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect options={samesterOptions} label="Name" name="name" />
          <PHSelect options={yearOptions} label="Year" name="year" />
          <PHSelect
            options={monthOption}
            label="Start Month"
            name="startMonth"
          />
          <PHSelect options={monthOption} label="End Month" name="endMonth" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
