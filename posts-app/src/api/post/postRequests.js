import axios from "axios";

export const getPostsByUser = (userId) => {
	return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

export const getAllPosts = () => {
	return axios.get(`https://jsonplaceholder.typicode.com/users/`);
};
