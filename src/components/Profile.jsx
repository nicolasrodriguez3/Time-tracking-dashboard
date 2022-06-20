import React from "react"
import profile from "../assets/images/image-jeremy.png"

import "../styles/Profile.css"

export default function Profile({ name, active, setActive }) {
	return (
		<section className="profile">
			<div className="profile-title">
				<img src={profile} alt={name} />
				<div className="profile-text">
					Report for
					<h1>{name}</h1>
				</div>
			</div>
			<div className="select-time">
				<button className={active === "daily" ? "active" : ""} onClick={() => setActive("daily")}>
					Daily
				</button>
				<button className={active === "weekly" ? "active" : ""} onClick={() => setActive("weekly")}>
					Weekly
				</button>
				<button
					className={active === "monthly" ? "active" : ""}
					onClick={() => setActive("monthly")}>
					Monthly
				</button>
			</div>
		</section>
	)
}
