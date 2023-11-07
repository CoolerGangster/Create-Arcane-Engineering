function advRound (number, digits) {
    let multiplier = digits ? 10 ** digits : 100
    return Math.round(number*multiplier)/multiplier
}
onEvent('player.advancement', event => {
    if (event.advancement.toString() == "cae:end"){
        event.server.runCommandSilent(`execute in minecraft:overworld run tp ${event.player.name.text} 0 200 0`)
        event.server.runCommandSilent(`effect give ${event.player.name.text} minecraft:absorption 100 100 true`)
        event.server.runCommandSilent(`ftbquests block_rewards false ${event.player.name.text}`)
        event.server.runCommandSilent(`gamemode survival ${event.player.name.text}`)
        let Time = event.player.stats.playTime
        let TimeString = advRound(Time) + "ticks"
        if (Time >= 1728000) {TimeString = advRound(Time/1728000) + " Days"}
        else if (Time >= 72000) {TimeString = advRound(Time/72000) + " Hours"}
        else if (Time >= 1200) {TimeString = advRound(Time/1200) + " Minutes"}
        else if (Time >= 20) {TimeString = advRound(Time/20) + " Seconds"}

        event.server.tell("§5 <The Arcane Gods>§6 Congratulations on finishing this pack, Engineer!\n" + (Time <= 12096000 ? "It only took you " + TimeString + "! - You were born for this!" : TimeString + " is how long you've spent - that's true dedication to the craft!"))
    }
    if (event.advancement.toString() == "cae:verycool"){
        event.server.tell(Text.lightPurple(`§k ${event.player.name.text} §r has discovered the Arcane Altar`))
        let d = { //this defines the position the structure will spawn at.
            x: 10000,
            y: 64, //this is constant, but it doesnt have to be
            z: 10000,
            id: event.player.id,
            name: event.player.name.text
        }
        event.server.runCommandSilent(`execute in cae:void run gamemode adventure ${d.name}`)
        event.server.runCommandSilent(`execute in cae:void run ftbquests block_rewards true ${d.name}`) //block quest rewards
        event.server.runCommandSilent(`effect give ${d.name} minecraft:absorption 100 100 true`)
        event.server.runCommandSilent(`execute in cae:void run clear ${d.name}`)
        event.server.runCommandSilent(`execute in cae:void run curios clear ${d.name}`)
        event.server.runCommandSilent(`effect give ${d.name} minecraft:slow_falling 50 100 true`)
        event.server.runCommandSilent(`execute in cae:void run tp ${d.name} 10026 500 10028`)
        event.server.scheduleInTicks(40, c =>{
            c.server.runCommandSilent(`execute in cae:void run setblock ${d.x} ${d.y} ${d.z} minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:start",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
            c.server.runCommandSilent(`execute in cae:void run setblock ${d.x} ${d.y - 1} ${d.z} minecraft:redstone_block`)
            c.server.runCommandSilent(`execute in cae:void run fill ${d.x} ${d.y} ${d.z} ${d.x} ${d.y - 1} ${d.z} air`)//get rid of the structure and redstone block
            c.server.runCommandSilent(`execute in cae:void run setblock 10026 69 10003 air`)
            c.server.runCommandSilent(`execute in cae:void run setblock 10026 69 10003 cae:start`)
        })
        event.server.scheduleInTicks(50, c => { //make sure the chunks are loaded before trying to set the block
            c.server.tell("<"+ d.name +">"+  " §4...Where am §k§m§dI?")

            c.server.runCommandSilent(`execute in cae:void run tp ${d.name} ${10026} ${70} ${10028}`)
            c.server.runCommandSilent(`execute in cae:void run tp ${d.name} ${10026} ${70} ${10028}`) //these numbers should be half the size of the structure, so the player and spawn ends up in the middle. will need tweaking for your structure.
            c.server.runCommandSilent(`execute in cae:void run spawnpoint ${d.name} ${d.x + 10} ${d.y + 4} ${d.z + 140}`)
        })

        // As soon as player enters the Arcane Altar, let them see the recipes and items/fluids for automating Keystones
        if (! event.player.stages.has('keystone_crafting')) {
            event.player.stages.add('keystone_crafting');
            event.player.tell("§6New Recipes have been unlocked!")
            event.server.runCommand('/title @p subtitle ["",{"text":"Your adventure into the Arcane is reaching the end!","color":"dark_aqua"}]')
            event.server.runCommand('/title @p title ["",{"text":"Congratulations Engineer!","bold":true,"underlined":true,"color":"dark_green"}]')
        }
        event.player.sendData('jei_show_stage_two', {})
    }
    if (event.advancement.toString() == "cae:start"){
        let d = { //this defines the position the strucututre will spawn at.
            x: 10000,
            y: 64, //this is constant, but it doesnt have to be
            z: 10000,
            id: event.player.id,
            name: event.player.name.text
        }

        event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
            if(player.level.dimension != "cae:void"){return;}
            event.server.runCommandSilent(`execute in cae:void run gamemode survival ${player.name.text}`)
            event.server.runCommandSilent(`effect give ${player.name.text} minecraft:absorption 100 100 true`)
            event.server.runCommandSilent(`execute in cae:void run ftbquests block_rewards true ${d.name}`) //block quest rewards
            event.server.runCommandSilent(`effect give ${player.name.text} minecraft:slow_falling 20 100 true`)
            event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31985 103 32293`)
            event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31985 103 32293`)
            event.server.runCommandSilent(`tell ${player.name.text} §6 §l You are being Watched. Automate The Keystone. And once you have a stack. Rightclick it.`)
            event.server.runCommandSilent(`execute in cae:void run spawnpoint ${player.name.text} -31985 103 32293`)
            event.server.scheduleInTicks(2, c => { c.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31985 103 32293`);})

            event.server.scheduleInTicks(1, cb => {
                cb.server.runCommandSilent(`execute in cae:void run setblock -31998 92 32279 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:eggroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                cb.server.runCommandSilent(`execute in cae:void run setblock -31998 91 32279 minecraft:redstone_block`)
                cb.server.runCommandSilent(`execute in cae:void run fill -31998 92 32279 -31998 91 32279 air`)
                cb.server.runCommandSilent(`execute in cae:void run tp ${d.name} -31985 103 32293`)
                cb.server.runCommandSilent(`execute in cae:void run tp ${d.name} -31985 103 32293`) //these numbers should be half the size of the structure, so the player and spawn ends up in the middle. will need tweaking for your structure.
                cb.server.runCommandSilent(`execute in cae:void run spawnpoint ${d.name} -31985 103 32293`)
                cb.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
        })

        // As soon as player enters the Arcane Dungeon, there's no going back, may as well see the zyzzium
        if (! event.player.stages.has('zyzzium')) {
            event.player.stages.add('zyzzium');
        }
        event.player.sendData('jei_show_stage_three', {})
    }
    if (event.advancement.toString() == "cae:arcane"){
        let d = { //this defines the position the strucututre will spawn at.
            x: 8039,
            y: 136, //this is constant, but it doesnt have to be
            z: 10147,
            id: event.player.id,
            name: event.player.name.text
        }

        event.server.runCommandSilent(`effect give ${d.name} minecraft:absorption 100 100 true`)
        event.server.runCommandSilent(`advancement revoke ${d.name} only cae:arcane`)
        event.server.runCommandSilent(`execute in cae:arcane run tp ${d.name} ${d.x} ${d.y} ${d.z}`)
        event.player.tell("§4 §n §l BEFORE ENTERING THE SUN PORTAL PUT ALL ITEMS AWAY, THEY WILL GET DESTROYED")
        event.player.tell("§4 §n §l BEFORE ENTERING THE SUN PORTAL PUT ALL ITEMS AWAY, THEY WILL GET DESTROYED")
        event.player.tell("§4 §n §l BEFORE ENTERING THE SUN PORTAL PUT ALL ITEMS AWAY, THEY WILL GET DESTROYED")
        event.player.tell("§4 §n §l BEFORE ENTERING THE SUN PORTAL PUT ALL ITEMS AWAY, THEY WILL GET DESTROYED")

        // As soon as player enters the Arcane dimension, let them see the recipes and items/fluids for God Actuation Fluid
        if (! event.player.stages.has('arcane_crafting')) {
            event.player.stages.add('arcane_crafting');
            event.player.tell("§6New Recipes have been unlocked!")
            event.server.runCommand('/title @p subtitle ["",{"text":"Your adventure into the Arcane is just beginning.","color":"dark_aqua"}]')
            event.server.runCommand('/title @p title ["",{"text":"Congratulations Engineer!","bold":true,"underlined":true,"color":"dark_green"}]')
        }
        event.player.sendData('jei_show_stage_one', {})

        event.server.scheduleInTicks(40, c => { //make sure the chunks are loaded before trying to set the block
            c.server.runCommandSilent(`execute in cae:arcane run setblock ${d.x} ${d.y} ${d.z} minecraft:water`)
            c.server.runCommandSilent(`execute in cae:arcane run setblock ${d.x} ${d.y-1} ${d.z} minecraft:soul_sand`)
            c.server.runCommandSilent(`execute in cae:arcane run setblock ${d.x} ${d.y+1} ${d.z} minecraft:air`)
            c.server.runCommandSilent(`execute in cae:arcane run tp ${d.name} ${d.x} ${d.y+1} ${d.z}`)
            c.server.runCommandSilent(`execute in cae:arcane run tp ${d.name} ${d.x} ${d.y+1} ${d.z}`)

            if (c.getServer().getLevel('cae:arcane').getBlock(8090, 110, 10047) === 'create:creative_fluid_tank') {
                c.server.runCommandSilent('execute in cae:arcane run fill 8096 105 10099 8094 105 10097 kubejs:dry_essence')
                c.server.runCommandSilent('execute in cae:arcane run fill 8089 110 10046 8089 110 10047 kubejs:soul_essence replace')
                c.server.runCommandSilent('execute in cae:arcane run setblock 8090 110 10047 create:fluid_tank{Window: 1b, Size: 1, Luminosity: 6, Boiler: {ActiveHeat: 0, Whistles: 0, Supply: 0.0f, PassiveHeat: 0b, Update: 1b, Engines: 0}, LastKnownPos: {X: 8092, Y: 110, Z: 10042}, x: 8092, ForgeCaps: {}, y: 110, Height: 1, z: 10042, id: "create:fluid_tank", TankContent: {FluidName: "kubejs:soul_essence", Amount: 2000}} replace')
                c.server.runCommandSilent('execute in cae:arcane run setblock 8145 109 10047 create:fluid_tank{Window: 1b, Size: 1, Luminosity: 6, Boiler: {ActiveHeat: 0, Whistles: 0, Supply: 0.0f, PassiveHeat: 0b, Update: 0b, Engines: 0}, LastKnownPos: {X: 8145, Y: 109, Z: 10047}, x: 8145, ForgeCaps: {}, y: 109, Height: 1, z: 10047, id: "create:fluid_tank", TankContent: {FluidName: "kubejs:ice_essence", Amount: 4000}} replace')
                c.server.runCommandSilent('execute in cae:arcane run setblock 8146 114 10098 create:fluid_tank{Window: 1b, Size: 1, Luminosity: 6, Boiler: {ActiveHeat: 0, Whistles: 0, Supply: 0.0f, PassiveHeat: 0b, Update: 0b, Engines: 0}, LastKnownPos: {X: 8146, Y: 114, Z: 10098}, x: 8146, ForgeCaps: {}, y: 114, Height: 1, z: 10098, id: "create:fluid_tank", TankContent: {FluidName: "kubejs:nature_essence", Amount: 4000}} replace')
            }
        })
    }


})

global.f = 300;
onEvent('level.tick', event => {

    if (event.level.dimension == 'cae:arcane'){
        event.level.getBlock(8117,114,10073).set("cae:stc")
        if(global.f >=1){
            event.server.runCommandSilent(`execute in cae:clearlag run forceload add 6 -8 -3 2`)
            global.f--
        } else if (event.level.getBlock(8150,24,10085).id != "minecraft:barrier"){
            let d = { //this defines the position the strucututre will spawn at.
                x: 10000,
                y: 64, //this is constant, but it doesnt have to be
                z: 10000
            }


            event.server.runCommandSilent(`execute in cae:void run forceload add 9990 10053 10065 9982`)
            event.server.runCommandSilent(`execute in cae:arcane run forceload add 8043 10135 8270 9968`)
            event.server.runCommandSilent(`execute in cae:arcane run setblock 8040 23 9985 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:sun_temple",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
            event.server.runCommandSilent(`execute in cae:arcane run setblock 8040 22 9985 minecraft:redstone_block`)
            event.server.runCommandSilent(`execute in cae:arcane run fill 8040 23 9985 8040 22 9985 air`)//get rid of the structure and redstone block
            event.level.getBlock(8117,114,10073).set("cae:stc")

            global.f = 400;
        }
    }
})


let pressed = 8
onEvent('block.right_click', event =>{
    if(event.block.id == "cae:stc"){
        if(pressed != 0){event.player.tell("The STC might be bugged. rightclick onto it "+ pressed +" times more to replace it! If you wish to reset this counter, right-click any other block"); pressed--}
        else{event.block.set("air"); pressed = 8}

    }
    else{if(event.level.dimension == "cae:arcane"){pressed = 8}}
    if(event.item.id == 'kubejs:portal_actuation_fluid_bucket'&& event.block.id == "cae:portal_core"){
        let x = event.block.x
        let y = event.block.y
        let z = event.block.z
        event.server.runCommandSilent(`execute in ${event.level.dimension} run fill ${x-7} ${y+1} ${z} ${x+7} ${y+11} ${z} cae:arcane_portal replace air`)

        event.item.setCount(0)
        event.cancel()
    }
    if(event.item.id == 'kubejs:god_actuation_fluid_bucket'&& event.block.id == "cae:void"){
        let x = event.block.x
        let y = event.block.y
        let z = event.block.z
        event.server.runCommandSilent(`execute in ${event.level.dimension} run fill ${x} ${y+1} ${z+5} ${x} ${y+11} ${z-5} cae:void_portal replace air`)
        event.item.setCount(0)
        event.cancel()
    }
})

function playerEntry (event, playerName, pos) {
    event.server.runCommandSilent(`execute in cae:void run gamemode survival ${playerName}`)
    event.server.runCommandSilent(`execute in cae:void run clear ${playerName}`)
    event.server.runCommandSilent(`execute in cae:void run curios clear ${playerName}`)
    event.server.runCommandSilent(`effect give ${playerName} minecraft:absorption 100 100 true`)
    event.server.runCommandSilent(`effect give ${playerName} minecraft:slow_falling 20 100 true`)
    event.server.runCommandSilent(`give ${playerName} forbidden_arcanus:slimec_pickaxe`)
    event.server.runCommandSilent(`execute in cae:void run tp ${playerName} ${pos.x} ${pos.y} ${pos.z}`)
    event.server.runCommandSilent(`execute in cae:void run spawnpoint ${playerName} ${pos.x} ${pos.y} ${pos.z}`)
    event.server.scheduleInTicks(2, c=>{
        c.server.runCommandSilent(`execute in cae:void run tp ${playerName} ${pos.x} ${pos.y} ${pos.z}`)
    })
}


onEvent('item.right_click', event =>{ //generating new rooms
    if (event.level.dimension != 'cae:void') {return}
    if (event.item.count == 64){
        if (event.item.id == "minecraft:barrier"){ //this is the first room so no item id shit
            event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                if (player.level.dimension != "cae:void") {return;}
                playerEntry(event, player.name.text, {x: -31985, y: 103, z: 32293})
            })
            event.server.scheduleInTicks(1, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -31998 92 32279 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:eggroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -31998 91 32279 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -31998 92 32279 -31998 91 32279 air`)
                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
        }

        if(event.item.id == "cae:soul_keystone"){
            event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                if(player.level.dimension != "cae:void"){return;}
                playerEntry(event, player.name.text, {x: -31995, y: 121, z: 32255})
            })
            event.server.scheduleInTicks(1, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -32006 87 32227 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:iceroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32006 86 32227 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -32006 87 32227 -32006 86 32227 air`)

                c.server.runCommandSilent(`execute in cae:void run setblock -31998 92 32279 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:eggroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -31998 91 32279 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -31998 92 32279 -31998 91 32279 air`)

                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
        } else if (event.item.id == "cae:ice_keystone") {
            event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                if(player.level.dimension != "cae:void"){return;}
                playerEntry(event, player.name.text, {x: -32036, y: 109, z: 32260})
            })
             event.server.scheduleInTicks(1, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -32067 93 32229 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:dryroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32067 92 32229 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -32067 93 32229 -32067 92 32229 air`)

                c.server.runCommandSilent(`execute in cae:void run setblock -32006 87 32227 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:iceroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32006 86 32227 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -32006 87 32227 -32006 86 32227 air`)

                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
        } else if (event.item.id == "cae:dry_keystone"){
            event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                if(player.level.dimension != "cae:void"){return;}
                playerEntry(event, player.name.text, {x: -32035, y: 112, z: 32204})
            })
            event.server.scheduleInTicks(1, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -32067 93 32229 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:dryroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32067 92 32229 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -32067 93 32229 -32067 92 32229 air`)

                c.server.runCommandSilent(`execute in cae:void run setblock -32058 97 32188 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:sourceroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32058 96 32188 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -32058 97 32188 -32058 96 32188 air`)

                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
        } else if (event.item.id == "cae:source_keystone"){
            event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                if(player.level.dimension != "cae:void"){return;}
                playerEntry(event, player.name.text, {x: -31996, y: 132, z: 32172})
            })
            event.server.scheduleInTicks(1, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -32049 94 32105 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:insanity",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32049 93 32105 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -32049 94 32105 -32049 93 32105 air`)

                c.server.runCommandSilent(`execute in cae:void run setblock -32058 97 32188 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:sourceroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32058 96 32188 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -32058 97 32188 -32058 96 32188 air`)

                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
        } else if (event.item.id == "cae:nature_keystone"){
            event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                if(player.level.dimension != "cae:void"){return;}

                playerEntry(event, player.name.text, {x: -32065, y: 119, z: 32118})
                event.server.runCommandSilent(`execute in cae:void run gamemode adventure ${player.name.text}`)
            })
            event.server.scheduleInTicks(1, c => {

                c.server.runCommandSilent(`execute in cae:void run setblock -32049 94 32105 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:insanity",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32049 93 32105 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -32049 94 32105 -32049 93 32105 air`)

                c.server.runCommandSilent(`execute in cae:void run setblock -32091 103 32068 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:end",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32091 102 32068 minecraft:redstone_block`)
                c.server.runCommandSilent(`execute in cae:void run fill -32091 103 32068 -32091 102 32068 air`)

                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)

                c.server.runCommandSilent(`execute in cae:void run setblock -32057 123 32083 air`)
                event.server.scheduleInTicks(1, c => {
                    c.server.runCommandSilent(`execute in cae:void run setblock -32057 123 32083 cae:end_port[facing=south]`)
                })
            })
        }
    }
})


