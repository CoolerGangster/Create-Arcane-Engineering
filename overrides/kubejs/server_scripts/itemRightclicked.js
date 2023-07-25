onEvent('item.right_click', event =>{
	if (event.item == 'forbidden_arcanus:orb_of_temporary_flight'){
		if (!event.player.creativeMode) {
			event.item.setCount(event.item.getCount()-1)
			event.player.give('pneumaticcraft:spawner_core_shell')
		}
	}
})