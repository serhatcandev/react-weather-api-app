import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";

function App() {
	const key = "1ca20ba143ce016f12cb40a702ec4336";
	const [search, setSearch] = useState("");
	const [city, setCity] = useState();

	useEffect(() => {
		async function getApi() {
			try {
				const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
				);
				console.log(response);
				setCity(response.data);
			} catch (error) {
				console.error(error);
			}
		}
		getApi();
	}, [search]);

	return (
		<div
			className="App flex flex-col justify-center items-center h-2/6
     "
		>
			<h1 className="text-3xl font-bold">Weather API</h1>
			<div className="mb-3 pt-0">
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					type="text"
					className="w-full mt-6 py-2 text-center border-2 border-black text-slate-900 relative rounded shadow outline-none text-xl"
				/>
				<City city={city} />
			</div>
		</div>
	);
}

export default App;
