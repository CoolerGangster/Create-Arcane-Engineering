onEvent('recipes', event => {
    event.remove({id: 'thermal:machines/insolator/insolator_wither_rose'})
    event.remove({id: 'forbidden_arcanus:hephaestus_forge/rituals/eternal_stella'})
    event.recipes.create.mixing('minecraft:wither_rose',['#minecraft:small_flowers', Fluid.of('kubejs:liquid_resent', 666)]).heated()
    event.recipes.createCompacting('cae:time_crystal',["minecraft:amethyst_cluster", "tiab:time_in_a_bottle"])
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": "cae:time_crystal"
        },
        "block_in": {
            "blocks": ["kubejs:source"],
            "state": {
                "level": 0
            }
        },
        "post": [
            {
                "type": "place",
                "block": "cae:source_time_crystal"
            }
            ]
    
    })
    let t = "create:experience_nugget"
    event.recipes.createSequencedAssembly([
        'forbidden_arcanus:xpetrified_orb',
      ], 'create:experience_block', [
        event.recipes.createPressing(t, ["create:experience_nugget"])
    ]).transitionalItem(t).loops(10)

      
})
/*onEvent('entity.death', event =>{
    //event.server.tell(event.entity.block.offset(0,1,0))
    if (event.entity.block.offset(0,1,0) == "create:crushing_wheel_controller") {
        if (event.entity.type == 'minecraft:silverfish') {
            let NuggetIE = event.entity.block.createEntity("item")
            NuggetIE.item = Item.of("create:experience_nugget")
            NuggetIE.item.count = 3
            NuggetIE.y-=0.01
            NuggetIE.z+=0.5
            NuggetIE.motionX = 0
            NuggetIE.motionY = 1
            NuggetIE.motionZ = 0
            NuggetIE.spawn() //improve this with pop from block
        }
        let EntityCrushing = (Entity, item, amount) => {
            if (event.entity.type == Entity) {
                let IE = event.entity.block.createEntity("item")
                IE.item = Item.of(item)
                IE.item.count = amount
                IE.y-=0.01 
                IE.z+=0.5
                IE.motionX = 0
                IE.motionY = 1
                IE.motionZ = 0
                IE.spawn()
            }
          }
          //recipes here
        EntityCrushing("ars_nouveau:amethyst_golem","minecraft:amethyst_cluster",1)
    }
})*/
onEvent('entity.death', event =>{
    //event.server.tell(event.entity.block.offset(0,1,0))   
    
    if (event.source == "DamageSource (create.crush)") {
        if (event.entity.type == "minecraft:player" && event.entity.name.text == '_Pouffy_'){
            event.server.tell(`OMG I CANT BELIEVE ${event.entity.name.text} Allowed themselves to get Crushed!`)
            event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${event.entity.x} ${event.entity.y} ${event.entity.z} loot cae:pig`)
        }
      let EntityCrushing = (Entity, loot) => {
            if (event.entity.type == Entity) {
                event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${event.entity.x} ${event.entity.y} ${event.entity.z} loot ${loot}`)
            }
          }
    //Recipes Here EntityCrushing(blahblahblah) script by the godly pino
    EntityCrushing("ars_nouveau:whirlisprig","cae:whirl")
    EntityCrushing("minecraft:silverfish","cae:silverfish")
    EntityCrushing("ars_nouveau:amethyst_golem","cae:golem")    
    }


})



onEvent('entity.hurt', event =>{
        if (event.entity.type == 'minecraft:skeleton'){
            
            if (event.entity.block.id == "minecraft:wither_rose" && event.entity.fullNBT.getString("fireType") == "minecraft:soul_fire") {
                event.entity.remove()
               
                //event.server.tell("fortnite")
                //event.server.tell(Skeleton.block)
                event.server.runCommandSilent(`execute in ${event.entity.level.dimension} run summon minecraft:wither_skeleton ${event.entity.x} ${event.entity.y} ${event.entity.z} {DeathLootTable:"cae:basedskellie",PersistenceRequired:1b}`)

                event.server.runCommandSilent(`playsound cae:skeleton_convert hostile @e[type=player] ${event.entity.x} ${event.entity.y} ${event.entity.z}`)
                event.entity.block.set("minecraft:air")
                //event.entity.block.playSound('ars_nouveau:fire_family')
            }
        }
})
onEvent("block.right_click", event =>{
    if (event.item.id == "forbidden_arcanus:soul" && event.block.id.includes('davebuildingmod') && event.block.id.includes('skeleton')) {
       event.item.setCount(event.item.getCount()-1)
       event.block.set('minecraft:air')
       event.server.runCommandSilent(`playsound cae:skeleton_convert hostile @e[type=player] ${event.block.x} ${event.block.y} ${event.block.z}`)
       event.server.runCommandSilent(`execute in ${event.block.level.dimension} run summon minecraft:skeleton ${event.block.x} ${event.block.y} ${event.block.z} {DeathLootTable:"cae:skellie",PersistenceRequired:1b}`)
    }   
})
global.fortnite = 0;
onEvent('level.tick', event => {
    if (global.fortnite != 0){global.fortnite--}
    else{
    global.fortnite = 20;
    event.level.getEntities('@e[type=item, nbt = {Item:{id:"minecraft:nether_star"}}]').forEach(Orb => {
        if (Orb.y >= 320){
        const amt =Orb.fullNBT.getCompound("Item").getInt("Count")
        Orb.remove()
        for (let i = 0; i < amt; i++) {
            Orb.block.popItem('forbidden_arcanus:stellarite_piece')
        }
        let glow = event.entity.block.createEntity("thermal:glowstone_tnt")
        glow.x = Orb.x
        glow.y = Orb.y
        glow.z = Orb.z
        glow.spawn()
        
        }
    
    })
    }
})


