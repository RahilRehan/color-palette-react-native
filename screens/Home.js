import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import PalettePreview from '../components/PalettePreview'

const SOLARIZED = [
	{ colorName: 'Base03', hexCode: '#002b36' },
	{ colorName: 'Base02', hexCode: '#073642' },
	{ colorName: 'Base01', hexCode: '#586e75' },
	{ colorName: 'Base00', hexCode: '#657b83' },
	{ colorName: 'Base0', hexCode: '#839496' },
]

const RAINBOW = [
	{ colorName: 'Red', hexCode: '#FF0000' },
	{ colorName: 'Orange', hexCode: '#FF7F00' },
	{ colorName: 'Yellow', hexCode: '#FFFF00' },
	{ colorName: 'Green', hexCode: '#00FF00' },
	{ colorName: 'Violet', hexCode: '#8B00FF' },
]

const FRONTEND_MASTERS = [
	{ colorName: 'Red', hexCode: '#c02d28' },
	{ colorName: 'Black', hexCode: '#3e3e3e' },
	{ colorName: 'Grey', hexCode: '#8a8a8a' },
	{ colorName: 'White', hexCode: '#ffffff' },
	{ colorName: 'Orange', hexCode: '#e66225' },
]

const COLOR_PALETTES = [
	{ paletteName: 'Solarized', colors: SOLARIZED },
	{ paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
	{ paletteName: 'Rainbow', colors: RAINBOW },
]

const Home = ({ navigation }) => {
	return (
		<FlatList
			style={styles.list}
			data={COLOR_PALETTES}
			keyExtractor={(item) => item.paletteName}
			renderItem={({ item }) => (
				<PalettePreview
					handlePress={() =>
						navigation.navigate('ColorPalette', item)
					}
					colorPalette={item}
				/>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	list: {
		padding: 10,
		backgroundColor: 'white',
	},
})

export default Home
