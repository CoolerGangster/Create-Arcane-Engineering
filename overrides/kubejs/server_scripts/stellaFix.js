//priority: 0
// Items with an eternal stella applied break in recipes. Hacky fix to also apply unbreakable to those items when closing a smithing table GUI

onEvent('player.inventory.closed', event =>{
	//if (event.inventoryContainer.type.registryName != "minecraft:smithing") {return} //Bunch of errors, if anyone knows a way to check for an inventory please let me know
	event.player.inventory.minecraftInventory.forEach(item =>{
		if (Item.of(item).getNbtString().includes("Repair:1b") && !Item.of(item).getNbtString().includes("Unbreakable:1b")) {
			let data = Item.of(item).nbt
			data.Unbreakable = true
			Item.of(item).setNbt(data)
		}
	})
})