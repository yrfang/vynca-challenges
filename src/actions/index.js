import axios from 'axios';
import { FETCH_POSTS, RECEIVE_POSTS } from '../constants/ActionTypes';

const ROOT_URL = 'https://gist.githubusercontent.com/yrfang/218a4a0bbce71d3396d4e63f198da5ff/raw/7de50cc372678f2c0d214184af2e17616dcc01da/dogimages.json';

// action creator
function requestData() {
	return {type: FETCH_POSTS}
};

function receiveData(json) {
	return {
		type: RECEIVE_POSTS,
		data: json
	}
};

export function fetchData() {
	return function(dispatch) {
		dispatch(requestData());
		return axios.get(ROOT_URL)
			.then((response) => {
				dispatch(receiveData(response.data));
			})
			.catch((error) => {
				console.log(error);
			})
	}
};
