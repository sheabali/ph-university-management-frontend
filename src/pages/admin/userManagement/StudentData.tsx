import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from 'antd';
import { useState } from 'react';
import { TQueryParams, TStudent } from '../../../types';
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagement.api';

type TTbaleData = Pick<TStudent, 'fullName' | 'id'>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [page, setPage] = useState(3);

  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    { name: 'limit', value: 3 },
    { name: 'page', value: page },
    { name: 'sort', value: 'id' },
    ...params,
  ]);

  const metaData = studentData?.meta;

  const tableData = studentData?.data?.map(({ _id, fullName, id }) => ({
    key: _id,
    id,
    fullName,
  }));
  const columns: TableColumnsType<TTbaleData> = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <Space>
            <Button>Details</Button>
            <Button>Block</Button>
            <Button>Update</Button>
          </Space>
        );
      },
      width: '1%',
    },
  ];

  const onChange: TableProps<TTbaleData>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log('params', pagination, filters, sorter, extra);

    if (extra.action === 'filter') {
      const paramsQuery: TQueryParams[] = [];

      filters.name?.forEach((item) => {
        paramsQuery.push({ name: 'name', value: item });
      });
      filters.year?.forEach((item) => {
        paramsQuery.push({ name: 'year', value: item });
      });
      setParams(paramsQuery);
    }
  };

  return (
    <>
      <Table<TTbaleData>
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
        showSorterTooltip={{ target: 'sorter-icon' }}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.page}
        total={metaData?.total}
      />
    </>
  );
};

export default StudentData;
