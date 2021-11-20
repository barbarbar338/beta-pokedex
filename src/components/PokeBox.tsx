import { FC } from "react";
import { COLORS } from "../constants";
import { Link } from "react-router-dom";

export interface IPokeBox {
	name: string;
	id: number;
	weight: number;
	[key: string]: any;
}

export const PokeBox: FC<IPokeBox> = ({ id, name, weight, types, sprites }) => {
	const type = types[0].type.name as keyof typeof COLORS;
	const id_new = id.toString().padStart(3, "0");

	return (
		<Link
			to={`/pokemon/${id}`}
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
		</Link>
	);
};
