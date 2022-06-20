import { useEffect, useState } from "react"
import Card from "./components/Card"
import Profile from "./components/Profile"

import "./styles/App.css"

function App() {
	const [active, setActive] = useState("weekly")
	const [data, setData] = useState([])

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
				{data.map((item) => {
					return <Card key={item.title} data={item} active={active} />
				})}
			</div>
		</main>
	)
}

export default App

