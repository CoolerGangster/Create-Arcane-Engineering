
onEvent('recipes', event => {
    event.recipes.createMechanicalCrafting("cae:essence_extractor", [
        'ASA',
        'ZEZ',
        'ADA'
      ], {
        S: "pneumaticcraft:spawner_extractor",
        Z: "kubejs:finalpcb",
        D: "createoreexcavation:netherite_drill",
        E: "createoreexcavation:extractor",
        A: "forbidden_arcanus:arcane_polished_darkstone"
    })
	
    event.recipes.createMechanicalCrafting("cae:stem_cell", [
        'CAAAC',
        'DOLKH',
        'DFLPH',
        'DKLEH',
        'CGGGC'
      ], {
        A: "byg:pine_leaves",
        L: "reliquary:fertile_lily_pad",
        C: "integrateddynamics:crystalized_menril_chunk",
        D: "byg:green_enchanted_leaves",
        G: "byg:flowering_palo_verde_leaves",
        H: "integrateddynamics:menril_leaves",
        K: "byg:protea_flower",
        O: "minecraft:grass",
        E: "byg:ether_grass",
        F: "reliquary:fertile_essence",
        P: "minecraft:lily_pad"
        
    })

    event.recipes.createMixing('byg:pine_sapling', ['reliquary:fertile_essence','minecraft:grass']).heated()
    event.recipes.createMixing('byg:palo_verde_sapling', ['byg:protea_flower','minecraft:grass']).heated()
    event.recipes.createMixing('byg:green_enchanted_sapling', ['byg:protea_flower','byg:ether_grass']).heated()
    event.recipes.createMixing('integrateddynamics:menril_sapling', ['minecraft:lily_pad','byg:ether_grass']).heated()
    event.recipes.createFilling("cae:nature_keystone",[Fluid.of("kubejs:nature_essence",1000),"cae:stem_cell"])
    
    event.custom({
        "type": "lychee:block_clicking",
        "item_in": {
            "item": "farmersdelight:iron_knife"
        },
        "block_in": "kubejs:omlett_block",
        "post": [
            {
                "type": "drop_item",
                "item": "kubejs:arcane_omelett_sheet"
            },
            {
                "type": "place",
                "block": "minecraft:air",
                "contextual": {
                    "type": "chance",
                    "chance": 0.2
                }
            },
            {
                "type": "damage_item"
            }
        ]
    })
    
    
    event.custom({
        "type": "tconstruct:casting_basin",
        "fluid": {
          "name": "kubejs:liquid_omlett",
          "amount": 1000
        },
        "result": KJ("omlett_block"),
        "cooling_time": 225
    });

    event.recipes.createEmptying(['kubejs:broken_arcane_egg',Fluid.of('kubejs:liquid_egg', 1)], 'minecraft:egg')
    event.recipes.createCompacting([Fluid.of("kubejs:liquid_omlett",4), Item.of("kubejs:arcane_unscrambled_egg",1).withChance(0.10)], [Fluid.of("kubejs:liquid_egg",10)]).heated()
    event.recipes.createFilling(Item.of("cae:soul_keystone"),[Fluid.of("kubejs:soul_essence",1000),"kubejs:arcane_omelett_sheet"])

    event.recipes.createMechanicalCrafting("kubejs:sushi", [
        'KKKK',
        'PTCS',
        'PTCS',
        'RRRR'
      ], {
        K: "minecraft:dried_kelp",
        P: "minecraft:pufferfish",
        T: "minecraft:tropical_fish",
        C: "minecraft:cod",
        S: "minecraft:salmon",
        R: "#forge:crops/rice"
    })
    
        event.custom({
            "type": "lychee:block_interacting",
            "item_in": {"item": "air"},
            "block_in": "minecraft:wet_sponge",
            "post": [
                {
                    "type": "drop_item",
                    "item": "minecraft:pufferfish",
                    "contextual": {
                        "type": "chance",
                        "chance": 0.05
                    }
                },
                {
                    "type": "drop_item",
                    "item": "minecraft:tropical_fish",
                    "contextual": {
                        "type": "chance",
                        "chance": 0.05
                    }
                },
                {
                    "type": "drop_item",
                    "item": "minecraft:cod",
                    "contextual": {
                        "type": "chance",
                        "chance": 0.05
                    }
                },
                {
                    "type": "drop_item",
                    "item": "minecraft:salmon",
                    "contextual": {
                        "type": "chance",
                        "chance": 0.05
                    }
                },
                {
                    "type": "place",
                    "block": "minecraft:sponge",
                    "contextual": {
                        "type": "chance",
                        "chance": 0.4
                    }
                }
            ]
        })
    event.recipes.createFilling(Item.of("cae:dry_keystone"),[Fluid.of("kubejs:dry_essence",1000),"kubejs:sushi"])
    event.recipes.createCrushing(Item.of("kubejs:magical_ice").withChance(0.025),[Item.of("minecraft:blue_ice",64)])
    event.recipes.createFilling(Item.of("cae:ice_keystone"),[Fluid.of("kubejs:ice_essence",1000),"kubejs:magical_ice"])
    event.recipes.createCompacting(Fluid.of("kubejs:cascading_juice",250),Item.of("ars_nouveau:blue_archwood_sapling")).superheated()
    event.recipes.createCompacting(Fluid.of("kubejs:flourishing_juice",250),Item.of("ars_nouveau:green_archwood_sapling")).superheated()
    event.recipes.createCompacting(Fluid.of("kubejs:vexing_juice",250),Item.of("ars_nouveau:purple_archwood_sapling")).superheated()
    event.recipes.createCompacting(Fluid.of("kubejs:blazing_juice",250),Item.of("ars_nouveau:red_archwood_sapling")).superheated()
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {"item": "air"},
        "block_in": "kubejs:source_time_crystal",
        "post": [
            {
                "type": "drop_item",
                "item": "ars_nouveau:blue_archwood_sapling",
                "contextual": {
                    "type": "chance",
                    "chance": 0.05
                }
            },
            {
                "type": "drop_item",
                "item": "ars_nouveau:green_archwood_sapling",
                "contextual": {
                    "type": "chance",
                    "chance": 0.05
                }
            },
            {
                "type": "drop_item",
                "item": "ars_nouveau:purple_archwood_sapling",
                "contextual": {
                    "type": "chance",
                    "chance": 0.05
                }
            },
            {
                "type": "drop_item",
                "item": "ars_nouveau:red_archwood_sapling",
                "contextual": {
                    "type": "chance",
                    "chance": 0.05
                }
            },
            {
                "type": "drop_item",
                "item": "kubejs:source_time_crystal",
                "contextual": {
                    "type": "chance",
                    "chance": 0.02
                }
            }
        ]
    })
    let t = "ars_nouveau:source_gem"
    event.recipes.createMechanicalCrafting("ars_nouveau:source_gem", [
        ' KK ',
        'KKKK',
        'KKKK',
        'KKKK',
        'KKKK',
        ' KK '
      ], {
        K: "kubejs:source_time_crystal"
    })
    event.recipes.createSequencedAssembly([
        'kubejs:source_candy_rock',
      ], 'ars_nouveau:source_gem', [
        event.recipes.createDeploying(t, [t, 'chipped:moss_block_1']),
        event.recipes.createDeploying(t, [t, 'minecraft:rooted_dirt']),
        event.recipes.createDeploying(t, [t, 'chipped:amethyst_block_30']),
        event.recipes.createDeploying(t, [t, 'minecraft:netherrack'])
      ]).transitionalItem(t).loops(8)

    event.recipes.createFilling(Item.of("cae:source_keystone"),[Fluid.of("kubejs:source_essence",1000),"kubejs:source_candy_rock"])
})
global.tickWr = 0;
    onEvent('level.tick', event =>{
        if (event.level.getDimension() != 'minecraft:overworld') {return}
        global.tickWr++
        if (global.tickWr >= 5) {
            global.tickWr = 0
            //event.server.tell("5 Seconds have passed!")
            event.level.getEntities('@e[type=thermal:ice_tnt]').forEach(Wraith =>{
                
                if (Wraith.fullNBT.getInt("Fuse") <= 6){
                let r = 3;
                for (let a = -r; a <= r; a++) {
					for (let b = -r; b <= r; b++) {
						for (let c = -r; c <= r; c++) {
                            if (Wraith.block.offset(a,b,c).id == 'minecraft:magma_block'){Wraith.block.offset(a,b,c).set('minecraft:blue_ice')
                            }
                }}}
                Wraith.remove()
            }
            })
            }
    })


    global.tickCr = 0;
    onEvent('level.tick', event =>{
        if (event.level.getDimension() != 'minecraft:overworld') {return}
        global.tickCr++
        if (global.tickCr >= 5) {
            global.tickCr = 0
            //event.server.tell("5 Seconds have passed!")
            event.level.getEntities('@e[type=thermal:fire_tnt]').forEach(Wraith =>{
                
                if (Wraith.fullNBT.getInt("Fuse") <= 6){
                let r = 3;
                for (let a = -r; a <= r; a++) {
					for (let b = -r; b <= r; b++) {
						for (let c = -r; c <= r; c++) {
                            if (Wraith.block.offset(a,b,c).id == 'minecraft:stone'){Wraith.block.offset(a,b,c).set('minecraft:magma_block')
                        }
                }}}
                Wraith.remove()
            }
            })
            }
    })


