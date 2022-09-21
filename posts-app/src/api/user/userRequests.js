import axios from "axios";

export const getUser = (userId) => {
	return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

export const getAllUsers = () => {
	return axios.get(`https://jsonplaceholder.typicode.com/users/`);
};
