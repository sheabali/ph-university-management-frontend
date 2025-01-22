import { Button, Table, TableColumnsType } from 'antd';

import { TSemester } from '../../../types';
import { useGetAllRegisteredSemestersQuery } from '../../../redux/features/admin/courseManagement';

type TTbaleData = Pick<TSemester, 'startDate' | 'endDate' | 'status'>;

const RegisteredSemesters = () => {
  // const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);

  const { data: semesterData, isFetching } =
    useGetAllRegisteredSemestersQuery(undefined);

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, status, startDate, endDate }) => ({
      key: _id,
      name: academicSemester.name,
      status,
      startDate,
      endDate,
    })
  );

  const columns: TableColumnsType<TTbaleData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
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
    />
  );
};

export default RegisteredSemesters;
