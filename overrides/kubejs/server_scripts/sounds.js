onEvent('block.break', event => {
    if(event.block.id == "forbidden_arcanus:arcane_crystal_obelisk"){
        event.server.runCommandSilent(`playsound cae:obelisk_break block @e[type=player] ${event.block.x} ${event.block.y} ${event.block.z}`)
    }
})
onEvent('block.place', event => {
    if(event.block.id == "forbidden_arcanus:arcane_crystal_obelisk"){
        event.server.runCommandSilent(`playsound cae:obelisk_place block @e[type=player] ${event.block.x} ${event.block.y} ${event.block.z}`)
    }
})
onEvent('block.place', event => {
    if(event.block.id == "forbidden_arcanus:hephaestus_forge"){
        event.server.runCommandSilent(`playsound cae:forge_create block @e[type=player] ${event.block.x} ${event.block.y} ${event.block.z}`)
    }
})
//1 sound is in itemrightclick.js