import { getUsersAndPosts } from "./post/postServices";

export class Letter {
	get usersAndPosts() {
		return getUsersAndPosts();
	}
}
