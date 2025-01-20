import { baseApi } from '../../api/baseApi';

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: () => ({
        url: '/academic-semesters/',
        method: 'GET',
      }),
      transformResponse: (response) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: '/academic-semesters/create-academic-semester',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
  academicManagementApi;
