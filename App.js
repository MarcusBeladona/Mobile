import { StyleSheet } from "react-native";

import Questao1 from "./components/Q1/Questao1";
import Questao1_A from "./components/Q1/Questao1_A";
import Questao1_B from "./components/Q1/Questao1_B";

import Questao2 from "./components/Q2/Questao2";
import Questao3 from "./components/Q3/Questao3";
import Questao4 from "./components/Q4/Questao4";
import Questao5 from "./components/Q5/Questao5";

export default function App() {
	return (
		<Questao1>
			<Questao1_A nome="Marcus" sobrenome="Beladona" curso="Design Digital"></Questao1_A>
			<Questao1_B></Questao1_B>
		</Questao1>

		/* <Questao2 /> */

		/* <Questao3 /> */

		/* <Questao4 /> */

		/* <Questao5 /> */
	);
}
