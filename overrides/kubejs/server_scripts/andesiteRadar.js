global.cooldown = 0;
onEvent('server.tick', event =>{
	if(global.cooldown > 0){
		global.cooldown--
	}
})

onEvent('block.right_click', event =>{
    if (event.item == 'kubejs:alloy_radar' && global.cooldown != 0){
        event.player.tell(Text.red('Radar is on cooldown'))
		event.player.tell(Text.green(global.cooldown/20 + " seconds left."))
    }
	if (event.item == 'kubejs:alloy_radar' && global.cooldown == 0){
        global.cooldown = 60;
		let andesite = true;
		let diorite = true;
		for (let x = -8; x <= 9; x++) {
			for (let y = -50; y <= 200; y++) {
				for (let z = -8; z <= 9; z++) {
					if (andesite) {
                        if (event.block.offset(x,y,z).id == 'minecraft:andesite'){
						    event.player.tell("Andesite found at: "+ event.block.offset(x,y,z).getPos())
						    andesite = false;
                        } else if (diorite) {
                            if (event.block.offset(x,y,z).id == 'minecraft:diorite'){
						        event.player.tell("Diorite found at: "+ event.block.offset(x,y,z).getPos())
						        diorite = false;
                            }
                        }
					} else if (diorite) {
                        if (event.block.offset(x,y,z).id == 'minecraft:diorite'){
						    event.player.tell("Diorite found at: "+ event.block.offset(x,y,z).getPos())
						    diorite = false;
                        }
					} else {return}
				}
			}
		}
		if (andesite && diorite){
			event.player.tell(Text.yellow("Nothing found in Chunk"))
		}
	}
	
})
onEvent('recipes', event =>{
	event.shaped("kubejs:alloy_radar",["SIS", " S ", " S "],{I: "minecraft:iron_ingot", S: "minecraft:stick"})
})
