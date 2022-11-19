import * as types from './types';

export const fetchDetails = (userId: any) => ({
  type: types.FETCH_DETAILS,
  meta: {
    async: true,
    blocking: true,
    path: `/users/${userId}`,
    method: 'GET',
  },
});
