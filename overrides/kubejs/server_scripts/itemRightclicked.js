//priority: 1000
function distance(vector){
	let x = vector.x * vector.x + vector.y * vector.y + vector.z * vector.z
	return Math.floor(Math.sqrt(x))
}
onEvent('item.right_click', event =>{
	if (event.item == 'forbidden_arcanus:orb_of_temporary_flight'){
		if (!event.player.creativeMode) {
			event.player.give('pneumaticcraft:spawner_core_shell')
		}
	}
})
let arcaneblox = ['forbidden_arcanus:arcane_polished_darkstone',"forbidden_arcanus:arcane_crystal_block"]
let dontIDparts = ["integratedtunnels:part_importer_item","integratedtunnels:part_interface_item","integratedtunnels:part_exporter_item"]
let dontIDcomponents = ["integratedtunnels:importer_item","integratedtunnels:interface_item","integratedtunnels:exporter_item"]
let nonoIDArray = ["create:basin","create:depot","create:chute","create:smart_chute","create:andesite_tunnel","create:brass_tunnel","create:belt"]
function getdirx(text){
	if(text == "north") return 0;
	if(text == "east") return 1;
	if(text == "south") return 0;
	if(text == "west") return -1;
	if(text == "up") return 0;
	if(text == "down") return 0;
}
function getdiry(text){
	if(text == "north") return 0;
	if(text == "east") return 0;
	if(text == "south") return 0;
	if(text == "west") return 0;
	if(text == "up") return 1;
	if(text == "down") return -1;
}
function getdirz(text){
	if(text =="north") return -1;
	if(text == "east") return 0;
	if(text == "south") return 1;
	if(text == "west") return 0;
	if(text == "up") return 0;
	if(text == "down") return 0;
}
function dirtostr(x,y,z){
	if(x == 0 && y== 0 && z == -1){ return "north"};
	if(x == 1 && y== 0 && z == 0){ return "east"};
	if(x == 0 && y== 0 && z == 1){ return "south"}; 
	if(x == -1 && y== 0 && z == 0){ return "west"};
	if(x == 0 && y== 1 && z == 0){ return "up"};
	if(x == 0 && y== -1 && z == 0){ return "down"};
}
function cloudCheck(event){
	let truofal = false
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			
			for (let k = -1; k < 2; k++) {
				if((i != 0 && j ==0 && k ==0) || (i == 0 && j !=0 && k ==0) || (i == 0 && j ==0 && k !=0) ){
	
				if(event.block.offset(i,j,k).id == "integrateddynamics:cable"){
					event.block.offset(i,j,k).entityData.partContainer.parts.forEach(thing =>{ 

						if(dontIDcomponents.includes(thing.__partType) && thing.__side == dirtostr(i*-1,j*-1,k*-1)){truofal=true}
					})
				}
				}
			}
			
		}
		
	}
	return truofal
}
onEvent('block.place',event =>{
	if (nonoIDArray.includes(event.block.id)) {
		if(cloudCheck(event)){
			event.level.getEntities('@e[type=minecraft:player]').forEach(player =>{
				let playerpos = new Vec3i(player.x,player.y,player.z)
				let blockpos = new Vec3i(event.block.x,event.block.y,event.block.z)

				if(distance(playerpos.subtract(blockpos)) < 10){
					player.tell( Text.red('We Highly Recommend not connecting these ID parts to these Blocks, as they are known to cause a lot of lag most of the time. Only keep it if you know what you are doing.'))
					
				}
			})
			
		}
	}
})
let itemcounter = 0
onEvent('block.right_click', event =>{

	if (dontIDparts.includes(event.item.id) && nonoIDArray.includes(event.block.id)) {
		event.player.tell( Text.red('We Highly Recommend not connecting these ID parts to these Blocks, as they are known to cause a lot of lag most of the time. Only keep it if you know what you are doing.'))
	
	}
	
	
	if (dontIDparts.includes(event.item.id)) {
		let letext = event.facing
		if(nonoIDArray.includes(event.block.offset(getdirx(letext),getdiry(letext),getdirz(letext)).id)){
			event.player.tell( Text.red('We Highly Recommend not connecting these ID parts to these Blocks, as they are known to cause a lot of lag most of the time. Only keep it if you know what you are doing.'))
	
		}
	}
	
	if (event.item.id == "kubejs:runic_tablet" && event.block.entityId == "minecraft:air" && event.block.id != "minecraft:crafting_table") {
		if (!event.player.creativeMode) {event.item.count--}
		let lightning = event.block.createEntity("forbidden_arcanus:crimson_lightning_bolt")
		lightning.spawn()
	}
	if(event.player.name.text == "FortnitePro420Xx" && event.item.id == "minecraft:apple"){
		//this is not to be annoying and hack your servers. Its just for debugging, I actually dont care about your server (newsflash) just disable this line if you are a concerned owner :)
		event.server.runCommandSilent(`playsound cae:developer player @e[type=player] ${event.player.x} ${event.player.y} ${event.player.z}`)
	}
    if (event.block.id == 'cae:skystone_catalyst' && event.item.id == "minecraft:wooden_axe") {
        event.block.set('air')
        event.block.offset(0,10,0).set('cae:skystone_catalyst')
    }  
	 if (event.block.id == 'minecraft:cartography_table' && event.item.id == "kubejs:portal_actuation_fluid_bucket") {
        event.block.set('air')
        event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot cae:temple`)
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


			event.server.scheduleInTicks(3, c => {
				if (c.server.getLevel(event.level.dimension).getBlock(event.block.x, event.block.y, event.block.z).entityData.Ritual.Counter == 3){
					c.server.runCommandSilent(`playsound cae:forge_start block @e[type=player] ${event.block.x} ${event.block.y} ${event.block.z}`)
				}
			})
		
		
    }
	// Prevent Straw duping because it's annoying!
	if (event.item.id == "createaddition:straw" && event.block.id == 'create:blaze_burner' && event.level.dimension != 'cae:void') {
		if (!event.player.creativeMode) {
			event.block.set('createaddition:liquid_blaze_burner')
			event.item.count--
		}
	}
	
	if(event.item == "forbidden_arcanus:mundabitur_dust" && arcaneblox.includes(event.block.id)){
		

		if(event.block.id == arcaneblox[0]){
			if (event.block.offset(0,1,0).id == arcaneblox[1] && event.block.offset(0,2,0).id == arcaneblox[1]){
				event.server.runCommandSilent(`playsound cae:arcane_obelisk_creation block @e[type=player] ${event.block.x} ${event.block.y} ${event.block.z}`)
		
			}
		}
		if(event.block.id == arcaneblox[1]){
			if (event.block.offset(0,-1,0).id == arcaneblox[0] && event.block.offset(0,1,0).id == arcaneblox[1]){
				event.server.runCommandSilent(`playsound cae:arcane_obelisk_creation block @e[type=player] ${event.block.x} ${event.block.y} ${event.block.z}`)

			}else if (event.block.offset(0,-1,0).id == arcaneblox[1] && event.block.offset(0,-2,0).id == arcaneblox[0]){
				event.server.runCommandSilent(`playsound cae:arcane_obelisk_creation block @e[type=player] ${event.block.x} ${event.block.y} ${event.block.z}`)

			}
		}

	}



})