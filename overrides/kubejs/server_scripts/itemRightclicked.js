onEvent('item.right_click', event =>{
	if (event.item == 'forbidden_arcanus:orb_of_temporary_flight'){
		if (!event.player.creativeMode) {
			event.item.setCount(event.item.getCount()-1)
			event.player.give('pneumaticcraft:spawner_core_shell')
		}
	}
})
onEvent('block.right_click', event =>{
    if (event.block.id == 'cae:skystone_catalyst' && event.item.id == "minecraft:wooden_axe") {
        event.block.set('air')
        event.block.offset(0,10,0).set('cae:skystone_catalyst')
    }  
})