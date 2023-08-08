//priority: 0
// Items with an eternal stella applied break in recipes. Hacky fix to also apply unbreakable to those items when closing a smithing table GUI

onEvent('player.inventory.closed', event =>{
	if (event.inventoryContainer.getClass().getSimpleName() != "SmithingMenu") {return}
	event.player.inventory.minecraftInventory.forEach(item =>{
		if (Item.of(item).getNbtString().includes("Modifier:\"forbidden_arcanus:eternal\"") && !Item.of(item).getNbtString().includes("Unbreakable:1b")) {
			let data = Item.of(item).nbt
			data.Unbreakable = true
			Item.of(item).setNbt(data)
		}
	})
})