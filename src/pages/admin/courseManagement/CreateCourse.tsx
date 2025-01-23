import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import { Button, Col, Flex } from 'antd';
import PHSelect from '../../../components/form/PHSelect';

import PHInput from '../../../components/form/PHInput.tsx';
import {
  useAddCoursesMutation,
  useGetAllCoursesQuery,
} from '../../../redux/features/admin/courseManagement.ts';
import { toast } from 'sonner';
import { TResponse } from '../../../types/global.ts';

const CreateCourse = () => {
  const [addCourse] = useAddCoursesMutation();
  const { data: courses } = useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('da', data);
    const courseId = toast.loading('Loading...');
    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      preRequisiteCourses: data.preRequisiteCourses
        ? data.preRequisiteCourses.map((item) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };

    console.log(courseData);
    try {
      const res = (await addCourse(courseData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: courseId });
      } else {
        toast.success('Course Created Successfully.', { id: courseId });
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={10}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" label="Title" name="title" />
          <PHInput type="text" label="Prefix" name="prefix" />
          <PHInput type="text" label="Code" name="code" />
          <PHInput type="text" label="Credits" name="credits" />
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
