import { FC } from "react";
import { IPokeBox, PokeBox } from "./PokeBox";
import { API_URL, FETCH_LIMIT } from "../constants";
import useSwr from "swr";
import axios from "axios";
import { Preloader } from "./Preloader";

export interface IPokeContainer {
	query?: string;
}

export const PokeContainer: FC<IPokeContainer> = ({ query }) => {
	const { data } = useSwr<IPokeBox[]>("pokemons", async () => {
		const pokes = [];
		for (let i = 0; i < FETCH_LIMIT; i++) {
			const res = await axios.get<IPokeBox>(API_URL + (i + 1));
			pokes.push(res.data);
		}
		return pokes;
	});

	return (
		<div className="poke-container">
			{!data ? (
				<Preloader />
			) : (
				data
					.filter((el) => (query ? el.name.includes(query) : true))
					.map((pokemon, idx) => <PokeBox key={idx} {...pokemon} />)
			)}
		</div>
	);
};
