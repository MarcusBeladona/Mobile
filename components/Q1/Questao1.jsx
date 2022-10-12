import { StyleSheet, View } from "react-native";

export default props => {
	return (
		<View style={styles.container}>
			<View style={styles.card}>{props.children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	card: {
		borderRadius: 12,
		width: "fit-content",
		height: "fit-content",
		backgroundColor: "#eee",
		alignItems: "center",
		justifyContent: "center",
	},
});
