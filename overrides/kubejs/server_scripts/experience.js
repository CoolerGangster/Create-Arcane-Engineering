// Unification of XP item and fluid recipes

onEvent('tags.items', event => {
	// Tag experience items, according to the amount of experience they give
	event.add('kubejs:experience_3xp', 'create:experience_nugget')
	event.add('kubejs:experience_3xp', 'ars_nouveau:experience_gem')
	
	event.add('kubejs:experience_12xp', 'create_sa:heap_of_experience')
	event.add('kubejs:experience_12xp', 'ars_nouveau:greater_experience_gem')
	
	event.add('kubejs:experience_27xp', 'create:experience_block')
})

onEvent('recipes', event => {
	const xp_fluid_id = 'pneumaticcraft:memory_essence'
	
	// XP MELTING
	
	// Remove the basic experience nugget melting recipe from Compressed Creativity
	// (will be replaced by an 1-to-1 compatible tag-based recipe)
	event.remove({id: 'compressedcreativity:mixing/memory_essence'})
	
	
	const xp_to_mb_ratio = 20 // 1xp = 20mb of liquid experience, the ratio used by PneumaticCraft, Compressed Creativity and most Minecraft mods
	const xp_melting_point = 950 // 950 degrees C - reachable with lava, but not with existing solid fuels
	
	// Add experience melting recipes
	for (let exp_count of [3, 12, 27]) {
		let ingredient = Ingredient.of('#kubejs:experience_' + exp_count + 'xp')
		let result_fluid = Fluid.of(xp_fluid_id, exp_count * xp_to_mb_ratio)
				
		// Add an experience melting recipe to Create basins
		event.recipes.create.mixing(result_fluid, [ingredient]).heated()
		
		// Add an experience melting recipe to Tinker's Construct melters
		
		// Larger experience blocks are more time-efficient to smelt
		// The progression is similar to nuggets-ingots-blocks: 9 times the material translates to 3 times the smelting time
		let melting_time_s = 4 * Math.sqrt(exp_count / 3)
		
		event.custom({
			'type': 'tconstruct:melting',
			'ingredient': ingredient.toJson(),
			'result': result_fluid.toJson(),
			'temperature': xp_melting_point,
			'time': melting_time_s * 4
		});
	}
	
	
	// XP BOTTLING
	// Filling and draining vanilla Bottle o' Enchanting
	
	let glass_bottle = Item.of('minecraft:glass_bottle')
	let experience_bottle = Item.of('minecraft:experience_bottle')
	let bottle_xp_fluid = Fluid.of(xp_fluid_id, 250)
	
	// Replace COFH Essence of Knowledge XP fluid in the centrifuge draining recipe, for unification purposes
    event.custom({
        'type': 'thermal:centrifuge',
        'ingredient': experience_bottle.toJson(),
        'result': [glass_bottle.toJson(), bottle_xp_fluid.toJson()],
		'energy': 400
    }).id('thermal:machines/centrifuge/centrifuge_experience_bottle')
	
	// Using a Tinker's Construct casting table to fill a Bottle of Enchanting
	event.custom({
		'type': 'tconstruct:casting_table',
		'cast': glass_bottle.toJson(),
		'cast_consumed': true,
		'fluid': {'tag': 'forge:experience', 'amount': 250},
		'result': experience_bottle.toJson(),
		'cooling_time': 0
	})
	
	// Using a Create drain to drain a Bottle of Enchanting
	event.recipes.create.emptying([glass_bottle, bottle_xp_fluid], experience_bottle)
	
	// Using a Create spout to fill a Bottle of Enchanting
	event.recipes.create.filling(experience_bottle, [glass_bottle, bottle_xp_fluid])
	
	
	// XP CASTING
	// Using Tinker's Construct tables and basins to produce Create experience nuggets and blocks
	
	// Experience nugget casting (gold and sand casts)
	event.custom({
		'type': 'tconstruct:casting_table',
		'cast': {'tag': 'tconstruct:casts/multi_use/nugget'},
		'cast_consumed': false,
		'fluid': {'tag': 'forge:experience', 'amount': 3 * xp_to_mb_ratio},
		'result': 'create:experience_nugget',
		'cooling_time': 4 * 20
	})
	event.custom({
		'type': 'tconstruct:casting_table',
		'cast': {'tag': 'tconstruct:casts/single_use/nugget'},
		'cast_consumed': true,
		'fluid': {'tag': 'forge:experience', 'amount': 3 * xp_to_mb_ratio},
		'result': 'create:experience_nugget',
		'cooling_time': 4 * 20
	})
	
	// Experience block casting
	event.custom({
		'type': 'tconstruct:casting_basin',
		'fluid': {'tag': 'forge:experience', 'amount': 27 * xp_to_mb_ratio},
		'result': Item.of('create:experience_block').toJson(),
		'cooling_time': 12 * 20
	})
})
