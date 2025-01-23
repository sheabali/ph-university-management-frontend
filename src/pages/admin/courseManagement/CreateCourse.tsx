import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import { Button, Col, Flex } from 'antd';
import PHSelect from '../../../components/form/PHSelect';

import PHInput from '../../../components/form/PHInput.tsx';
import { useGetAllCoursesQuery } from '../../../redux/features/admin/courseManagement.ts';

const CreateCourse = () => {
  const { data: courses } = useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('da', data);
    // const courseId = toast.loading('Loading...');
    const courseData = {
      ...data,
      preRequisiteCourses: data.preRequisiteCourses.map((item) => ({
        course: item,
        isDeleted: false,
      })),
    };
    console.log(courseData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={10}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" label="Title" name="title" />
          <PHInput type="text" label="Prefix" name="prefix" />
          <PHInput type="text" label="Code" name="code" />
          <PHSelect
            mode="multiple"
            options={preRequisiteCoursesOptions}
            label="Pre Requisite Courses"
            name="preRequisiteCourses"
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
