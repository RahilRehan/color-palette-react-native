import React from 'react'
import ColorBox from '../components/ColorBox'
import { StyleSheet, FlatList } from 'react-native'

const ColorPalette = ({ route }) => {
	const { colors } = route.params

	return (
		<FlatList
			style={styles.container}
			data={colors}
			keyExtractor={(item) => item.colorName}
			renderItem={({ item }) => (
				<ColorBox
					color={item.colorName}
					hexCode={item.hexCode}
				></ColorBox>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingHorizontal: 10,
		backgroundColor: 'white',
	},
})

export default ColorPalette
