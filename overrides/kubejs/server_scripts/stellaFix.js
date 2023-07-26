//priority: 0
// Items with an eternal stella applied break in recipes. Hacky fix to also apply unbreakable to those items when closing a smithing table GUI

onEvent('player.inventory.closed', event =>{
	event.player.tell(event.getInventoryContainer().getType().registryName)
	if (event.inventoryContainer.type.registryName != "minecraft:smithing") {return}
	event.player.tell("Check")
	event.player.inventory.minecraftInventory.forEach(item =>{
		if (Item.of(item).getNbtString().includes("Repair:1b") && !Item.of(item).getNbtString().includes("Unbreakable:1b")) {
			event.player.tell(item)
			let data = Item.of(item).nbt
			data.Unbreakable = true
			Item.of(item).setNbt(data)
		}
	})
})