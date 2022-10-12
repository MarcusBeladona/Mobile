import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default () => {
	const [listapokemon, setlistapokemon] = useState([]);
	const [offset, setoffset] = useState(0);
	let link = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + offset;
	let pokenames = [];

	useEffect(() => {
		fetch(link).then(res => res.json().then(res => setlistapokemon(res.results)));
	}, [offset]);

	listapokemon.map((item, index) =>
		pokenames.push(
			<Text key={index} style={estilos.item}>
				{item.name}
			</Text>
		)
	);

	return (
		<View style={estilos.container}>
			<View style={estilos.card}>
				<View style={estilos.area}>{pokenames}</View>
				<Button
					onPress={() => {
						setoffset(offset + 10);
					}}
					title="Próximos"
				></Button>
			</View>
		</View>
	);
};

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		height: "fit-content",
		width: 200,
		borderRadius: 12,
		padding: 16,
		backgroundColor: "#eee",
	},
	item: {
		lineHeight: 24,
	},
	area: {
		marginBottom: 16,
	},
});
