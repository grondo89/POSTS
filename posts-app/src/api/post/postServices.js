import axios from "axios";
import { remove } from "lodash";

export const getUsersAndPosts = async () => {
	try {
		const userRawData = (
			await axios.get(`https://jsonplaceholder.typicode.com/users/`)
		).data;

		const postsRawData = (
			await axios.get(`https://jsonplaceholder.typicode.com/posts`)
		).data;

		const usersWithPosts = [];

		for (let i = 0; i < userRawData.length; i++) {
			const userData = userRawData[i];
			const { address } = userData;

			const filteredPosts = remove(postsRawData, {
				userId: Number(userData.id),
			});

			const joinedUserPostData = {
				...userData,
				posts: filteredPosts,
				company: userData.company.name,
				address: address.street
					.concat(" ", address.suite)
					.concat(" ", address.city),
			};
			usersWithPosts.push(joinedUserPostData);
		}
		return usersWithPosts;
	} catch (error) {
		return {
			error: true,
			status: error.response.status,
			message: error.message,
			name: error.name,
		};
	}
};
