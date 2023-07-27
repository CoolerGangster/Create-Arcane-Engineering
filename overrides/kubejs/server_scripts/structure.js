let structure_name = 'cae:dungeon'
let fortarray = [
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,],
    [,,,,]

]
function advRound (number, digits) {
    let multiplier = digits ? 10 ** digits : 100
    return Math.round(number*multiplier)/multiplier
} 
onEvent('player.advancement', event => {
    if (event.advancement.toString() == "cae:end"){

        event.server.runCommandSilent(`execute in minecraft:overworld run tp ${event.player.name.text} 0 200 0`)
        event.server.runCommandSilent(`effect give ${event.player.name.text} minecraft:absorption 100 100 true`)
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
        let d = { //this defines the position the strucututre will spawn at.
            x: 10000,
            y: 64, //this is constant, but it doesnt have to be
            z: 10000,
            id: event.player.id,
            name: event.player.name.text
        }
        event.server.runCommandSilent(`execute in cae:void run gamemode adventure ${d.name}`)
        event.server.runCommandSilent(`effect give ${d.name} minecraft:absorption 100 100 true`)
        event.server.runCommandSilent(`execute in cae:void run clear ${d.name}`)
        event.server.runCommandSilent(`effect give ${d.name} minecraft:slow_falling 20 100 true`)
        event.server.runCommandSilent(`execute in cae:void run tp ${d.name} ${d.x} ${d.y} ${d.z + 75}`)
        event.server.scheduleInTicks(60, c => { //make sure the chunks are loaded before trying to set the block
            c.server.tell("<"+ d.name +">"+  " §4...Where am §k§m§dI?")
    
            c.server.runCommandSilent(`execute in cae:void run tp ${d.name} ${10026} ${70} ${10028}`)
            c.server.runCommandSilent(`execute in cae:void run tp ${d.name} ${10026} ${70} ${10028}`) //these numbers should be half the size of the structure, so the player and spawn ends up in the middle. will need tweaking for your structure.
            c.server.runCommandSilent(`execute in cae:void run spawnpoint ${d.name} ${d.x + 10} ${d.y + 4} ${d.z + 140}`)
        })
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
            event.server.runCommandSilent(`effect give ${player.name.text} minecraft:slow_falling 20 100 true`)
            event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31985 103 32293`)
            event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31985 103 32293`)
            event.server.runCommandSilent(`tell ${player.name.text} §6 §l You are being Watched. Automate The Keystone. And once you have a stack. Rightclick it.`)
            event.server.runCommandSilent(`execute in cae:void run spawnpoint ${player.name.text} -31985 103 32293`)
            event.server.scheduleInTicks(40, c => { c.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31985 103 32293`);})
        
        event.server.scheduleInTicks(40, c => {
            c.server.runCommandSilent(`execute in cae:void run setblock -31998 92 32279 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:eggroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
            c.server.runCommandSilent(`execute in cae:void run setblock -31998 91 32279 minecraft:redstone_block`) 
            c.server.runCommandSilent(`execute in cae:void run fill -31998 92 32279 -31998 91 32279 air`)
            c.server.runCommandSilent(`execute in cae:void run tp ${d.name} -31985 103 32293`) 
            c.server.runCommandSilent(`execute in cae:void run tp ${d.name} -31985 103 32293`) //these numbers should be half the size of the structure, so the player and spawn ends up in the middle. will need tweaking for your structure.
            c.server.runCommandSilent(`execute in cae:void run spawnpoint ${d.name} -31985 103 32293`)
            c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
        })
        })
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
        
        event.server.scheduleInTicks(40, c => { //make sure the chunks are loaded before trying to set the block
            c.server.runCommandSilent(`execute in cae:arcane run setblock ${d.x} ${d.y} ${d.z} minecraft:water`)
            c.server.runCommandSilent(`execute in cae:arcane run setblock ${d.x} ${d.y-1} ${d.z} minecraft:soul_sand`)
            c.server.runCommandSilent(`execute in cae:arcane run setblock ${d.x} ${d.y+1} ${d.z} minecraft:air`)
            c.server.runCommandSilent(`execute in cae:arcane run tp ${d.name} ${d.x} ${d.y+1} ${d.z}`)
            c.server.runCommandSilent(`execute in cae:arcane run tp ${d.name} ${d.x} ${d.y+1} ${d.z}`)


        })
    }
  

})
global.playertickcooldown = 40;
onEvent('level.tick', event => {
    if (event.level.dimension == 'minecraft:overworld'){
    if(global.playertickcooldown >=1){
        global.playertickcooldown--
    }
    }
})
global.f = 300;
onEvent('level.tick', event => {
    
    if (event.level.dimension == 'cae:arcane'){
        event.level.getBlock(8117,114,10073).set("cae:stc")
    if(global.f >=1){
        global.f--
    }
    else{
        
        if(event.level.getBlock(8150,24,10085).id != "minecraft:barrier"){
            let d = { //this defines the position the strucututre will spawn at.
                x: 10000,
                y: 64, //this is constant, but it doesnt have to be
                z: 10000
            }
            
            event.server.runCommandSilent(`execute in cae:void run forceload add -31903 32056 -32108 32325`)
            event.server.runCommandSilent(`execute in cae:void run forceload add 9994 10043 10058 9981`)
            event.server.runCommandSilent(`execute in cae:void run setblock ${d.x} ${d.y} ${d.z} minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:start",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
            event.server.runCommandSilent(`execute in cae:void run setblock ${d.x} ${d.y - 1} ${d.z} minecraft:redstone_block`)
            event.server.runCommandSilent(`execute in cae:void run fill ${d.x} ${d.y} ${d.z} ${d.x} ${d.y - 1} ${d.z} air`)//get rid of the structure and redstone block
        event.server.runCommandSilent(`execute in cae:arcane run forceload add 8043 10135 8270 9968`)
        event.server.runCommandSilent(`execute in cae:arcane run setblock 8040 23 9985 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:sun_temple",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
        event.server.runCommandSilent(`execute in cae:arcane run setblock 8040 22 9985 minecraft:redstone_block`)
        event.server.runCommandSilent(`execute in cae:arcane run fill 8040 23 9985 8040 22 9985 air`)//get rid of the structure and redstone block
        event.level.getBlock(8117,114,10073).set("cae:stc")
        
    
    global.f = 400;
    }  
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
/*onEvent('player.tick', event =>{
    if(global.playertickcooldown >= 1){return;}
    else{
        global.playertickcooldown = 40;
        if(event.player.x >= 10023 && event.player.x <= 10029 && event.player.z <= 1000){
            event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                event.server.runCommandSilent(`execute in cae:void run gamemode survival ${player.name.text}`)
                event.server.runCommandSilent(`effect give ${player.name.text} minecraft:absorption 100 100 true`)
                event.server.runCommandSilent(`effect give ${player.name.text} minecraft:slow_falling 20 100 true`)
                event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31985 103 32293`)
                event.server.runCommandSilent(`tell ${player.name.text} §6 §l You are being Watched. Automate The Keystone. And once you have a stack. Rightclick it.`)
                event.server.runCommandSilent(`execute in cae:void run spawnpoint ${player.name.text} -31985 103 32293`)
            })
            event.server.scheduleInTicks(40, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -31998 92 32279 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:eggroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -31998 91 32279 minecraft:redstone_block`) 
                c.server.runCommandSilent(`execute in cae:void run fill -31998 92 32279 -31998 91 32279 air`)
                event.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
        }
       /* if (event.level.dimension == "cae:arcane" && (event.player.block.offset(0,1,0).id == "cae:void_portal" || event.player.block.id == "cae:void_portal")){
            event.server.runCommandSilent(`advancement grant ${event.player.name.text} from cae:verycool`)
        }
        if (event.level.dimension != "cae:arcane" && (event.player.block.offset(0,1,0).id == "cae:arcane_portal" || event.player.block.id == "cae:arcane_portal")){
            event.server.runCommandSilent(`advancement grant ${event.player.name.text} from cae:arcane`)
        }
        
    }   
})
*/
onEvent('item.right_click', event =>{
        if (event.level.dimension == 'cae:void'){
        if (event.item.count == 64){
            if(event.item.id == "minecraft:barrier"){ //this is the first room so no item id shit
                event.level.getEntities('@e[type=minecraft:player]').forEach(player => {

                    if(player.level.dimension != "cae:void"){return;}
                    event.server.runCommandSilent(`execute in cae:void run gamemode survival ${player.name.text}`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:absorption 100 100 true`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:slow_falling 20 100 true`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31985 103 32293`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31985 103 32293`)
                    event.server.runCommandSilent(`execute in cae:void run spawnpoint ${player.name.text} -31985 103 32293`)

                })
                event.server.scheduleInTicks(40, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -31998 92 32279 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:eggroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -31998 91 32279 minecraft:redstone_block`) 
                c.server.runCommandSilent(`execute in cae:void run fill -31998 92 32279 -31998 91 32279 air`)
                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
                })
            }

            if(event.item.id == "cae:soul_keystone"){ 
                event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                    if(player.level.dimension != "cae:void"){return;}
                    event.server.runCommandSilent(`execute in cae:void run gamemode survival ${player.name.text}`)
                    event.server.runCommandSilent(`execute in cae:void run clear ${player.name.text}`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:absorption 100 100 true`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:slow_falling 20 100 true`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31995 121 32255`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31995 121 32255`)
                    event.server.runCommandSilent(`execute in cae:void run spawnpoint ${player.name.text} -31995 121 32255`)
                    
          
                })
                event.server.scheduleInTicks(40, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -32006 87 32227 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:iceroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32006 86 32227 minecraft:redstone_block`) 
                c.server.runCommandSilent(`execute in cae:void run fill -32006 87 32227 -32006 86 32227 air`)

                c.server.runCommandSilent(`execute in cae:void run setblock -31998 92 32279 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:eggroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -31998 91 32279 minecraft:redstone_block`) 
                c.server.runCommandSilent(`execute in cae:void run fill -31998 92 32279 -31998 91 32279 air`)
                
                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
            }

            if (event.item.id == "cae:ice_keystone") {
                event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                    if(player.level.dimension != "cae:void"){return;}
                    event.server.runCommandSilent(`execute in cae:void run gamemode survival ${player.name.text}`)
                    event.server.runCommandSilent(`execute in cae:void run clear ${player.name.text}`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:absorption 100 100 true`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:slow_falling 20 100 true`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -32036 109 32260`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -32036 109 32260`)
                    event.server.runCommandSilent(`execute in cae:void run spawnpoint ${player.name.text} -32036 109 32260`)
                })
                event.server.scheduleInTicks(40, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -32067 93 32229 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:dryroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32067 92 32229 minecraft:redstone_block`) 
                c.server.runCommandSilent(`execute in cae:void run fill -32067 93 32229 -32067 92 32229 air`)

                c.server.runCommandSilent(`execute in cae:void run setblock -32006 87 32227 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:iceroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32006 86 32227 minecraft:redstone_block`) 
                c.server.runCommandSilent(`execute in cae:void run fill -32006 87 32227 -32006 86 32227 air`)
                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
            }
            if (event.item.id == "cae:dry_keystone"){
                event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                    if(player.level.dimension != "cae:void"){return;}
                    event.server.runCommandSilent(`execute in cae:void run gamemode survival ${player.name.text}`)
                    event.server.runCommandSilent(`execute in cae:void run clear ${player.name.text}`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:absorption 100 100 true`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:slow_falling 20 100 true`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -32035 112 32204`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -32035 112 32204`)
                    event.server.runCommandSilent(`execute in cae:void run spawnpoint ${player.name.text} -32035 112 32204`)
                })
                event.server.scheduleInTicks(40, c => {

                    c.server.runCommandSilent(`execute in cae:void run setblock -32067 93 32229 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:dryroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                    c.server.runCommandSilent(`execute in cae:void run setblock -32067 92 32229 minecraft:redstone_block`) 
                    c.server.runCommandSilent(`execute in cae:void run fill -32067 93 32229 -32067 92 32229 air`)

                c.server.runCommandSilent(`execute in cae:void run setblock -32058 97 32188 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:sourceroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32058 96 32188 minecraft:redstone_block`) 
                c.server.runCommandSilent(`execute in cae:void run fill -32058 97 32188 -32058 96 32188 air`)
                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
            }
            if (event.item.id == "cae:source_keystone"){
                
                event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                    if(player.level.dimension != "cae:void"){return;}
                    event.server.runCommandSilent(`execute in cae:void run gamemode survival ${player.name.text}`)
                    event.server.runCommandSilent(`execute in cae:void run clear ${player.name.text}`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:absorption 100 100 true`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:slow_falling 20 100 true`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31996 132 32172`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -31996 132 32172`)
                    event.server.runCommandSilent(`execute in cae:void run spawnpoint ${player.name.text} -31996 132 32172`)
                    
                })
                event.server.scheduleInTicks(40, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -32049 94 32105 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:insanity",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32049 93 32105 minecraft:redstone_block`) 
                c.server.runCommandSilent(`execute in cae:void run fill -32049 94 32105 -32049 93 32105 air`)

                c.server.runCommandSilent(`execute in cae:void run setblock -32058 97 32188 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:sourceroom",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32058 96 32188 minecraft:redstone_block`) 
                c.server.runCommandSilent(`execute in cae:void run fill -32058 97 32188 -32058 96 32188 air`)
                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
            })
            
            }
            if (event.item.id == "cae:nature_keystone"){
                event.level.getEntities('@e[type=minecraft:player]').forEach(player => {
                    if(player.level.dimension != "cae:void"){return;}
                    event.server.runCommandSilent(`execute in cae:void run gamemode adventure ${player.name.text}`)
                    event.server.runCommandSilent(`execute in cae:void run clear ${player.name.text}`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:absorption 100 100 true`)
                    event.server.runCommandSilent(`effect give ${player.name.text} minecraft:slow_falling 20 100 true`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -32065 119 32118`)
                    event.server.runCommandSilent(`execute in cae:void run tp ${player.name.text} -32065 119 32118`)
                    event.server.runCommandSilent(`execute in cae:void run spawnpoint ${player.name.text} -32066 111 32119`)
                    event.server.runCommandSilent(`execute in cae:void run setblock -32049 94 32105 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:insanity",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                event.server.runCommandSilent(`execute in cae:void run setblock -32049 93 32105 minecraft:redstone_block`) 
                event.server.runCommandSilent(`execute in cae:void run fill -32049 94 32105 -32049 93 32105 air`)
                    
                })
                event.server.scheduleInTicks(20, c => {
                c.server.runCommandSilent(`execute in cae:void run setblock -32091 103 32068 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:end",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32091 102 32068 minecraft:redstone_block`) 
                c.server.runCommandSilent(`execute in cae:void run fill -32091 103 32068 -32091 102 32068 air`)
                c.server.runCommandSilent(`execute in cae:void run setblock -32057 123 32083 air`)
                
                

                c.server.runCommandSilent(`execute in cae:void run kill @e[type=item]`)
                event.server.scheduleInTicks(20, c => { c.server.runCommandSilent(`execute in cae:void run setblock -32057 123 32083 cae:end_port[facing=south]`)})
            })
            
            }
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
    'minecraft:green_concrete_powder',
    'minecraft:moss_block',
    'minecraft:green_concrete',
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
    'minecraft:green_concrete','chipped:andesite_66',
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
    'minecraft:light_blue_concrete',
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
    'minecraft:hopper',
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
    'minecraft:red_mushroom',
    'minecraft:brown_mushroom',
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
    'minecraft:structure_block'



    ]



onEvent('block.break', event => {
    if (event.player.isCreativeMode() || event.level.dimension != 'cae:void') {return}
    if (forbidden.includes(event.block.id)){
        event.player.tell(Text.darkRed("Arcane Forces Protect this Block"))
        event.cancel()
    }
})
/*
global.xortnite = 0;
onEvent('level.tick', event => {
    let banlist = ["Its_Bk" "asdasdsadasdasdasdasdasdadsadasdasdasdasd"]
    let probationist = ["OrionFromBeyond"]
    if (global.xortnite != 0){global.xortnite--}
    else{
    global.xortnite = 40;
    event.level.getEntities('@e[type=player]').forEach(Orb => {
                if (Orb.level != 'ServerWorld:cae:void'){
                    if (probationist.includes(Orb.name.text)){
                    event.server.tell(Orb.name)

                    event.server.runCommandSilent(`execute in cae:void run tp ${Orb.name.text} -32150 64 32400`)
                    Orb.tell(Text.lightPurple("Sorry youre stuck to this dim rn"))
                }
                if (banlist.includes(Orb.name.text)){
                    event.server.runCommandSilent(`kick ${Orb.name.text}`)
                }
            }
        })
    }

})

onEvent('level.tick', event => {
    let notprobationist = ["FortnitePro420Xx","iModern","b_r_s_g_119","PigTurtle"]
    if (global.xgortnite != 0){global.xgortnite--}
    else{
    global.xgortnite = 40;
    event.level.getEntities('@e[type=player]').forEach(Orb => {
            if(Orb.level.dimension != 'minecraft:the_end'){
                    if (!notprobationist.includes(Orb.name.text)){

                        if (Orb.x < 10000, Orb.z < 10000){
                            event.server.tell(Orb.name)
                            event.server.runCommandSilent(`effect give ${Orb.name.text} minecraft:absorption 100 100 true`)
                            event.server.runCommandSilent(`execute run tp ${Orb.name.text} 160000 100 160000`)
                            Orb.tell(Text.lightPurple("Sorry, no going too close to spawn for you :)"))
                        }
            }
        }
        })
    }

})
*/

/*global.xgortnite = 0;
onEvent('level.tick', event => {
    fortarray.push(1)
    stagearray.push(1)
    if (global.xgortnite != 0){global.xgortnite--}
    else{
        global.xgortnite = 40;
        event.level.getEntities('@e[type=player]').forEach(Orb => {
                if(Orb.level.dimension == 'cae:void'){
                        if (!notprobationist.includes(Orb.name.text)){
    
                            if (Orb.x < 10000, Orb.z < 10000){
                                event.server.tell(Orb.name)
                                event.server.runCommandSilent(`effect give ${Orb.name.text} minecraft:absorption 100 100 true`)
                                event.server.runCommandSilent(`execute run tp ${Orb.name.text} 160000 100 160000`)
                                Orb.tell(Text.lightPurple("Sorry, no going too close to spawn for you :)"))
                            }
                }
            }
            })}
})
*/