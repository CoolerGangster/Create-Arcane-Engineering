onEvent('item.right_click', event =>{
	if (event.item == 'forbidden_arcanus:orb_of_temporary_flight'){
		if (!event.player.creativeMode) {
			event.player.give('pneumaticcraft:spawner_core_shell')
		}
	}
})
onEvent('block.right_click', event =>{
    if (event.block.id == 'cae:skystone_catalyst' && event.item.id == "minecraft:wooden_axe") {
        event.block.set('air')
        event.block.offset(0,10,0).set('cae:skystone_catalyst')
    }  
	if (event.item == "pneumaticcraft:pneumatic_wrench" && event.block.id.startsWith("create:")) {
		event.player.statusMessage = 'We\'ve prevented this item from interacting with Create components due to a possible Crash.'
		event.cancel()
	}
})