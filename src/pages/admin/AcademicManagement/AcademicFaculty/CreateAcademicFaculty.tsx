import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useAddAcademicFacultyMutation } from '../../../../redux/features/admin/academicManagement.api';
import { Button, Col, Flex } from 'antd';
import PHForm from '../../../../components/form/PHForm';
import PHInput from '../../../../components/form/PHInput';
import { toast } from 'sonner';
import { TResponse } from '../../../../types';

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const facultyId = toast.loading('Loading...');
    const facultyData = {
      name: data.name,
    };

    try {
      const res = (await addAcademicFaculty(facultyData)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message, { id: facultyId });
      } else {
        toast.success('Faculty Created Successfully.', { id: facultyId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={10}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="name" label="Name" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
