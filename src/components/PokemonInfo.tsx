import { FC } from "react";
import { COLORS, STATS } from "../constants";

export interface IPokemonInfo {
	name: string;
	id: number;
	weight: number;
	stats: {
		base_stat: number;
		stat: {
			name: keyof typeof STATS;
		};
	}[];
	[key: string]: any;
}

export const PokemonInfo: FC<IPokemonInfo> = ({
	id,
	types,
	name,
	weight,
	stats,
	sprites,
}) => {
	const type = types[0].type.name as keyof typeof COLORS;
	const id_new = id.toString().padStart(3, "0");

	return (
		<div className="poke-container">
			<div
				className="poke-box"
				style={{
					backgroundColor: COLORS[type],
				}}
			>
				<img
					className="poke-img"
					src={sprites.other["official-artwork"].front_default}
					alt={name}
				/>
				<h3 className="poke-name">{name}</h3>
				<p className="poke-id">#{id_new}</p>
				<p className="poke-weight">{weight} kg</p>
				<p className="poke-type">Type: {type}</p>
				{stats.map(({ base_stat, stat: { name } }, idx) => (
					<p className="poke-type" key={idx}>
						{STATS[name]}: {base_stat}
					</p>
				))}
			</div>
		</div>
	);
};
