import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BACKEND_URL } from '@/shared/constants';
import { transformFetchedDonatPools } from '@/shared/helpers';
import type { DonatPool, FetchedDonatPool } from '@/shared/types';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  reducerPath: 'donatPools',
  endpoints: (build) => ({
    getDonatPools: build.query<DonatPool[], void>({
      query: () => 'fundraising-api/all-projects/',
      transformResponse: (response: FetchedDonatPool[]) => {
        return transformFetchedDonatPools(response);
      },
    }),
  }),
});

export const { useGetDonatPoolsQuery } = api;
export default api;
