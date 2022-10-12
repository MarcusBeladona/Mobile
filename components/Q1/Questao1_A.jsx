import { StyleSheet, Text, View } from "react-native";

export default ({ nome, sobrenome, curso }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.item}>Nome: {nome}</Text>
			<Text style={styles.item}>Sobrenome: {sobrenome}</Text>
			<Text style={styles.item}>Curso: {curso}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		borderBottomColor: "#ddd",
		borderColor: "transparent",
		borderStyle: "solid",
		borderWidth: 1,
	},
	item: {
		lineHeight: 24,
	},
});
