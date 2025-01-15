import { baseApi } from '../../api/baseApi';

const academicSemesterApi = () => {
  baseApi.injectEndpoints({
    endpoints: (builder) => ({
      login: builder.query({
        query: () => ({
          url: '/academic-semesters',
          method: 'GET',
        }),
      }),
    }),
  });
};

export default academicSemesterApi;
