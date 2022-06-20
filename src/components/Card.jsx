import React from "react"
import "../styles/Card.css"

function Card({data, active}) {
	const { title, timeframes } = data
	const name = title.replace(" ", "-").toLowerCase()

	function getTime(lastTime){
		switch(active){
			case "daily":
				return `Yesterday - ${lastTime}hrs`
			case "weekly":
				return `Last Week - ${lastTime}hrs`
			case "monthly":
				return `Last Month - ${lastTime}hrs`
			default:
				return `Last Week - ${lastTime}hrs`
		}
	} 
	return (
		<section className={"card "+ name}>
			<div className="img-background">
				<img src={`images/icon-${name}.svg`} alt="" />
			</div>
			<section className="timer">
				<div className="row">
					<span className="title">{title}</span>
					<button>
						<svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
								fill="#FFF"
								fillRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div className="row row-time">
					<span className="hours">{timeframes[active].current}hrs</span>
					<span className="last">{getTime(timeframes[active].previous)}</span>
				</div>
			</section>
		</section>
	)
}

export default Card
