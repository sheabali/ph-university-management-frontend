import { Button, Dropdown, Table, TableColumnsType, Tag } from 'antd';

import { TSemester } from '../../../types';
import {
  useGetAllRegisteredSemestersQuery,
  useUpdateRegisteredSemesterMutation,
} from '../../../redux/features/admin/courseManagement';
import moment from 'moment';
import { useState } from 'react';

type TTbaleData = Pick<TSemester, 'startDate' | 'endDate' | 'status'>;

const items = [
  {
    label: 'Opcoming',
    key: 'OPCOMING',
  },
  {
    label: 'Ongoing',
    key: 'ONGOING',
  },
  {
    label: 'Ended',
    key: 'ENDED',
  },
];

const RegisteredSemesters = () => {
  const [semesterId, setSemesterId] = useState();

  const { data: semesterData, isFetching } =
    useGetAllRegisteredSemestersQuery(undefined);

  const [updateSemester] = useUpdateRegisteredSemesterMutation();

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, status, startDate, endDate }) => ({
      key: _id,
      name: academicSemester.name,
      status,
      startDate: moment(new Date(startDate)).format('MMMM'),
      endDate: moment(new Date(endDate)).format('MMMM'),
    })
  );

  const handleStatusUpdate = (data: any) => {
    const updateData = {
      id: semesterId,
      data: {
        status: data.key,
      },
    };
    updateSemester(updateData);
    console.log(updateData);
  };

  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };

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
      render: (item) => {
        let color;
        if (item === 'UPCOMING') {
          color = 'blue';
        }
        if (item === 'ONGOING') {
          color = 'green';
        }
        if (item === 'ENDED') {
          color = 'red';
        }
        return <Tag color={color}>{item}</Tag>;
      },
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
      render: (item) => {
        console.log(item);
        return (
          <div>
            <Dropdown menu={menuProps} trigger={['click']}>
              <Button
                onClick={() => {
                  setSemesterId(item.key);
                }}
              >
                Update
              </Button>
            </Dropdown>
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
