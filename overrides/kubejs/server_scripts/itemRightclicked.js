onEvent('item.right_click', event =>{
	if (event.item == 'forbidden_arcanus:orb_of_temporary_flight'){
		if (!event.player.creativeMode) {
			event.player.give('pneumaticcraft:spawner_core_shell')
		}
	}
})
onEvent('block.right_click', event =>{
	if (event.item.id == "kubejs:runic_tablet" && event.block.entityId == "minecraft:air" && event.block.id != "minecraft:crafting_table") {
		if (!event.player.creativeMode) {event.item.count--}
		let lightning = event.block.createEntity("forbidden_arcanus:crimson_lightning_bolt")
		lightning.spawn()
	}
    if (event.block.id == 'cae:skystone_catalyst' && event.item.id == "minecraft:wooden_axe") {
        event.block.set('air')
        event.block.offset(0,10,0).set('cae:skystone_catalyst')
    }  
	if (event.item == "pneumaticcraft:pneumatic_wrench" && event.block.id.startsWith("create:")) {
		event.player.statusMessage = 'We\'ve prevented this item from interacting with Create components due to a possible Crash.'
		event.cancel()
	}
	if (event.item.id.includes("gavel") && event.block.id == "forbidden_arcanus:hephaestus_forge") {
        event.item.nbt.putInt("RemainingRitualUses", 256)
        let data = event.block.entityData
        data.Essences.Corruption = 0
        event.block.mergeEntityData(data) //why do i have to merge the entire data :/
    }
	// Prevent Straw duping because it's annoying!
	if (event.item == "createaddition:straw" && event.block.id == 'create:blaze_burner') {
		if (!event.player.creativeMode) {
			event.item.count--
		}
	}
})