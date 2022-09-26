import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Votar = () => {
	const [quixeramobim, setQuixeramobim] = useState(0);
	const [quixada, setQuixada] = useState(0);
	const [caninde, setCaninde] = useState(0);
	const [resultado, setResultado] = useState(null);

	function mostrarResultado() {
		let resultado = "";
		if (quixeramobim > quixada && quixeramobim > caninde) {
			resultado = "Quixeramobim";
		} else if (quixada > quixeramobim && quixada > caninde) {
			resultado = "Quixadá";
		} else if (caninde > quixeramobim && caninde > quixada) {
			resultado = "Canindé";
		} else resultado = "Empate";

		setResultado(<Text style={{ fontSize: 28 }}>{resultado}</Text>);
	}

	return (
		<View style={estilo.container}>
			<View style={estilo.botoes}>
				<View style={estilo.botao}>
					<Button
						title="Quixeramobim"
						onPress={() => {
							setQuixeramobim(quixeramobim + 1);
						}}
					></Button>
					<Text style={{ marginTop: 16 }}>Votos: {quixeramobim}</Text>
				</View>
				<View style={estilo.botao}>
					<Button
						title="Quixadá"
						onPress={() => {
							setQuixada(quixada + 1);
						}}
					></Button>
					<Text style={{ marginTop: 16 }}>Votos: {quixada}</Text>
				</View>
				<View style={estilo.botao}>
					<Button
						title="Canindé"
						onPress={() => {
							setCaninde(caninde + 1);
						}}
					></Button>
					<Text style={{ marginTop: 16 }}>Votos: {caninde}</Text>
				</View>
			</View>

			<View style={estilo.votos}>
				<Button title="Mostrar Resultado" onPress={mostrarResultado}></Button>
			</View>

			<View style={estilo.resultado}>{resultado}</View>
		</View>
	);
};

const estilo = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	botoes: {
		Button: { padding: 16 },
		flexDirection: "row",
		marginTop: 24,
		alignItems: "center",
		justifyContent: "center",
		height: "auto",
	},
	votos: {
		padding: 32,
	},
	resultado: {
		padding: 16,
	},
	botao: {
		alignItems: "center",
		padding: 8,
	},
});

export default Votar;
