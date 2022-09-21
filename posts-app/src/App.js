import React, { useState, useEffect } from "react";
import { Letter } from "./api/api";
import User from "./components/user/User";
import "./App.css";

function App() {
	const api = new Letter();
	const [data, setData] = useState([]);

	const fetchInformation = () => {
		api.usersAndPosts.then((res) => {
			if (res.error) {
				alert(`Error ${res.status}: There's been a problem with your request`);
				return;
			}

			setData(res);
		});
	};

	useEffect(() => {
		fetchInformation();
	}, []);

	return (
		<div className="App">
			<div
				style={{
					marginTop: 50,
					marginBottom: 50,
					display: "flex",
					justifyContent: "center",
				}}
			>
				<div
					style={{
						cursor: "pointer",
						width: 200,
						height: 50,
						backgroundColor: "green",
						borderRadius: 50,
						textAlign: "center",
						alignItems: "center",
						display: "flex",
						justifyContent: "center",
					}}
					onClick={fetchInformation}
				>
					{" "}
					GET USERS AND POSTS
				</div>
			</div>

			{data &&
				data.map((user, key) => {
					return (
						<div style={{ marginBottom: 15 }}>
							<User
								name={user.name}
								username={user.username}
								email={user.email}
								address={user.address}
								phone={user.phone}
								website={user.website}
								company={user.company}
								posts={user.posts}
								key={key}
							/>
						</div>
					);
				})}
		</div>
	);
}

export default App;
