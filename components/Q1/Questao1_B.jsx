import { StyleSheet, Text, View } from "react-native";

export default () => {
	const disciplinas = ["Projeto 4", "Mobile", "Desenho 2", "Design e Inovação", "CDP"];

	const disciplinasView = disciplinas.map((disciplina, index) => {
		return (
			<Text key={index} style={styles.item}>
				{disciplina}
			</Text>
		);
	});

	return <View style={styles.container}>{disciplinasView}</View>;
};
const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 16,
	},
	item: {
		lineHeight: 24,
	},
});