let forbidden = [
    "minecraft:mycelium",
    "create:cut_calcite_brick_wall",
    "minecraft:smooth_quartz",
    "tconstruct:black_clear_stained_glass",
    "tconstruct:gray_clear_stained_glass",
    "create:ornate_iron_window_pane",
    "minecraft:smooth_quartz_stairs",
    "chipped:quartz_block_52",
    "minecraft:polished_blackstone_brick_stairs",
    "forbidden_arcanus:arcane_polished_darkstone_rod",
    "minecraft:deepslate_tile_wall",
    "minecraft:deepslate_tiles",
    "minecraft:chiseled_polished_blackstone",
    "davebuildingmod:stars",
    "forbidden_arcanus:runic_chiseled_polished_darkstone",
    "framedblocks:framed_slab",
    "framedblocks:framed_corner_pillar",
    "create:acacia_window",
    "chipped:redstone_lamp_5",
    "forbidden_arcanus:polished_darkstone",
    "infernalexp:chiseled_glowstone_bricks",
    "chipped:yellow_terracotta_56",
    "infernalexp:glowdust_stone_bricks",
    "create:small_ochrum_bricks",
    "chipped:gilded_blackstone_47",
    "davebuildingmod:vanta_black",
    "minecraft:beacon",
    "byg:palm_log",
    "byg:stripped_palm_log",
    'immersive_weathering:mossy_stone',
    'minecraft:stone',
    'minecraft:water',
    'minecraft:dirt',
    'minecraft:moss_block',
    'chipped:green_terracotta_52',
    'byg:palm_log',
    'minecraft:deepslate',
    'biomesoplenty:mahogany_sapling',
    'immersive_weathering:biomesoplenty/jacaranda_leaf_pile',
    'biomesoplenty:bush',
    'biomesoplenty:yellow_autumn_leaves',
    'biomesoplenty:jacaranda_leaves',
    'immersive_weathering:byg/palm_leaf_pile',
    'byg:palm_leaves',
    'minecraft:grass_block',
    'minecraft:seagrass',
    'minecraft:grass',
    'byg:tiny_lilypads',
    'minecraft:rooted_dirt',
    'minecraft:grass_block',
    'minecraft:grass',
    'immersive_weathering:hanging_roots_wall',
    'biomesoplenty:bush',
    'minecraft:fern',
    'chipped:deepslate_67',
    'biomesoplenty:yellow_autumn_leaves',
    'minecraft:green_concrete_powder',
    'quark:limestone_slab',
    'minecraft:water',
    'chipped:mossy_stone_bricks_7',
    'byg:tiny_lilypads',
    'minecraft:seagrass',
    'chipped:andesite_66',
    'chipped:andesite_67',
    'chipped:green_terracotta_52',
    'waystones:sharestone',
    'decorative_blocks:brazier',
    'minecraft:pink_wool',
    'chipped:sandstone_9',
    'rechiseled:quartz_block_small_tiles',
    'chipped:quartz_block_27',
    'minecraft:red_wool',
    'chipped:andesite_66',
    'minecraft:purple_wool',
    'forbidden_arcanus:arcane_gold_trapdoor',
    'ars_nouveau:sas_alternating',
    'chipped:andesite_57',
    'chipped:andesite_67',
    'architects_palette:gilded_sandstone_pillar',
    'quark:purpur_vertical_slab',
    'minecraft:purpur_slab',
    'minecraft:purpur_block',
    'chipped:purpur_block_38',
    'chipped:quartz_block_67',
    'byg:rainbow_eucalyptus_wood',
    'forbidden_arcanus:arcane_polished_darkstone_pillar',
    'ars_nouveau:arcane_core',
    'ars_nouveau:relay_collector',
    'quark:sandstone_bricks_stairs',
    'minecraft:cut_sandstone_slab',
    'chipped:sandstone_47',
    'chipped:sandstone_55',
    'chipped:sandstone_50',
    'chipped:andesite_65',
    'chipped:purple_stained_glass_4',
    'quark:myalite_crystal',
    'ars_nouveau:ritual_brazier',
    'decorative_blocks:soul_brazier',
    'minecraft:light_blue_wool',
    'chipped:blue_ice_47',
    'chipped:light_blue_wool_16',
    'chipped:quartz_block_44',
    'chipped:quartz_block_45',
    'minecraft:light_blue_glazed_terracotta',
    'chipped:gold_block_6',
    'minecraft:light_gray_glazed_terracotta',
    'minecraft:cyan_concrete',
    'chipped:diamond_block_6',
    'chipped:gold_block_5',
    'chipped:gold_block_4',
    'chipped:quartz_block_5',
    'chipped:purple_stained_glass_8',
    'chipped:quartz_block_4',
    'chipped:purple_stained_glass_7',
    'chipped:gold_block_12',
    'chipped:raw_gold_block_47','chipped:lodestone_40',
    'chipped:lodestone_24',
    'chipped:stone_7',
    'entangled:block',
    'create:creative_crate',
    'create:creative_fluid_tank',
    'pneumaticcraft:liquid_hopper',
    'chipped:andesite_49',
    'minecraft:acacia_sign',
    'byg:packed_black_ice',
    'minecraft:blackstone',
    'minecraft:deepslate',
    'createdeco:cast_iron_sheet_slab',
    'minecraft:dead_brain_coral_block',
    'minecraft:snow',
    'minecraft:snow_block',
    'chipped:pointed_dripstone_4',
    'minecraft:diorite',
    'minecraft:calcite',
    'minecraft:smooth_basalt',
    'chipped:sand_7',
    'create:cut_veridium',
    'minecraft:smooth_quartz',
    'chipped:sand_12',
    'forbidden_arcanus:fungyss_slab',
    'minecraft:spruce_slab',
    'minecraft:spruce_stairs',
    'chipped:blue_ice_57',
    'chipped:calcite_1',
    'createdeco:cast_iron_bars',
    'createdeco:cast_iron_sheet_stairs',
    'chipped:iron_bars_21',
    'create:refined_radiance_casing',
    'immersive_weathering:permafrost',
    'createdeco:cast_iron_catwalk_stair',
    'chipped:diorite_8',
    'pneumaticcraft:wall_lamp_inverted_white',
    'chipped:ice_57',
    'immersive_weathering:soot',
    'chipped:light_gray_stained_glass_pane_7',
    'chipped:white_stained_glass_pane_7',
    'createdeco:pearl_long_bricks',
    'minecraft:basalt',
    'minecraft:red_stained_glass',
    'minecraft:orange_stained_glass',
    'create:creative_crate',
    'minecraft:yellow_stained_glass',
    'create:polished_cut_tuff_stairs',
    'create:polished_cut_tuff',
    'create:creative_motor',
    'create:clutch',
    'ars_nouveau:archwood_trapdoor',
    'minecraft:dispenser',
    'create:redstone_link',
    'minecraft:oak_sign',
    'minecraft:grindstone',
    'decorative_blocks:chain',
    'minecraft:quartz_slab',
    'dustrial_decor:cast_iron_pillar',
    'createdeco:cast_iron_trapdoor',
    'entangled:block',
    'pneumaticcraft:liquid_hopper',
    'create:creative_fluid_tank',
    'chipped:red_terracotta_57',
    'minecraft:red_terracotta',
    'chipped:raw_iron_block_41',
    'createdeco:cast_iron_catwalk',
    'chipped:raw_iron_block_8',
    'chipped:white_terracotta_58',
    'createdeco:cast_iron_door',
    'davebuildingmod:vanta_black',
    'davebuildingmod:exit_sign',
    'createdeco:orange_decal',
    'createdeco:red_decal',
    'chipped:white_terracotta_59',
    'minecraft:waxed_copper_block',
    'minecraft:waxed_exposed_copper',
    'createdeco:copper_sheet_stairs',
    'chipped:spruce_trapdoor_10',
    'minecraft:bedrock',
    'davebuildingmod:small_smoke_passive_generator',
    'davebuildingmod:alarm_sign',
    'davebuildingmod:gauge_outer',
    'createdeco:cast_iron_support',
    'createdeco:locked_cast_iron_door',
    'createdeco:red_cast_iron_lamp',
    'farmersdelight:white_canvas_wall_sign',
    'minecraft:smooth_quartz_stairs',
    'minecraft:smooth_quartz_slab',
    'supplementaries:book_pile',
    'davebuildingmod:pc_setup',
    'supplementaries:globe',
    'byg:dacite',
    'framedblocks:framed_lever',
    'chipped:quartz_block_7',
    'davebuildingmod:white_steel_tank',
    'ae2:sky_stone_tank',
    'byg:mangrove_bookshelf',
    'minecraft:grass_block',
    'minecraft:cobbled_deepslate',
    'minecraft:deepslate',
    'framedblocks:framed_panel',
    'framedblocks:framed_stairs',
    'minecraft:smooth_basalt',
    'minecraft:deepslate_coal_ore',
    'quark:black_framed_glass_pane',
    'quark:light_gray_framed_glass_pane',
    'minecraft:mycelium',
    'framedblocks:framed_slab_corner',
    'minecraft:stripped_dark_oak_wood',
    'framedblocks:framed_slab_edge',
    'minecraft:spruce_stairs',
    'minecraft:bookshelf',
    'chipped:bookshelf_1',
    'chipped:bookshelf_4',
    'davebuildingmod:stars',
    'framedblocks:framed_slab',
    'supplementaries:jar',
    'supplementaries:goblet',
    'supplementaries:candle_holder_white',
    'minecraft:spore_blossom',
    'dustrial_decor:large_chain',
    'supplementaries:hourglass',
    'minecraft:spruce_planks',
    'davebuildingmod:log_pile_chair',
    'architects_palette:redstone_cage_lantern',
    'minecraft:snow_block',
    'supplementaries:statue',
    'supplementaries:urn',
    'dustrial_decor:gold_chain',
    'minecraft:snow',
    'quark:iron_ladder',
    'create:creative_motor',
    'create:clutch',
    'tconstruct:scorched_fuel_tank',
    'reliquary:apothecary_cauldron',
    'framedblocks:framed_corner_pillar',
    'tconstruct:scorched_ingot_tank',
    'minecraft:acacia_sign',
    'entangled:block',
    'pneumaticcraft:liquid_hopper',
    'create:creative_fluid_tank',
    'create:creative_crate',
    'minecraft:structure_block',
    'ae2:sky_stone_tank',
    'pneumaticcraft:pressurized_spawner'

    ]



