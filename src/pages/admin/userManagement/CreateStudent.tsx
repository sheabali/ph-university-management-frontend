import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import { Button, Col, Divider, Row } from 'antd';

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
    admissionSemester: '65b0104110b74fcbd7a25d92',
    academicDepartment: '65b00fb010b74fcbd7a25d8e',
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // const formData = new FormData();
    console.log(data);

    // formData.append('data', JSON.stringify(data));

    // console.log(formData);
    // console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
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
              <PHInput type="text" label="Gender" name="gender" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" label="Date Of Birth" name="dateOfBirth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" label="Bloog Group" name="bloogGroup" />
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
              <PHInput
                type="text"
                label="Admission Semester"
                name="admissionSemester"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
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
