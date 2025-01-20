import { Table, TableColumnsType, TableProps } from 'antd';
import { useGetAllSemesterQuery } from '../../../redux/features/admin/academicManagement.api';
import { TAcademicSemester } from '../../../types/academicManagement.type';
import { useState } from 'react';

type TTbaleData = Pick<
  TAcademicSemester,
  'name' | 'year' | 'startMonth' | 'endMonth' | '_id'
>;

const AcademicSemester = () => {
  const [params, setParams] = useState([]);

  const { data: semesterData } = useGetAllSemesterQuery(params);

  const tableData = semesterData?.data?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      key: _id,
      name,
      year,
      startMonth,
      endMonth,
    })
  );

  const columns: TableColumnsType<TTbaleData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      showSorterTooltip: { target: 'full-header' },
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      filters: [
        {
          text: '2024',
          value: '2024',
        },
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        },
      ],
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
      key: 'startMonth',
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
      key: 'endMonth',
    },
  ];

  const onChange: TableProps<TTbaleData>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log('params', pagination, filters, sorter, extra);

    const paramsQuery = [];

    if (extra.action === 'filter') {
      filters.name?.forEach((item) => {
        paramsQuery.push({ name: 'name', value: item });
      });
    }
    if (extra.action === 'filter') {
      filters.year?.forEach((item) => {
        paramsQuery.push({ name: 'year', value: item });
      });
    }
    setParams(paramsQuery);
  };

  return (
    <Table<TTbaleData>
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: 'sorter-icon' }}
    />
  );
};

export default AcademicSemester;
