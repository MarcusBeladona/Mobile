import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default () => {
	const [numero1, setnumero1] = useState(0);
	const [numero2, setnumero2] = useState(0);
	const [resultado, setresultado] = useState(0);

	return (
		<View style={estilos.container}>
			<View style={estilos.card}>
				<View>
					<TextInput
						style={estilos.input}
						onChangeText={input => {
							setnumero1(input);
						}}
						placeholder=" "
					></TextInput>
					<TextInput
						style={estilos.input}
						onChangeText={input => {
							setnumero2(input);
						}}
						placeholder=" "
					></TextInput>
				</View>
				<View style={estilos.botoes}>
					<TouchableOpacity
						style={estilos.botao}
						onPress={() => {
							setresultado(parseInt(numero1) + parseInt(numero2));
						}}
					>
						+
					</TouchableOpacity>
					<TouchableOpacity
						style={estilos.botao}
						onPress={() => {
							setresultado(parseInt(numero1) - parseInt(numero2));
						}}
					>
						-
					</TouchableOpacity>
					<TouchableOpacity
						style={estilos.botao}
						onPress={() => {
							let resultado = parseInt(numero1) / parseInt(numero2);
							setresultado(resultado.toFixed(2));
						}}
					>
						/
					</TouchableOpacity>
					<TouchableOpacity
						style={estilos.botao}
						onPress={() => {
							setresultado(parseInt(numero1) * parseInt(numero2));
						}}
					>
						*
					</TouchableOpacity>
				</View>
				<View style={estilos.result}>
					<Text>{resultado}</Text>
				</View>
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
	card: { height: "fit-content", width: "fit-content", borderRadius: 12, padding: 16, backgroundColor: "#eee" },
	item: {
		lineHeight: 24,
	},
	input: {
		padding: 8,
		borderRadius: 4,
		backgroundColor: "#fff",
		borderColor: "#ddd",
		borderStyle: "solid",
		borderWidth: 1,
		marginBottom: 16,
	},
	botoes: {
		flex: 1,
		justifyContent: "space-between",
		flexDirection: "row",
	},
	botao: {
		backgroundColor: "blue",
		padding: 8,
		borderRadius: 4,
		alignItems: "center",
		width: "20%",
		color: "#fff",
	},
	result: {
		justifyContent: "center",
		alignContent: "center",
		backgroundColor: "#fff",
		borderRadius: 4,
		padding: 16,
		marginTop: 16,
	},
});
