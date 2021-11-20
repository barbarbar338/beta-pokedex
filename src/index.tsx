import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import HomePage from "./pages";
import { Pokemon } from "./pages/Pokemon";

render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/pokemon/:id" element={<Pokemon />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById("root"),
);
