import { combineReducers } from 'redux';
import { createReducer } from 'state/utils';
import * as types from './types';

/* State shape
{
    details: product,
    list: [ product ],
}
*/

const detailsReducer = createReducer(null)({
  [types.FETCH_DETAILS_COMPLETED]: (state: any, action: any) => action.payload,
});

export default combineReducers({
  details: detailsReducer,
});
