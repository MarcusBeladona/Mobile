import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const Estudante = ({ nome, curso, universidade }) => {
	const [aragorn, mudarAragorn] = useState(false);
	let aragornAtivo = false;

	function aumentar() {
		mudarAragorn(!aragorn);
		mostrarAragorn();
	}

	function mostrarAragorn() {
		if (aragorn) {
			return (
				<Image
					style={estilo.imagem}
					source={{ uri: "https://64.media.tumblr.com/37fc00f1b9b8d2a07ad7a54de830577c/8ad09dec9554fc66-af/s540x810/0b4c16ce38696fe296555991e6aac659c2725f4c.jpg" }}
				></Image>
			);
		}
		return null;
	}

	return (
		<View style={estilo.container}>
			<Text style={estilo.text}>Nome: {nome}</Text>
			<Text>Curso: {curso}</Text>
			<Text>Universidade: {universidade}</Text>
			<Button title={"gatinho"} onPress={aumentar}></Button>
			{mostrarAragorn()}
		</View>
	);
};

const estilo = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 28,
		color: "red",
	},
	imagem: {
		width: 200,
		height: 200,
	},
});

export default Estudante;
