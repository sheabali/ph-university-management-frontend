import { Controller, FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import { Button, Col, Divider, Form, Input, Row } from 'antd';
import {
  bloogGroupOption,
  genderOption,
} from '../../../components/constant/global';
import PHSelect from '../../../components/form/PHSelect';
import PHDatePicker from '../../../components/form/PHDatePicker';
import {
  useGetAcademicDepartmentQuery,
  useGetAllSemesterQuery,
} from '../../../redux/features/admin/academicManagement.api';
import { useAddStudentMutation } from '../../../redux/features/admin/userManagement.api';

const studentDummyData = {
  password: 'student123',
  student: {
    name: {
      firstName: 'I am ',
      middleName: 'Student',
      lastName: 'Number 1',
    },
    gender: 'male',
    dateOfBirth: '1990-01-01',
    bloogGroup: 'A+',

    email: 'student2@gmail.com',
    contactNo: '1235678',
    emergencyContactNo: '987-654-3210',
    presentAddress: '123 Main St, Cityville',
    permanentAddress: '456 Oak St, Townsville',
    guardian: {
      fatherName: 'James Doe',
      fatherOccupation: 'Engineer',
      fatherContactNo: '111-222-3333',
      motherName: 'Mary Doe',
      motherOccupation: 'Teacher',
      motherContactNo: '444-555-6666',
    },
    localGuardian: {
      name: 'Alice Johnson',
      occupation: 'Doctor',
      contactNo: '777-888-9999',
      address: '789 Pine St, Villageton',
    },
    // admissionSemester: '',
    // academicDepartment: '65b00fb010b74fcbd7a25d8e',
  },
};

const defaultFormData = {
  name: {
    firstName: 'I am ',
    middleName: 'Student',
    lastName: 'Number 1',
  },
  gender: 'male',
  // dateOfBirth: '1990-01-01',
  bloogGroup: 'A+',

  email: 'student23@gmail.com',
  contactNo: '1235678',
  emergencyContactNo: '987-654-3210',
  presentAddress: '123 Main St, Cityville',
  permanentAddress: '456 Oak St, Townsville',
  guardian: {
    fatherName: 'James Doe',
    fatherOccupation: 'Engineer',
    fatherContactNo: '111-222-3333',
    motherName: 'Mary Doe',
    motherOccupation: 'Teacher',
    motherContactNo: '444-555-6666',
  },
  localGuardian: {
    name: 'Alice Johnson',
    occupation: 'Doctor',
    contactNo: '777-888-9999',
    address: '789 Pine St, Villageton',
  },
  admissionSemester: '65b0104110b74fcbd7a25d92',
  academicDepartment: '65b00fb010b74fcbd7a25d8e',
};

const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentMutation();

  console.log(data);
  console.log(error);

  const { data: sData, isLoading: SisLoading } =
    useGetAllSemesterQuery(undefined);
  const { data: dData, isLoading: DisLoading } =
    useGetAcademicDepartmentQuery(undefined);
  const semesterOption = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const departmentOption = dData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    console.log(data);
    addStudent(formData);

    const studentData = {
      password: 'ph1234',
      student: data,
    };

    formData.append('data', JSON.stringify(studentData));
    formData.append('file', data.image);

    console.log(formData);
    console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={defaultFormData}>
          <Row gutter={8}>
            <Divider>Personal Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" label="First Name" name="name.firstName" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" label="Middle Name" name="name.middleName" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" label="Last Name" name="name.lastName" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect options={genderOption} label="Gender" name="gender" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker label="Date Of Birth" name="dateOfBirth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={bloogGroupOption}
                label="Bloog Group"
                name="bloogGroup"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      {...field}
                      value={value?.fileName}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>

            <Divider>Contact Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" label="Email" name="email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" label="Contact No" name="contactNo" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Emergency Contact No"
                name="emergencyContactNo"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Present Address"
                name="presentAddress"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Permanent Address"
                name="permanentAddress"
              />
            </Col>
            <Divider>Guardian Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Father Name"
                name="guardian.fatherName"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Father Occupation"
                name="guardian.fatherOccupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Father Contact No"
                name="guardian.fatherContactNo"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Mother Name"
                name="guardian.motherName"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Mother Occupation"
                name="guardian.motherOccupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Mother ContactNo"
                name="guardian.motherContactNo"
              />
            </Col>
            <Divider>Local Guardian Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" label="Name" name="localGuardian.name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Occupation"
                name="localGuardian.occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Contact No"
                name="localGuardian.contactNo"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                label="Address"
                name="localGuardian.address"
              />
            </Col>
            <Divider>Academic Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                disabled={SisLoading}
                options={semesterOption}
                label="Admission Semester"
                name="admissionSemester"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                disabled={DisLoading}
                options={departmentOption}
                label="Academic Department"
                name="academicDepartment"
              />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
