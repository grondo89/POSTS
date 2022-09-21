import React, { useState } from "react";
import RightArrow from "./RIGHT_ARROW.png";
import DownArrow from "./DOWN_ARROW.png";

const User = ({
	name,
	username,
	email,
	address,
	phone,
	website,
	company,
	posts,
}) => {
	const [userExpanded, setUserExpanded] = useState(false);
	const [postsExpanded, setPostsExpanded] = useState(false);

	const changeVisibility = () => {
		setUserExpanded(!userExpanded);
	};

	const changePostVisibility = () => {
		setPostsExpanded(!postsExpanded);
	};

	console.log(posts);
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignContent: "flex-end",
					margin: "auto",
					width: "75%",
					border: "1px solid black",
				}}
			>
				<div onClick={changeVisibility} style={{ marginRight: 20 }}>
					{userExpanded ? (
						<img
							src={RightArrow}
							width={15}
							height={15}
							style={{ alignSelf: "baseline-position" }}
							alt="collapse"
						/>
					) : (
						<img
							src={DownArrow}
							width={15}
							height={15}
							style={{ alignSelf: "center" }}
							alt="expand"
						/>
					)}
				</div>
				{userExpanded ? (
					<div>
						<div>
							<div style={{ marginBottom: 5 }}>Name: {name}</div>
							<div style={{ marginBottom: 5 }}>Username: {username}</div>
							<div style={{ marginBottom: 5 }}>Email: {email}</div>
							<div style={{ marginBottom: 5 }}>Address: {address}</div>
							<div style={{ marginBottom: 5 }}>Phone: {phone}</div>
							<div style={{ marginBottom: 5 }}>Website: {website}</div>
							<div style={{ marginBottom: 5 }}>Company: {company}</div>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								marginTop: 5,
							}}
						>
							<div onClick={changePostVisibility} style={{ marginRight: 20 }}>
								{postsExpanded ? (
									<img src={RightArrow} width={10} height={10} alt="expand" />
								) : (
									<img src={DownArrow} width={10} height={10} alt="collapse" />
								)}
							</div>
							{postsExpanded ? (
								posts.map((post, key) => {
									return (
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												marginTop: 15,
											}}
										>
											<div style={{ fontSize: 12 }}>Title : {post.title}</div>;
											<div style={{ fontSize: 10 }}>Body : {post.body}</div>;
										</div>
									);
								})
							) : (
								// <div onClick={changePostVisibility}>alksjdhalksjdhaslkdj</div>
								<div>Posts quantity: {posts.length}</div>
							)}
						</div>
					</div>
				) : (
					<div onClick={changeVisibility} style={{ textAlign: "start" }}>
						Name: {name}
					</div>
				)}

				<div style={{ height: 1, backgroundColor: "red", marginTop: 10 }} />
			</div>
		</>
	);
};

export default User;
