import { TQueryParams } from '../../../types';
import { baseApi } from '../../api/baseApi';

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemesters: builder.mutation({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: '/semester-registrations',
          method: 'GET',
          params: params,
        };
      },
    }),
  }),
});

export const { useGetAllRegisteredSemestersMutation } = courseManagementApi;
