import { Button, Table, TableColumnsType } from 'antd';
import { useGetAcademicFacultiesQuery } from '../../../../redux/features/admin/academicManagement.api';
import { TAcademicFaculty } from '../../../../types/academicManagement.type';
type TTbaleData = Pick<TAcademicFaculty, 'name'>;
const AcademicFaculty = () => {
  const { data: facultyData, isFetching } =
    useGetAcademicFacultiesQuery(undefined);

  const tableData = facultyData?.data?.map(({ _id, name }) => ({
    key: _id,
    name,
  }));
  const columns: TableColumnsType<TTbaleData> = [
    {
      title: 'Name',
      dataIndex: 'name',
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

export default AcademicFaculty;
