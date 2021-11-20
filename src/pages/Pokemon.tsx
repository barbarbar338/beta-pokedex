import { FC } from "react";
import { useParams, Navigate } from "react-router-dom";
import swr from "swr";
import axios from "axios";
import { API_URL } from "../constants";
import { Preloader } from "../components/Preloader";
import { IPokemonInfo, PokemonInfo } from "../components/PokemonInfo";

export const Pokemon: FC = () => {
	const { id } = useParams();

	if (!id || parseInt(id) < 1 || parseInt(id) > 151)
		return <Navigate to="/" />;

	const { data } = swr<IPokemonInfo>(`pokemon.${id}`, async () => {
		const res = await axios.get<IPokemonInfo>(API_URL + id);
		return res.data;
	});

	return <div>{!data ? <Preloader /> : <PokemonInfo {...data} />}</div>;
};
