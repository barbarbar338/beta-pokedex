import { PokeContainer } from "../components/PokeContainer";
import { ChangeEvent, useState } from "react";

export default function HomePage() {
	const [query, setQuery] = useState("");

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value;
		setQuery(query);
	};

	return (
		<div>
			<h1>Modern Pokedex (Gen 1)</h1>
			<input type="text" onChange={onInputChange} />
			<PokeContainer query={query} />
		</div>
	);
}
