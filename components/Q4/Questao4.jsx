import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default () => {
	let link = "https://restcountries.com/v2/region/africa?fields=name,population";
	const [listapaises, setlistapaises] = useState([]);
	let paisestext = [];

	useEffect(() => {
		fetch(link).then(res => res.json().then(res => setlistapaises(res)));
	}, []);

	listapaises.sort((a, b) => {
		return b.population - a.population;
	});

	paisestext = listapaises.map((item, index) => {
		return (
			<Text key={index} style={estilos.item}>
				{item.name}
			</Text>
		);
	});

	return (
		<View style={estilos.container}>
			<View style={estilos.card}>
				<View style={estilos.header}>
					<Text style={estilos.titulo}>Países da África</Text>
					<Text style={estilos.subtitulo}>Ordenados por População</Text>
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
});
