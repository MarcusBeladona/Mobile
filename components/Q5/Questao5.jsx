import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default () => {
	const [codigo, setcodigo] = useState("africa");
	let link = `https://restcountries.com/v2/region/${codigo}?fields=name,population`;
	const [listapaises, setlistapaises] = useState([]);
	const [tipo, setTipo] = useState("Decrescente");
	let paisestext = [];

	useEffect(() => {
		fetch(link).then(res => res.json().then(res => setlistapaises(res)));
	}, [codigo]);

	listapaises.sort((a, b) => {
		if (tipo == "Decrescente") {
			return b.population - a.population;
		} else if (tipo == "Crescente") {
			return a.population - b.population;
		}
	});

	paisestext = listapaises.map((item, index) => {
		return (
			<Text key={index} style={estilos.item}>
				{item.name} {item.population}
			</Text>
		);
	});

	return (
		<View style={estilos.container}>
			<View style={estilos.card}>
				<View style={estilos.header}>
					<Text style={estilos.titulo}>Países {tipo}</Text>
					<View style={estilos.botoes}>
						<Button
							title="África"
							onPress={() => {
								setcodigo("africa");
								setTipo("Decrescente");
							}}
						></Button>
						<Button
							title="Américas"
							onPress={() => {
								setcodigo("americas");
								setTipo("Decrescente");
							}}
						></Button>
						<Button
							title="Ásia"
							onPress={() => {
								setcodigo("asia");
								setTipo("Crescente");
							}}
						></Button>
					</View>
				</View>
				<View style={estilos.area}>{paisestext}</View>
			</View>
		</View>
	);
};

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		padding: 48,
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		height: "fit-content",
		width: "fit-content",
		borderRadius: 12,
		padding: 16,
		backgroundColor: "#eee",
	},
	item: {
		lineHeight: 24,
	},
	header: {
		marginBottom: 32,
	},
	area: {
		marginBottom: 16,
	},
	titulo: {
		fontSize: 24,
	},
	subtitulo: {
		fontSize: 20,
	},
	botoes: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
