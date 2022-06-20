import { useEffect, useState } from "react"
import Card from "./components/Card"
import Profile from "./components/Profile"

import work from "./images/icon-work.svg"
import play from "./images/icon-play.svg"
import study from "./images/icon-study.svg"
import exercise from "./images/icon-exercise.svg"
import social from "./images/icon-social.svg"
import selfCare from "./images/icon-self-care.svg"

import "./styles/App.css"

function App() {
	const [active, setActive] = useState("weekly")
	const [data, setData] = useState([])

	const images = [work, play, study, exercise, social, selfCare]

	useEffect(() => {
		const appData = async () => {
			const res = await fetch("data.json")
			const data = await res.json()
			setData(data)
		}
		appData()
	}, [])

	return (
		<main>
			<div className="app">
				<Profile name="Jeremy Robson" active={active} setActive={setActive} />
				{data.map((item, i) => {
					return <Card key={item.title} data={item} active={active} img={images[i]} />
				})}
			</div>
		</main>
	)
}

export default App

