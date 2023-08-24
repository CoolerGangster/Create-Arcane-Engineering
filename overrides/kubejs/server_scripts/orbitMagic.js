const ORBIT_BLOCKS = ['cae:source_time_crystal']
let blck
//values for tweaky tweaky
let addition = 0.05 //used to be +0.05 and no delay but for whatever reason that broke
let endpoint = 0.3	// this is literally just the same circle though
let delay = 1

onEvent('level.tick', event =>{
	if (event.level.getDimension() != 'minecraft:overworld') {return}
	event.level.getEntities('@e[type=minecraft:area_effect_cloud]').forEach(spell => {
		if (spell.fullNBT.ForgeCaps['cae:properties'].kubejsdoshit  == "IM ALIVE") {
			let random2 = Math.random();
			spell.block.set('air')
			let d = "minecraft:ancient_debris"
			if(spell.level.dimension == 'minecraft:overworld'){d = "minecraft:diamond"}
			if(spell.level.dimension == 'minecraft:the_nether'){d = "minecraft:ancient_debris"}
			if(spell.level.dimension == 'minecraft:the_end'){d = "minecraft:firework_rocket"}
			for (let i = 0; i < 3; i++) {

				spell.block.popItem(d)
			}
		

			spell.remove()
			return
		   }})
		event.level.getEntities('@e[type=ars_nouveau:spell_proj]').forEach(spell => {
		if (spell.fullNBT.ForgeCaps['cae:properties'].kubejsdoshit  != "doit") {
			if(spell.fullNBT.ForgeCaps['cae:properties'].kubejsdoshit  == "dontdoit"){spell.remove()}
			return
			}

			//painful block detection
			if (!spell.getTags().contains("found_block") && !spell.getTags().contains("no_block")){
				blck = spell.block;
				let size = 12 //provisional, 7x7x7 cube
				let r
				if (size % 2) {r = (size-1)/2} else {r = size/2}
				for (let a = -r; a <= r; a++) {
					for (let b = -r; b <= r; b++) {
						for (let c = -r; c <= r; c++) {
							if (ORBIT_BLOCKS.includes(blck.offset(a,b,c).id)){
								blck = blck.offset(a,b,c)
								spell.minecraftEntity.addTag("found_block")
								break
							} else if (a==b && b==c && c==r) {
								//event.server.tell("§4 ERROR: Couldnt detect an orbit Block")
								spell.setMotion(0,0,0)
								spell.minecraftEntity.hurtMarked = true
								spell.minecraftEntity.addTag("no_block")
								return
							}
						}

						if (blck.id != spell.block) {break}
					}

					if (blck.id != spell.block) {break}
				}
			}
			if (!spell.getTags().contains("orbit") && !spell.getTags().contains("no_block")) {

				let mX = 0; let mXDown = false; let circleX = true; let xPos = 0.5
				let mY = 0; let mYDown = false; let circleY	= true; let yPos = 0.5
				let mZ = 0; let mZDown = false; let circleZ = true; let zPos = 0.5
				let Armorstand = blck.createEntity("area_effect_cloud")
			   // Armorstand.Duration = 300
				Armorstand.spawn()

				spell.setMotion(0,0,0);
				spell.minecraftEntity.hurtMarked = true;
				let random = Math.random();
				if (random <= 1/6) {blck = blck.offset("down", -1); xPos = 0.35; yPos = 0.3; mX = -0.3; mY = 0; circleZ = false; mYDown = true}
				else if (random <= 2/6) {blck = blck.offset("up", -1); xPos = 0.35; yPos = 0.5; mX = -0.3; mY = 0; circleZ = false}
				else if (random <= 3/6) {blck = blck.offset("east", -1); xPos = 0.6; yPos = 0.4; zPos = 0.35; mX = 0; mZ = -0.3; circleY = false}
				else if (random <= 4/6) {blck = blck.offset("west", -1); xPos = 0.375; yPos = 0.4; zPos = 0.35; mX = 0; mZ = -0.3; circleY = false; mXDown = true}
				else if (random <= 5/6) {blck = blck.offset("north", -1); yPos = 0.25; zPos = 0.4; mY = -0.3; mZ = 0; circleX = false; mZDown=true}
				else {blck = blck.offset("south", -1); yPos = 0.25; zPos = 0.6; mY = -0.3; mZ = 0; circleX = false}

				spell.setPosition((blck.getX() + xPos), (blck.getY() + yPos), (blck.getZ() + zPos));
				spell.mergeFullNBT('{pierce: 600}') //otherwise the client doesnt properly get updated on the new position of the spell
				spell.minecraftEntity.addTag("orbit");
				spell.nbt.putBoolean("circleX", circleX);
				spell.nbt.putBoolean("circleY", circleY);
				spell.nbt.putBoolean("circleZ", circleZ);
				spell.nbt.putDouble("mX", mX);
				spell.nbt.putDouble("mY", mY);
				spell.nbt.putDouble("mZ", mZ);
				spell.nbt.putBoolean("mXDown", mXDown);
				spell.nbt.putBoolean("mYDown", mYDown);
				spell.nbt.putBoolean("mZDown", mZDown);
				spell.minecraftEntity.hurtMarked = true
				spell.nbt.putDouble("delay", 0)
			}
	})
	event.level.getEntities('@e[type=ars_nouveau:spell_proj]').forEach(spell => {
		if (spell.getTags().contains("orbit")){
			spell.nbt.putDouble("delay", spell.nbt.getDouble("delay")+1)
			if (spell.nbt.getDouble("delay") >= delay) {
				spell.nbt.putDouble("delay", 0)
				//X
				if (spell.nbt.getBoolean("circleX")){
					if (spell.nbt.getBoolean("mXDown")) {spell.nbt.putDouble("mX", spell.nbt.getDouble("mX") - addition)}
					else {spell.nbt.putDouble("mX", spell.nbt.getDouble("mX") + addition)}
					if (spell.nbt.getDouble("mX") >= endpoint) {spell.nbt.putBoolean("mXDown", true)}
					else if (spell.nbt.getDouble("mX") <= -endpoint) {spell.nbt.putBoolean("mXDown", false)}
				}
				//Y
				if (spell.nbt.getBoolean("circleY")){
					if (spell.nbt.getBoolean("mYDown")) {spell.nbt.putDouble("mY", spell.nbt.getDouble("mY") - addition)}
					else {spell.nbt.putDouble("mY", spell.nbt.getDouble("mY") + addition)}
					if (spell.nbt.getDouble("mY") >= endpoint) {spell.nbt.putBoolean("mYDown", true)}
					else if (spell.nbt.getDouble("mY") <= -endpoint) {spell.nbt.putBoolean("mYDown", false)}
				}
				//Z
				if (spell.nbt.getBoolean("circleZ")){
					if (spell.nbt.getBoolean("mZDown")) {spell.nbt.putDouble("mZ", spell.nbt.getDouble("mZ") - addition)}
					else {spell.nbt.putDouble("mZ", spell.nbt.getDouble("mZ") + addition)}
					if (spell.nbt.getDouble("mZ") >= endpoint) {spell.nbt.putBoolean("mZDown", true)}
					else if (spell.nbt.getDouble("mZ") <= -endpoint) {spell.nbt.putBoolean("mZDown", false)}
				}
				spell.setMotion(spell.nbt.getDouble("mX"), spell.nbt.getDouble("mY"), spell.nbt.getDouble("mZ"))
				//event.server.tell("§rmX:§3  " + spell.nbt.getDouble("mX") + "  §rmY:§3  " + spell.nbt.getDouble("mY") + "  §rmZ:§3  " + spell.nbt.getDouble("mZ"))
				spell.minecraftEntity.hurtMarked = true
			}

		}
	})
})	