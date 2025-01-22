import { Button, Table, TableColumnsType } from 'antd';
import { TAcademicFaculty } from '../../../types';
import { useGetAcademicDepartmentQuery } from '../../../redux/features/admin/academicManagement.api';
type TTbaleData = Pick<TAcademicFaculty, 'name'>;
const AcademicDepartment = () => {
  const { data: departmentData, isFetching } =
    useGetAcademicDepartmentQuery(undefined);
  console.log(departmentData);

  const tableData = departmentData?.data?.map(
    ({ _id, name, academicFaculty }) => ({
      key: _id,
      name,
      facultyName: academicFaculty.name,
    })
  );
  console.log(tableData);

  const columns: TableColumnsType<TTbaleData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      showSorterTooltip: { target: 'full-header' },
    },
    {
      title: 'Academic Faculty',
      dataIndex: 'facultyName',
      key: 'name',
      showSorterTooltip: { target: 'full-header' },
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table<TTbaleData>
      columns={columns}
      loading={isFetching}
      dataSource={tableData}
      showSorterTooltip={{ target: 'sorter-icon' }}
    />
  );
};

export default AcademicDepartment;