onEvent('block.break', event => {
    if (event.player.isCreativeMode() || event.level.dimension != 'cae:void') {return}
    if (forbidden.includes(event.block.id)){
        event.player.setStatusMessage(Text.darkRed("Arcane Forces Protect this Block"))
        event.cancel()
    }
    if (wrenchBlockCoords.includes(event.block.pos.toShortString())) {
        event.player.setStatusMessage(Text.darkRed("Arcane Forces Protect this Block"))
        event.cancel()
    }
})

let wrenchBlockCoords = [ //needs coordinates of every single create block
    //soul
    "-31979, 94, 32292",
    "-31979, 95, 32286",
    "-31977, 97, 32288",
    "-31978, 95, 32292",

    //ice
        //essence tank
    "-31979, 93, 32245",
    "-31979, 94, 32245",
    "-31979, 95, 32245",
    "-31979, 96, 32245",

    "-31978, 93, 32245",
    "-31978, 94, 32245",
    "-31978, 95, 32245",
    "-31978, 96, 32245",

    "-31978, 93, 32244",
    "-31978, 94, 32244",
    "-31978, 95, 32244",
    "-31978, 96, 32244",

    "-31979, 93, 32244",
    "-31979, 94, 32244",
    "-31979, 95, 32244",
    "-31979, 96, 32244",

        //water tank
    "-31982, 93, 32245",
    "-31982, 94, 32245",
    "-31982, 95, 32245",
    "-31982, 96, 32245",

    "-31981, 93, 32245",
    "-31981, 94, 32245",
    "-31981, 95, 32245",
    "-31981, 96, 32245",

    "-31981, 93, 32244",
    "-31981, 94, 32244",
    "-31981, 95, 32244",
    "-31981, 96, 32244",

    "-31982, 93, 32244",
    "-31982, 94, 32244",
    "-31982, 95, 32244",
    "-31982, 96, 32244",

        //lava tank
            //small
    "-31977, 93, 32264",
    "-31977, 94, 32264",
    "-31977, 95, 32264",
    "-31977, 96, 32264",
    "-31977, 97, 32264",

            //large
    "-31976, 93, 32265",
    "-31976, 94, 32265",
    "-31976, 95, 32265",
    "-31976, 96, 32265",
    "-31976, 97, 32265",
    "-31976, 98, 32265",

    "-31975, 93, 32265",
    "-31975, 94, 32265",
    "-31975, 95, 32265",
    "-31975, 96, 32265",
    "-31975, 97, 32265",
    "-31975, 98, 32265",

    "-31975, 93, 32264",
    "-31975, 94, 32264",
    "-31975, 95, 32264",
    "-31975, 96, 32264",
    "-31975, 97, 32264",
    "-31975, 98, 32264",

    "-31976, 93, 32264",
    "-31976, 94, 32264",
    "-31976, 95, 32264",
    "-31976, 96, 32264",
    "-31976, 97, 32264",
    "-31976, 98, 32264",

        //misc
    "-31982, 94, 32268",
    "-31980, 94, 32268",
    "-31985, 92, 32269",
    "-31985, 101, 32257",
    "-31985, 101, 32259",

    "-31976, 93, 32261",
    "-31976, 94, 32261",
    "-31976, 95, 32261",
    "-31976, 96, 32261",
    "-31976, 96, 32262",
    "-31976, 96, 32263",

    //dry (why is this called dry??)
        //dry essence
    "-32038, 98, 32243",
    "-32038, 99, 32243",
    "-32038, 100, 32243",
    "-32038, 101, 32243",
    "-32038, 102, 32243",
    "-32038, 103, 32243",
    "-32038, 104, 32243",
    "-32038, 105, 32243",
    "-32038, 106, 32243",
    "-32038, 107, 32243",
    "-32038, 108, 32243",
    "-32038, 109, 32243",
    "-32038, 110, 32243",

    "-32037, 98, 32243",
    "-32037, 99, 32243",
    "-32037, 100, 32243",
    "-32037, 101, 32243",
    "-32037, 102, 32243",
    "-32037, 103, 32243",

    "-32037, 104, 32243",
    "-32037, 105, 32243",
    "-32037, 106, 32243",
    "-32037, 107, 32243",
    "-32037, 108, 32243",
    "-32037, 109, 32243",
    "-32037, 110, 32243",

    "-32038, 98, 32242",
    "-32038, 99, 32242",
    "-32038, 100, 32242",
    "-32038, 101, 32242",
    "-32038, 102, 32242",
    "-32038, 103, 32242",
    "-32038, 104, 32242",
    "-32038, 105, 32242",
    "-32038, 106, 32242",
    "-32038, 107, 32242",
    "-32038, 108, 32242",
    "-32038, 109, 32242",
    "-32038, 110, 32242",

    "-32037, 98, 32242",
    "-32037, 99, 32242",
    "-32037, 100, 32242",
    "-32037, 101, 32242",
    "-32037, 102, 32242",
    "-32037, 103, 32242",
    "-32037, 104, 32242",
    "-32037, 105, 32242",
    "-32037, 106, 32242",
    "-32037, 107, 32242",
    "-32037, 108, 32242",
    "-32037, 109, 32242",
    "-32037, 110, 32242",

        //water tank
    "-32037, 98, 32271",
    "-32037, 99, 32271",
    "-32037, 100, 32271",
    "-32037, 101, 32271",
    "-32037, 102, 32271",
    "-32037, 103, 32271",
    "-32037, 104, 32271",
    "-32037, 105, 32271",
    "-32037, 106, 32271",
    "-32037, 107, 32271",
    "-32037, 108, 32271",
    "-32037, 109, 32271",
    "-32037, 110, 32271",

    "-32038, 98, 32271",
    "-32038, 99, 32271",
    "-32038, 100, 32271",
    "-32038, 101, 32271",
    "-32038, 101, 32271",
    "-32038, 102, 32271",
    "-32038, 103, 32271",
    "-32038, 104, 32271",
    "-32038, 105, 32271",
    "-32038, 106, 32271",
    "-32038, 107, 32271",
    "-32038, 108, 32271",
    "-32038, 109, 32271",
    "-32038, 110, 32271",

    "-32038, 98, 32272",
    "-32038, 99, 32272",
    "-32038, 100, 32272",
    "-32038, 101, 32272",
    "-32038, 102, 32272",
    "-32038, 103, 32272",
    "-32038, 104, 32272",
    "-32038, 105, 32272",
    "-32038, 106, 32272",
    "-32038, 107, 32272",
    "-32038, 108, 32272",
    "-32038, 109, 32272",
    "-32038, 110, 32272",

    "-32037, 98, 32272",
    "-32037, 99, 32272",
    "-32037, 100, 32272",
    "-32037, 101, 32272",
    "-32037, 102, 32272",
    "-32037, 103, 32272",
    "-32037, 104, 32272",
    "-32037, 105, 32272",
    "-32037, 106, 32272",
    "-32037, 107, 32272",
    "-32037, 108, 32272",
    "-32037, 109, 32272",
    "-32037, 110, 32272",

        //rotation input
    "-32023, 98, 32257",

    //source
        //essence tank //NOOOO A 3x3 tank
            //1st layer
    "-32052, 102, 32205",
    "-32052, 103, 32205",
    "-32052, 104, 32205",
    "-32052, 105, 32205",
    "-32052, 106, 32205",
    "-32052, 107, 32205",

    "-32052, 102, 32204",
    "-32052, 103, 32204",
    "-32052, 104, 32204",
    "-32052, 105, 32204",
    "-32052, 106, 32204",
    "-32052, 107, 32204",

    "-32052, 102, 32203",
    "-32052, 103, 32203",
    "-32052, 104, 32203",
    "-32052, 105, 32203",
    "-32052, 106, 32203",
    "-32052, 107, 32203",

            //2nd layer
    "-32053, 102, 32203",
    "-32053, 103, 32203",
    "-32053, 104, 32203",
    "-32053, 105, 32203",
    "-32053, 106, 32203",
    "-32053, 107, 32203",

    "-32053, 102, 32204",
    "-32053, 103, 32204",
    "-32053, 104, 32204",
    "-32053, 105, 32204",
    "-32053, 106, 32204",
    "-32053, 107, 32204",

    "-32053, 102, 32205",
    "-32053, 103, 32205",
    "-32053, 104, 32205",
    "-32053, 105, 32205",
    "-32053, 106, 32205",
    "-32053, 107, 32205",

            //3rd layer
    "-32054, 102, 32205",
    "-32054, 103, 32205",
    "-32054, 104, 32205",
    "-32054, 105, 32205",
    "-32054, 106, 32205",
    "-32054, 107, 32205",

    "-32054, 102, 32204",
    "-32054, 103, 32204",
    "-32054, 104, 32204",
    "-32054, 105, 32204",
    "-32054, 106, 32204",
    "-32054, 107, 32204",

    "-32054, 102, 32203",
    "-32054, 103, 32203",
    "-32054, 104, 32203",
    "-32054, 105, 32203",
    "-32054, 106, 32203",
    "-32054, 107, 32203",

        //misc
    "-32029, 103, 32209",

    "-32029, 102, 32204",

    "-32029, 103, 32199",

    //nature
        //nature essence tank
    "-32008, 117, 32173",
    "-32008, 118, 32173",
    "-32008, 119, 32173",
    "-32008, 120, 32173",
    "-32008, 121, 32173",
    "-32008, 122, 32173",

        //misc
    "-32006, 117, 32178",
    "-31980, 115, 32173",
    "-31980, 120, 32173"

    //Idk why i wrote all this manually.. should have just made a function
]

onEvent('block.right_click', event => {
    if (event.player.isCreativeMode() || event.level.dimension != 'cae:void') {return}

    if (event.item.id == "create:wrench" && forbidden.includes(event.block.id)){
        event.player.setStatusMessage(Text.darkRed("Arcane Forces Protect this Block"))
        event.cancel()
    } else if (event.item.id == "create:wrench" && wrenchBlockCoords.includes(event.block.pos.toShortString())) {
        event.player.setStatusMessage(Text.darkRed("Arcane Forces Protect this Block"))
        event.cancel()
    } /*else { //coordinates for copy pasting
        if (event.hand != MAIN_HAND) {return}
        event.player.tell("Block Coords:")
        event.player.tell(Component.darkRed(event.block.pos.toShortString()).click(`copy:${"\"" + event.block.pos.toShortString() + "\","}`).hover(`Copy String`))
        event.player.tell(" ")
    }*/
})