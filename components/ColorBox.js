import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({ color, hexCode }) => {
	const boxColor = {
		backgroundColor: hexCode,
	}

	const textColor = {
		color:
			parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
				? 'black'
				: 'white',
	}

	return (
		<View style={[styles.box, boxColor]}>
			<Text style={[styles.text, textColor]}>
				{color}: {hexCode}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		padding: 10,
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 1,
		elevation: 2,
	},
	text: {
		fontWeight: 'bold',
		color: 'white',
	},
})

export default ColorBox