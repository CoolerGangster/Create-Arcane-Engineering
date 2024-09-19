// Fixes variant iron bars added by Chipped and Immersive Weathering being incompatible with PneumaticCraft electrostatic compressors

onEvent('tags.blocks', event => {
	
	// Immersive Weathering rusted and waxed iron bars
	event.add('pneumaticcraft:electrostatic_grid', 'immersive_weathering:exposed_iron_bars')
	event.add('pneumaticcraft:electrostatic_grid', 'immersive_weathering:weathered_iron_bars')
	event.add('pneumaticcraft:electrostatic_grid', 'immersive_weathering:rusted_iron_bars')

	event.add('pneumaticcraft:electrostatic_grid', 'immersive_weathering:waxed_iron_bars')
	event.add('pneumaticcraft:electrostatic_grid', 'immersive_weathering:waxed_exposed_iron_bars')
	event.add('pneumaticcraft:electrostatic_grid', 'immersive_weathering:waxed_weathered_iron_bars')
	event.add('pneumaticcraft:electrostatic_grid', 'immersive_weathering:waxed_rusted_iron_bars')
	
	// Chipped iron bars variants
	const stones = event.get('chipped:iron_bars').getObjectIds()
	stones.forEach(i => {
		event.add('pneumaticcraft:electrostatic_grid', i)
	})
	
	// Immersive Engineering steel fences - used by IE's own lightning rods
	// (this does nothing if IE is not installed)
	event.add('pneumaticcraft:electrostatic_grid', 'immersiveengineering:steel_fence')

})