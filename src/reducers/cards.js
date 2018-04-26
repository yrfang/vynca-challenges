import _ from 'lodash';
import { FETCH_POSTS, RECEIVE_POSTS } from '../constants/ActionTypes';

export default function(state = {
  isLoading: true,
  data: [],
	error: false
}, action = null) {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, isLoading: true, error: true}
    case RECEIVE_POSTS:
      return {...state, isLoading: false, data: action.data, error: false}
    default:
      return state;
  }
}
