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
import { Link } from 'react-router-dom';

type TTbaleData = Pick<TStudent, 'fullName' | 'id' | 'email' | 'contactNo'>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [page, setPage] = useState(1);
  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    { name: 'page', value: page },
    { name: 'sort', value: 'id' },
    ...params,
  ]);

  const metaData = studentData?.meta;

  const tableData = studentData?.data?.map(
    ({ _id, fullName, id, email, contactNo }) => ({
      key: _id,
      id,
      fullName,
      email,
      contactNo,
    })
  );
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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Contact',
      dataIndex: 'contactNo',
      key: 'contactNo',
    },
    {
      title: 'Action',
      key: 'x',
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/students-data/${item?.key}`}>
              <Button>Details</Button>
            </Link>

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
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default StudentData;
