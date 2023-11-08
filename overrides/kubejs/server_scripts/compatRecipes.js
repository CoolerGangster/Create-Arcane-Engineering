let wrencharray = []
let dumbshitarray = [
    "cae:gold_casing",
    "2x create:portable_storage_interface",
    "2x create:mechanical_harvester",
    "2x create:mechanical_plough",
    "4x create:andesite_funnel",
    "4x create:andesite_tunnel",
    "2x create:weighted_ejector",
    "createaddition:rolling_mill",
    //"alloyedguns:basic_gun_kit",
    "create:mechanical_drill",
    "create:mechanical_saw",
    "thermal:dynamo_stirling",
    "create:encased_fan",
    "create:mechanical_press",
    "create:mechanical_mixer",
    "create:deployer",
    "thermal:device_tree_extractor",
    "ae2:sky_compass",
    "4x createaddition:connector",
    "createaddition:alternator",
    "3x create:mechanical_crafter",
    "torchmaster:feral_flare_lantern",
    "thermal:dynamo_numismatic",
    "createaddition:tesla_coil",
    "createaddition:modular_accumulator",
    "createaddition:portable_energy_interface",
    "createaddition:electric_motor",
    "custommachinery:custom_machine_block",
    "4x create:redstone_link",
    "create:powered_toggle_latch",
    "create:powered_latch",
    "create:pulse_extender",
    "create:pulse_repeater",
    "minecraft:repeater",
    "minecraft:comparator",
    "minecraft:daylight_detector",
    "2x create:sequenced_gearshift",
    "create:rotation_speed_controller",
    "create:mechanical_arm",
    "2x create:stockpile_switch",
    "2x create:content_observer",
    "2x create:stockpile_switch",
    "4x create:brass_funnel",
    "4x create:brass_tunnel",
    "2x create:display_link",
    "6x create:display_board",
    "2x create:smart_fluid_pipe",
    "create:hose_pulley",
    "2x create:portable_fluid_interface",
    "thermal:device_soil_infuser",
    "3x create:steam_engine",
    // "alloyedguns:advanced_gun_kit",
    "create:copper_backtank",
    "2x create:spout",
    "create:item_drain",
    "thermal:dynamo_magmatic",
    "thermal:device_water_gen",
    "thermal:tinker_bench",
    "thermal:device_composter",
    "thermal:device_fisher",
    "thermal:device_hive_extractor",
    "thermal:fluid_cell",
    "2x tconstruct:seared_melter",
    "2x functionalstorage:void_upgrade",
    "thermal:upgrade_augment_1",
    "railways:track_coupler",
    "create:controls",
    "create:track_observer",
    "thermal:energy_cell",
    "2x create:track_station",
    "4x create:track_signal",
    "thermal:upgrade_augment_2",
    "8x pneumaticcraft:thermal_lagging",
    "thermal:dynamo_lapidary",
    "pneumaticcraft:turbine_rotor",
    "pneumaticcraft:air_compressor",
    "pneumaticcraft:liquid_compressor",
    "pneumaticcraft:thermal_compressor",
    "pneumaticcraft:refinery_output",
    "pneumaticcraft:refinery",
    "pneumaticcraft:gas_lift",
    "pneumaticcraft:thermopneumatic_processing_plant",
    "4x pneumaticcraft:turbine_blade",
    "8x pneumaticcraft:heat_pipe",
    "16x pneumaticcraft:pressure_tube",
    "4x pneumaticcraft:manual_compressor",
    "pneumaticcraft:charging_station",
    "thermal:device_potion_diffuser",
    "thermal:device_nullifier",
    "thermal:device_collector",
    "thermal:device_rock_gen",
    "thermal:upgrade_augment_3",
    "compressedcreativity:industrial_air_blower",
    "compressedcreativity:air_blower",
    "compressedcreativity:compressed_air_engine",
    "compressedcreativity:rotational_compressor",
    "pneumaticcraft:elevator_base",
    "pneumaticcraft:programmer",
    "pneumaticcraft:electrostatic_compressor",
    "pneumaticcraft:air_cannon",
    "pneumaticcraft:advanced_liquid_compressor",
    "pneumaticcraft:advanced_air_compressor",
    "pneumaticcraft:omnidirectional_hopper",
    "pneumaticcraft:liquid_hopper",
    "pneumaticcraft:pneumatic_dynamo",
    "pneumaticcraft:vacuum_trap",
    "pneumaticcraft:pressurized_spawner",
    "pneumaticcraft:spawner_agitator",
    "pneumaticcraft:solar_compressor",
    "thermal:dynamo_compression",
    "thermal:machine_crucible",
    "thermal:machine_furnace",
    "thermal:machine_chiller",
    "thermal:machine_pyrolyzer",
    "thermal:machine_bottler",
    "thermal:machine_centrifuge",
    "thermal:machine_refinery",
    "thermal:machine_pulverizer",
    "thermal:machine_smelter",
    "thermal:machine_sawmill",
    "thermal:machine_brewer",
    "thermal:machine_insolator",
    "thermal:machine_crystallizer",
    "thermal:machine_press",
    "thermal:machine_crafter",
    "pneumaticcraft:assembly_controller",
    "pneumaticcraft:assembly_laser",
    "pneumaticcraft:assembly_drill",
    "pneumaticcraft:assembly_io_unit_export",
    "pneumaticcraft:assembly_io_unit_import",
    "pneumaticcraft:assembly_platform",
    //"alloyedguns:complex_gun_kit",
    "thermal:dynamo_gourmand",
    "integrateddynamics:delay",
    "integrateddynamics:mechanical_drying_basin",
    "integrateddynamics:mechanical_squeezer",
    "integrateddynamics:materializer",
    "integrateddynamics:proxy",
    "integrateddynamics:energy_battery",
    "integrateddynamics:variablestore",
    "integratednbt:nbt_extractor",
    "integrateddynamics:logic_programmer",
    "integrateddynamics:portable_logic_programmer",
    "4x ae2:formation_core",
    "4x ae2:annihilation_core",
    "ae2:controller",
    "ae2:inscriber",
    "thermal:dynamo_disenchantment",
    "ae2:semi_dark_monitor",
    "ae2:condenser",
    "ae2:terminal",
    "2x entangled:block",
    "pneumaticcraft:aerial_interface",
    "cae:zinc_casing",
    "cae:gold_casing",
    "cae:enderium_casing",
    "cae:supercritical_casing"
]

onEvent('block.right_click', event => {
    if (event.block.id == 'minecraft:diamond_block' && event.item.id == "minecraft:flint_and_steel") {

        event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-2 ~1 ~ ~2 ~4 ~ minecraft:nether_portal`)
        event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} setblock ~ ~ ~-1 minecraft:oak_sign[rotation=1]{Text1:"\"Please Do Not\"",Text2:"\"Update Portal Blocks\"",Text3:"\"The portal will break\"",Text4:"\"You will cry!\""}`)

        event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-3 ~ ~ ~3 ~7 ~ chipped:crying_obsidian_63`)
        event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ chipped:shroomlight_15`)
        event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-2 ~1 ~ ~2 ~6 ~ minecraft:nether_portal`)

    }

})
onEvent('block.break', event => {
    if (event.player.isCreativeMode()) { return }
    if (event.player.mainHandItem.id.includes("gavel") && (event.player.mainHandItem.hasEnchantment("silk_touch", 1) || event.block.id == "minecraft:ancient_debris")) {
        event.player.setStatusMessage(Text.darkRed("Thou shall not mine stuff with a Gavel and Silk Touch"))
        event.cancel()
    }
})

onEvent('recipes', event => {
    event.recipes.create.mixing("thermal:steel_ingot", ["thermal:coal_coke", "thermal:iron_dust"])
    let t = 'kubejs:incomplete_cogwheel'

    event.recipes.createSequencedAssembly([
        Item.of('create:cogwheel', 16),
    ], 'create:shaft', [
        event.recipes.createDeploying(t, [t, '#minecraft:wooden_buttons']),
        event.recipes.createCutting(t, t)
    ]).transitionalItem('kubejs:incomplete_cogwheel').loops(4)
    function nineitemstoitem(o, i) {
        event.shaped(o, [
            'SSS',
            'SSS',
            'SSS'
        ], {
            S: i
        })
    }
    function itemtoninetimes(o, i) {
        event.shapeless(Item.of(o, 9), Item.of(i))
    }
    event.shapeless(Item.of("ars_nouveau:source_gem", 4), "ars_nouveau:source_gem_block")
    itemtoninetimes("forbidden_arcanus:arcane_crystal", "forbidden_arcanus:arcane_crystal_block")
    itemtoninetimes("create:andesite_alloy", "create:andesite_alloy_block")
    itemtoninetimes("thermal:invar_ingot", "thermal:invar_block")
    nineitemstoitem("thermal:invar_ingot", "thermal:invar_nugget")
    event.remove({ id: 'forbidden_arcanus:golden_orchid_seeds' })
    event.remove({ output: 'architects_palette:ancient_plating_slab' })
    event.remove({ id: 'create:crafting/kinetics/belt_connector' })
    //event.shapeless('create:large_cogwheel',['create:cogwheel','#minecraft:planks'])
    event.remove({ id: 'tinkers_reforged:smeltery/melting/redstone' })
    event.remove({ id: 'tinkers_reforged:smeltery/melting/redstone_block' })
    event.remove({ mod: 'extendedgears' })
    event.remove({ id: 'beyond_earth:steel_ingot' })
    event.remove({ id: 'rocketcraft' })
    //event.remove({id: 'create:deploying/large_cogwheel'})
    //event.remove({id: 'create:deploying/cogwheel'})
    //event.remove({id: 'create:crafting/kinetics/cogwheel'})
    //event.remove({id: 'create:crafting/kinetics/large_cogwheel'})
    event.remove({ output: 'thermal:invar_ingot' })
    event.remove({ id: 'create:crafting/materials/electron_tube' })
    event.remove({ id: 'create:sequenced_assembly/precision_mechanism' })
    event.remove({ id: 'ae2:network/blocks/crystal_processing_charger' })
    event.remove({ id: 'create:crushing/tuff' })
    event.remove({ id: 'ae2:blasting/silicon_from_certus_quartz_dust' })
    event.smelting('ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust')
    event.remove({ id: 'create:mixing/coal_deepslate' })
    event.remove({ id: 'create:mixing/charcoal_deepslate' })
    event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/chain' })
    event.replaceInput({ id: "chunkymcchunkface:chunk_loader" }, "#forge:nether_stars", "kubejs:integrational_machine")
    //making stuff renewable
    event.recipes.createMixing('8x minecraft:deepslate', ['8x minecraft:cobblestone', '#minecraft:coals']).id('renewabledeepslate')
    event.recipes.create.haunting('minecraft:tuff', 'minecraft:infested_deepslate').id('tufffromdeepslate')
    event.recipes.create.filling('minecraft:ink_sac', ['minecraft:dried_kelp', Fluid.of('kubejs:chromatic_waste', 500)]).id('inksacsrenewables')
    //dye automations
    let corundum = ["red", "orange", "yellow", "green", "blue", "white", "black"]
    corundum.forEach(Color => {
        event.recipes.createPressing(Item.of('minecraft:' + Color + '_dye'), 'quark:' + Color + '_corundum_cluster')
    });
    /*event.shaped('8x create:cogwheel', [ //TODO: Check if ME controller is wrenchpickupable
        'GGG',
        'GAG',
        'GGG'
      ], {
        G: '#minecraft:wooden_buttons',
        A: 'create:andesite_alloy'
    })
    event.shaped('2x create:large_cogwheel', [
        'GPG',
        'PAP',
        'GPG'
      ], {
        G: '#minecraft:wooden_buttons',
        A: 'create:andesite_alloy',
        P: '#minecraft:planks'
    })*/
    event.shaped('kubejs:screwdriver', [
        '  G',
        'PAP',
        ' P '
    ], {
        G: 'minecraft:iron_ingot',
        A: 'create:andesite_alloy',
        P: 'thermal:cured_rubber'
    })
    event.shaped('2x kubejs:screwdriver', [
        '  G',
        'PAP',
        ' P '
    ], {
        G: 'minecraft:iron_ingot',
        A: 'create:andesite_alloy',
        P: 'kubejs:enriched_rubber'
    })

    const cogswoodnatural = ["birch", "oak", "dark_oak", "acacia", "jungle"]
    const cogsunatural = ["crimson", "warped"]
    const cogsmetal = ['iron', 'steel', 'copper']

    /*cogswoodnatural.forEach(element => {
        event.shapeless(Item.of('extendedgears:'+ element + '_cogwheel', 8),[Item.of("create:cogwheel", 8) ,'immersive_weathering:' + element + "_bark"])
        event.shapeless(Item.of('extendedgears:large_'+ element +'_cogwheel', 4),[Item.of("create:large_cogwheel", 4) ,'immersive_weathering:' + element + "_bark"])
        event.shapeless(Item.of('extendedgears:large_'+ element + '_cogwheel'),["extendedgears:"+element +'_cogwheel',Item.of('minecraft:' + element + '_planks ',2)])
        event.shapeless('create:cogwheel','extendedgears:'+element+ '_cogwheel')
        event.shapeless( 'create:large_cogwheel','extendedgears:large_'+element+ '_cogwheel')
    });
    cogsunatural.forEach(element => {
        event.shapeless(Item.of('extendedgears:'+ element + '_cogwheel', 8),[Item.of("create:cogwheel", 8) ,'immersive_weathering:' + element + '_scales'])
        event.shapeless(Item.of('extendedgears:large_'+ element + '_cogwheel', 4),[Item.of("create:large_cogwheel", 4) ,'immersive_weathering:' + element + "_scales"])
        event.shapeless(Item.of('extendedgears:large_'+ element + '_cogwheel'),["extendedgears:"+element +'_cogwheel' ,Item.of('minecraft:' + element + '_planks ',2)])
        event.shapeless('create:cogwheel','extendedgears:'+element+ '_cogwheel')
        event.shapeless('create:large_cogwheel','extendedgears:large_'+element+ '_cogwheel')
    });
    cogsmetal.forEach(element => {
        event.shapeless(Item.of('extendedgears:'+ element + '_cogwheel', 8),[Item.of("create:cogwheel", 8) , '#forge:plates/' + element])
        event.shapeless(Item.of('extendedgears:large_'+ element + '_cogwheel', 4),[Item.of("create:large_cogwheel", 4) ,'#forge:plates/' + element])
        event.shapeless(Item.of('extendedgears:large_'+ element + '_cogwheel'),["extendedgears:"+element +'_cogwheel' ,Item.of('#forge:nuggets/' + element,2)])
        event.shapeless('create:cogwheel','extendedgears:'+element+ '_cogwheel')
        event.shapeless('create:large_cogwheel','extendedgears:large_'+element+ '_cogwheel')
    });
    
    event.shapeless('create:cogwheel','#forge:cogwheels')
    event.shapeless('create:large_cogwheel','#forge:large_cogwheels')
    */

    event.shaped(KJ('andesite_machine'), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: CR('andesite_casing'),
        S: '#create:kinetic_mechanisms'
    })
    event.shaped(KJ('sealed_machine'), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: CR('copper_casing'),
        S: KJ('sealed_mechanism')
    })
    event.shaped(KJ('brass_machine'), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: CR('brass_casing'),
        S: CR('precision_mechanism')
    })
    event.shaped(KJ('sturdy_machine'), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'create:railway_casing',
        S: KJ('sturdy_mechanism')
    })

    //ingots

    const gem = ['apatite', 'cinnabar', 'niter', 'sulfur', 'diamond', 'lapis', 'emerald', 'quartz'] //do with tags
    const TRingots = ['aluminum',
        'blazing_copper',
        'duralumin',
        'electrical_copper',
        'felsteel',
        'gausum',
        'kepu',
        'lavium',
        'qivium',
        'chorus_metal',
        'durasteel',
        'crusteel',
        'yokel',
        'wavy',
        'baolian',
        'galu',
        'magma_steel', 'cyber_steel']
    const TEingots = [
        "signalum",
        "enderium",
        "signalum",
        "constantan",
        "lumium",
        "invar",
        "electrum",
        "bronze",
        "steel",
        'tin',
        'lead',
        'silver',
        "gold",
        "netherite",
        "copper",
        'nickel']

    function crush2dust(In) { event.recipes.create.crushing("thermal:" + In + "_dust", "#forge:ingots/" + In) }
    function crush3dust(In) { event.recipes.create.crushing("thermal:" + In + "_dust", "#forge:gems/" + In) }
    function crush4dust(In) { event.recipes.create.crushing("tinkers_reforged:" + In + "_dust", "#forge:ingots/" + In) }
    function press2plate(In) {
        event.recipes.create.pressing("thermal:" + In + "_plate", "#forge:ingots/" + In)
        event.custom({
            "type": "lychee:block_crushing",
            "item_in": [
                {
                    "item": "thermal:" + In + "_ingot"
                },
            ],
            "post": [
                {
                    "type": "drop_item",
                    "item": "thermal:" + In + "_plate",
                    "contextual": {
                        "type": "chance",
                        "chance": 0.80
                    }
                }
            ]
        })
    }

    TEingots.forEach(element => {
        crush2dust(element)
        press2plate(element)
    })
    gem.forEach(element => {
        crush3dust(element)
    })
    TRingots.forEach(element => {
        //crush4dust(element)
    })
    crush2dust('iron')
    function dolesheet(In, out) {
        event.custom({
            "type": "lychee:block_crushing",
            "item_in": [
                {
                    "item": In
                },
            ],
            "post": [
                {
                    "type": "drop_item",
                    "item": out,
                    "contextual": {
                        "type": "chance",
                        "chance": 0.80
                    }
                }
            ]
        })
    }
    let dolesheetarray = [
        ["minecraft:copper_ingot", CR('copper_sheet')],
        [CR("brass_ingot"), CR("brass_sheet")],
        [MC("iron_ingot"), CR("iron_sheet")],
        [MC("gold_ingot"), CR("golden_sheet")],
        [CR("zinc_ingot"), "createdeco:zinc_sheet"],
        ["createdeco:cast_iron_ingot", "createdeco:cast_iron_sheet"],
        [CR("refined_radiance"), KJ("radiant_sheet")]
    ]
    dolesheetarray.forEach(i => {
        dolesheet(i[0], i[1])
    });

    // traintracks
    event.forEachRecipe({ output: /^railways\:track_/ }, r => {
        if (r.outputItems[0].id != "railways:track_coupler" && r.outputItems[0].id != "railways:track_switch_andesite" && r.outputItems[0].id != "railways:track_switch_brass" && r.outputItems[0].id != "railways:track_monorail") {
            event.remove({ output: r.outputItems[0].id })
            let wood = r.outputItems[0].id.replace("railways:track_", "")
            let woodId = wood.replace("byg_", "byg:").replace("biomesoplenty_", "biomesoplenty:").replace("white_mangrove", "mangrove")
            let nuggets = '#create:funkynuggets'
            let count = 16
            if (!woodId.includes(":")) { woodId = "minecraft:" + woodId }

            if (wood == "ender") {
                woodId = "minecraft:end_stone_brick"
                nuggets = "forbidden_arcanus:ender_pearl_fragment"
            }
            if (wood == "blackstone" || wood == "crimson" || wood == "warped") { nuggets = "minecraft:gold_nugget" }

            let slabs = woodId + '_slab'

            if (wood == "tieless") { slabs = "minecraft:glass_pane" }
            if (wood == "phantom") { slabs = "minecraft:phantom_membrane", count = 48 }

            let c = 'railways:track_incomplete_' + wood

            event.recipes.createSequencedAssembly([
                count + 'x ' + r.outputItems[0].id
            ], slabs, [
                event.recipes.createDeploying(c, [c, nuggets]),
                event.recipes.createDeploying(c, [c, nuggets]),
                event.recipes.createPressing(c, c)
            ]).transitionalItem(c).loops(1)
        }
    })
    event.remove({ output: "railways:track_monorail" })
    let c = "railways:track_incomplete_monorail"
    event.recipes.createSequencedAssembly([
        '16x railways:track_monorail'
    ], "create:metal_girder", [
        event.recipes.createDeploying(c, [c, "create:metal_bracket"]),
        event.recipes.createDeploying(c, [c, "create:iron_sheet"]),
        event.recipes.createPressing(c, c)
    ]).transitionalItem(c).loops(1)

    event.remove({ id: 'create:sequenced_assembly/track' })
    c = 'create:incomplete_track'
    event.recipes.createSequencedAssembly([
        '16x create:track',
    ], '#create:sleepers', [
        event.recipes.createDeploying(t, [t, '#create:funkynuggets']),
        event.recipes.createDeploying(t, [t, '#create:funkynuggets']),
        event.recipes.createPressing(t, t)
    ]).transitionalItem(c).loops(1)



    const runicrelics = [['zombie_heart', '6x minecraft:rotten_flesh'], ['squid_beak', '3x minecraft:ink_sac'], ['rib_bone', '5x minecraft:bone'], ['catalyzing_gland', '4x minecraft:gunpowder'], ['chelicerae', '2x minecraft:spider_eye'], ['slime_pearl', '4x minecraft:slime_ball'], ['bat_wing', '2x minecraft:feather'], ['withered_rib', '2x tconstruct:necrotic_bone'], ['molten_core', '2x minecraft:blaze_rod'], ['eye_of_the_storm', '2x thermal:blitz_rod'], ['nebulous_heart', '3x minecraft:ender_eye'], ['frozen_core', '5x minecraft:snowball']]

    runicrelics.forEach(element => {
        event.shapeless('reliquary:' + element[0], [element[1], 'kubejs:runic_tablet'])
    });

    event.shapeless('create:blaze_burner', ['create:empty_blaze_burner', 'kubejs:runic_tablet'])



    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:kerosene",
            "amount": 1000
        },
        "burnTime": 15000,
        "superheated": true,
        "conditions": [
            {
                "fluidTag": "forge:kerosene",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })
    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:lpg",
            "amount": 1000
        },
        "burnTime": 15000,
        "superheated": true,
        "conditions": [
            {
                "fluidTag": "forge:lpg",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })






    //start of the multicut shit
    let multicut = (outputs, input, remove_old) => {
        outputs.forEach(output => {
            console.log(`${Item.of(input)} to ${Item.of(output)}`)
            if (remove_old) {
                event.remove({ output: output })
            };
            event.stonecutting(output, input)
            if (remove_old) {
                event.recipes.createCompacting(input, [output, "kubejs:radiant_mechanism"])
            }
            if (output.toString().startsWith("x ", 1)) { output = output.slice(3) }
            wrencharray.push(Item.of(output))
        });
    };
    const andesite_machines_cutting = [
        Item.of('create:portable_storage_interface', 2),
        Item.of('create:mechanical_harvester', 2),
        Item.of('create:mechanical_plough', 2),
        Item.of('create:andesite_funnel', 4),
        Item.of('create:andesite_tunnel', 4),
        Item.of('create:weighted_ejector', 2),
        //Item.of('alloyedguns:basic_gun_kit'),
        Item.of('createaddition:rolling_mill', 1)

    ];
    multicut(andesite_machines_cutting, "kubejs:andesite_machine", true);


    //smithin
    let machine_smithing = (recipes, machine, remove_old) => {
        recipes.forEach(entry => {
            console.log(`Attempting to Create ${Item.of(entry[0])} to ${Item.of(entry[1])} from ${machine}`)
            if (remove_old) {
                event.remove({ output: entry[1] })
            };
            event.smithing(entry[1], machine, entry[0])
            if (remove_old) {
                event.recipes.createCompacting([machine, Item.of(entry[0]).withChance(0.4)], [entry[1], "kubejs:radiant_mechanism"])
            }
            if (!entry[1].toString().startsWith("x ", 1) && !entry[1].toString().startsWith("x ", 2)) {
                if (Item.of(entry[1]).isBlock()) {
                    event.recipes.create.itemApplication(entry[1], [machine, entry[0]])
                }
            }
            if (entry[1].toString().startsWith("x ", 1) || entry[1].toString().startsWith("x ", 2)) {

                event.recipes.create.deploying(entry[1], [machine, entry[0]])

            }

            if (entry[1].toString().startsWith("x ", 1)) { entry[1] = entry[1].slice(3) }
            wrencharray.push(Item.of(entry[1]))

        });
    };


    const andesite_smithing = [
        ["thermal:drill_head", "create:mechanical_drill"],
        ["thermal:saw_blade", "create:mechanical_saw"],
        ["thermal:rf_coil", "thermal:dynamo_stirling"],
        [CR('propeller'), 'create:encased_fan'],
        [MC('iron_block'), 'create:mechanical_press'],
        [CR('whisk'), 'create:mechanical_mixer'],
        ['create:brass_hand', 'create:deployer'],
        [MC('bucket'), TE('device_tree_extractor')],
        ['minecraft:compass', 'ae2:sky_compass'],
        ['createaddition:copper_rod', Item.of('createaddition:connector', 4)],
        ['createaddition:capacitor', 'createaddition:alternator']

    ];
    machine_smithing(andesite_smithing, "kubejs:andesite_machine", true);
    const brass_smithing = [
        [MC('crafting_table'), Item.of('create:mechanical_crafter', 3)],
        [MC('glowstone_dust'), 'torchmaster:feral_flare_lantern'],
        ["thermal:rf_coil", 'thermal:dynamo_numismatic'],
        ['#ae2:all_fluix', 'createaddition:tesla_coil'],
        ["createaddition:capacitor", "createaddition:modular_accumulator"],
        ['createaddition:connector', "createaddition:portable_energy_interface"],
        ['create:rotation_speed_controller', "createaddition:electric_motor"],
        ['thermal:silver_coin', Item.of('custommachinery:custom_machine_item', '{machine:"quests:quest_station"}')],
        ['#functionalstorage:drawer', 'functionalstorage:storage_controller']

    ];
    machine_smithing(brass_smithing, "kubejs:brass_machine", true)
    const brass_machines_cutting = [
        Item.of('create:sequenced_gearshift', 2),
        Item.of('create:rotation_speed_controller', 1),
        Item.of('create:mechanical_arm', 1),
        Item.of('create:stockpile_switch', 2),
        Item.of('create:content_observer', 2),
        Item.of('create:stockpile_switch', 2),
        Item.of('create:brass_funnel', 4),
        Item.of('create:brass_tunnel', 4),
        Item.of('create:display_link', 2),
        Item.of('create:display_board', 6)
    ];
    const brass_redstone = [
        Item.of('create:redstone_link', 4),
        '2x create:powered_toggle_latch',
        '2x create:powered_latch',
        '2x create:pulse_extender',
        '2x create:pulse_repeater',
        '2x minecraft:repeater',
        '2x minecraft:comparator',
        '2x minecraft:daylight_detector'
    ]
    multicut(brass_redstone, 'kubejs:brass_machine', false)
    multicut(brass_machines_cutting, "kubejs:brass_machine", true)

    const copper_machines_cutting = [
        Item.of('create:smart_fluid_pipe', 2),
        Item.of('create:hose_pulley', 1),
        Item.of('create:portable_fluid_interface', 2),
        //Item.of('alloyedguns:advanced_gun_kit'),
        Item.of('create:steam_engine', 3),


    ];
    const copper_smithing = [
        [MC("copper_block"), 'create:copper_backtank'],
        [MC('hopper'), Item.of('create:spout', 2)],
        [MC("iron_bars"), 'create:item_drain'],
        [TE('rf_coil'), 'thermal:dynamo_magmatic'],
        [MC('bucket'), 'thermal:device_water_gen'],
        [MC('crafting_table'), 'thermal:tinker_bench'],
        [MC('composter'), 'thermal:device_composter'],
        [MC('fishing_rod'), 'thermal:device_fisher'],
        [MC('shears'), 'thermal:device_hive_extractor'],
        ['thermal:fluid_cell_frame', 'thermal:fluid_cell'],
        ['tconstruct:seared_ingot_gauge', Item.of('tconstruct:seared_melter', 2)],
        ['minecraft:obsidian', Item.of('functionalstorage:void_upgrade', 2)],
        ['minecraft:redstone', 'thermal:upgrade_augment_1']

    ];
    multicut(copper_machines_cutting, "kubejs:sealed_machine", true)
    machine_smithing(copper_smithing, "kubejs:sealed_machine", true)
    const sturdy_smithing = [
        [MC('lever'), 'create:controls'],
        [MC("observer"), '2x create:track_observer'],
        ['thermal:energy_cell_frame', 'thermal:energy_cell'],
        [MC('compass'), Item.of('create:track_station', 2)],
        [CR('electron_tube'), Item.of('create:track_signal', 4)],
        ['minecraft:redstone', 'thermal:upgrade_augment_2'],
        ['#forge:glass', Item.of("pneumaticcraft:thermal_lagging", 8)],
        ['thermal:rf_coil', 'thermal:dynamo_lapidary'],
        ['pneumaticcraft:turbine_rotor', 'pneumaticcraft:fluid_mixer'],
        ['minecraft:furnace', 'pneumaticcraft:air_compressor'],
        ['pneumaticcraft:small_tank', 'pneumaticcraft:liquid_compressor'],
        ['create:blaze_burner', 'pneumaticcraft:thermal_compressor'],
        ['minecraft:diamond', 'pneumaticcraft:refinery_output'],
        ['create:precision_mechanism', 'pneumaticcraft:refinery'],
        ['pneumaticcraft:drill_pipe', 'pneumaticcraft:gas_lift'],
        ['create:basin', 'pneumaticcraft:thermopneumatic_processing_plant'],
        ["create:blaze_burner", "compressedcreativity:heater"]

    ];
    const sturdy_cutting = [
        Item.of('pneumaticcraft:turbine_blade', 4),
        Item.of("pneumaticcraft:heat_pipe", 8),
        "2x railways:track_coupler"

    ]
    const sturdy_cutting2 = [
        Item.of('pneumaticcraft:pressure_tube', 16),
        Item.of('pneumaticcraft:manual_compressor', 4)
    ]
    machine_smithing(sturdy_smithing, "kubejs:sturdy_machine", true)
    multicut(sturdy_cutting, "kubejs:sturdy_machine", true)
    multicut(sturdy_cutting2, "kubejs:sturdy_machine", false)
    const plastic_machines_smithing = [
        ['minecraft:glass_bottle', 'thermal:device_potion_diffuser'],
        ['minecraft:ender_pearl', 'thermal:device_collector'],
        ['minecraft:piston', 'thermal:device_rock_gen'],
        ['minecraft:redstone', 'thermal:upgrade_augment_3'],
        ['pneumaticcraft:reinforced_pressure_tube', 'compressedcreativity:industrial_air_blower'],
        ['create:copper_casing', 'compressedcreativity:air_blower'],
        ['compressedcreativity:engine_rotor', 'compressedcreativity:compressed_air_engine'],
        ['create:brass_casing', 'compressedcreativity:rotational_compressor'],
        ['create:gantry_carriage', 'pneumaticcraft:elevator_base'],
        ['create:precision_mechanism', 'pneumaticcraft:programmer'],
        ['kubejs:runic_tablet', 'pneumaticcraft:electrostatic_compressor'],
        ['pneumaticcraft:cannon_barrel', 'pneumaticcraft:air_cannon'],
        ['pneumaticcraft:liquid_compressor', 'pneumaticcraft:advanced_liquid_compressor'],
        ['pneumaticcraft:air_compressor', 'pneumaticcraft:advanced_air_compressor'],
        ['minecraft:hopper', 'pneumaticcraft:omnidirectional_hopper'],
        ['pneumaticcraft:small_tank', 'pneumaticcraft:liquid_hopper'],
        ['thermal:rf_coil', 'pneumaticcraft:pneumatic_dynamo'],
        ['minecraft:ender_eye', 'pneumaticcraft:vacuum_trap'],
        ['pneumaticcraft:printed_circuit_board', 'pneumaticcraft:pressurized_spawner'],
        ['spirit:broken_spawner', 'pneumaticcraft:spawner_agitator'],
        ['pneumaticcraft:solar_cell', 'pneumaticcraft:solar_compressor']
    ]
    const plastic_cutting = [
        Item.of("pneumaticcraft:charging_station")
    ]
    event.remove({ id: "ae2:vibration_chamber" })
    event.remove({ id: "ae2:quartz_growth_accelerator" })
    event.replaceInput({ id: "forbidden_arcanus:utrem_jar" }, "#forge:glass/colorless", "glassential:glass_ghostly")


    multicut(plastic_cutting, 'kubejs:plastic_machine', true)
    machine_smithing(plastic_machines_smithing, "kubejs:plastic_machine", true)
    const invar_machines_smithing = [
        ['minecraft:glowstone_dust', 'ae2:semi_dark_monitor'],
        ['minecraft:redstone_block', 'ae2:energy_acceptor'],
        [TE("machine_crafter"), 'ae2:crafting_terminal'],
        ['ae2:crafting_terminal', 'ae2:wireless_crafting_terminal'],
        ['ae2:terminal', 'ae2:wireless_terminal'],
        ['ae2:wireless_terminal', 'ae2:wireless_crafting_terminal'],
        [AE2("fluix_pearl"), AE2('condenser')],
        [MC("chest"), AE2('chest')],
        ['integratedterminals:part_terminal_storage', 'ae2:terminal'],
        [TE('rf_coil'), TE("dynamo_compression")],
        ['minecraft:cactus', 'thermal:device_nullifier'],
        [MC('nether_bricks'), TE('machine_crucible')],
        [MC('bricks'), TE('machine_furnace')],
        [MC('packed_ice'), TE('machine_chiller')],
        [MC('blaze_rod'), TE('machine_pyrolyzer')],
        [MC('bucket'), TE('machine_bottler')],
        [MC('compass'), TE('machine_centrifuge')],
        ['#forge:glass', TE('machine_refinery')],
        [MC('flint'), TE('machine_pulverizer')],
        [MC('blast_furnace'), TE('machine_smelter')],
        [TE('saw_blade'), TE('machine_sawmill')],
        [MC('brewing_stand'), TE('machine_brewer')],
        [MC('dirt'), TE('machine_insolator')],
        [MC('quartz'), TE('machine_crystallizer')],
        ['#functionalstorage:drawer', "functionalstorage:controller_extension"],
        [CR('mechanical_press'), TE('machine_press')],
        [MC('crafting_table'), TE('machine_crafter')],
        ['create:precision_mechanism', 'pneumaticcraft:assembly_controller'],
        ['pneumaticcraft:pneumatic_cylinder', 'pneumaticcraft:assembly_laser'],
        ['create:mechanical_drill', 'pneumaticcraft:assembly_drill'],
        ['create:mechanical_arm', 'pneumaticcraft:assembly_io_unit_export'],
        ['create:deployer', 'pneumaticcraft:assembly_io_unit_import'],
        ['create:depot', 'pneumaticcraft:assembly_platform']
    ]
    event.remove({ id: 'integrateddynamics:crafting/logic_director' })
    event.remove({ id: "ae2:network/cables/glass_fluix" })
    event.remove({ id: "ae2:network/cables/covered_fluix" })
    event.remove({ id: "ae2:network/cables/smart_fluix" })
    event.shapeless("3x ae2:fluix_smart_cable", ["ae2:fluix_covered_cable", "redstone", "glowstone_dust"])
    event.remove({ id: "ae2:network/cables/dense_smart_fluix" })
    event.shapeless("3x ae2:fluix_smart_dense_cable", ["ae2:fluix_covered_dense_cable", "redstone", "glowstone_dust"])

    event.shapeless("12x ae2:fluix_glass_cable", ["2x ae2:fluix_crystal", "ae2:quartz_fiber"])
    event.recipes.create.filling(Item.of("ae2:fluix_covered_cable"), [Item.of("ae2:fluix_glass_cable"), Fluid.of("pneumaticcraft:plastic", 90)])
    machine_smithing(invar_machines_smithing, "kubejs:radiant_machine", true)
    const integrational_smithing = [

        ['thermal:rf_coil', 'thermal:dynamo_gourmand'],
        ['integrateddynamics:part_display_panel', 'integratedterminals:part_terminal_storage'],
        ['minecraft:crafting_table', 'integratedterminals:part_terminal_crafting_job'],
        ['integrateddynamics:part_static_light_panel', 'integrateddynamics:part_display_panel'],
        ['minecraft:clock', 'integrateddynamics:delay'],
        ['integrateddynamics:drying_basin', 'integrateddynamics:mechanical_drying_basin'],
        ['integrateddynamics:squeezer', 'integrateddynamics:mechanical_squeezer'],
        ['integrateddynamics:variable', 'integrateddynamics:materializer'],
        ['integrateddynamics:variablestore', 'integrateddynamics:proxy'],
        ['minecraft:chest', 'integrateddynamics:variablestore'],

        ['integrateddynamics:variable_transformer_input', 'integratednbt:nbt_extractor']

    ]
    const integrational_manual = [
        ['createaddition:modular_accumulator', 'integrateddynamics:energy_battery']
    ]
    machine_smithing(integrational_manual, 'kubejs:integrational_machine', false)
    const radiant_cutting = [
        //Item.of('alloyedguns:complex_gun_kit')
    ]
    event.replaceInput({ id: "create:crafting/kinetics/elevator_pulley" }, 'minecraft:dried_kelp_block', 'thermal:cured_rubber_block')
    event.replaceInput({ id: "create:crafting/kinetics/train_door" }, "create:brass_sheet", "create:sturdy_sheet")
    event.remove({ id: "ars_creo:starbuncle_wheel" })
    event.shaped("ars_creo:starbuncle_wheel", ["XXX", "XWX", "XXX"], { X: "ars_nouveau:starbuncle_shards", W: "create:water_wheel" })
    event.replaceInput({ id: "create:crafting/kinetics/train_trapdoor" }, "create:brass_sheet", "create:sturdy_sheet")

    event.replaceInput({}, "ae2:sky_stone_block", "#cae:skystone")

    //event.recipes.create.deploying('ars_nouveau:magebloom_crop',['#forge:seeds','kubejs:runic_tablet'])
    multicut(radiant_cutting, "kubejs:radiant_machine", true)
    let containercolors = [
        'black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'light_gray', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'
    ]
    containercolors.forEach(i => {
        event.shapeless(Item.of(`moderntrainparts:${i}_container`, 3), [`minecraft:${i}_dye`, '2x create:item_vault'])
        event.remove({ output: `moderntrainparts:${i}_container` })
    });
    machine_smithing(integrational_smithing, 'kubejs:integrational_machine', true)
    const integrational_cutting = [
        Item.of('integrateddynamics:variable_transformer_output', 4),
        Item.of('integrateddynamics:variable_transformer_input', 4),
        Item.of('integrateddynamics:part_static_light_panel', 4),
        Item.of('integrateddynamics:logic_programmer'),
        Item.of('integrateddynamics:portable_logic_programmer'),
        Item.of('integrateddynamics:cable', 4)
    ]

    multicut(integrational_cutting, "kubejs:integrational_machine", true)
    event.remove({ id: "create_sa:quartz_gem_crushing" })
    event.remove({ id: "create_sa:magma_cream_recipe" })
    event.remove({ id: "create_sa:netherrack_recipe" })
    event.remove({ id: "create_sa:incomplete_web_recipe" })
    event.remove({ id: "create_sa:incomplete_book_recipe" })
    event.replaceInput({ id: 'create:mechanical_crafting/wand_of_symmetry' }, 'minecraft:ender_pearl', "create:refined_radiance")
    event.replaceInput({}, "create_sa:hydraulic_engine", "kubejs:sealed_mechanism")
    event.replaceInput({}, "create_sa:steam_engine", "create:precision_mechanism")
    event.replaceInput({}, "create_sa:heat_engine", "#create:kinetic_mechanisms")
    event.replaceInput({ id: 'create:mechanical_crafting/wand_of_symmetry' }, 'create:precision_mechanism', "kubejs:radiant_mechanism")

    event.remove({ id: 'integrateddynamics:crafting/coal_generator' })
    event.replaceInput({ id: "ae2:network/cells/item_storage_components_cell_1k_part" }, AE2("logic_processor"), "kubejs:time_mechanism")
    event.replaceInput({ id: "ae2:network/cells/item_storage_components_cell_4k_part" }, AE2("calculation_processor"), "kubejs:time_mechanism")

    event.remove({ id: "ae2:network/parts/terminals_pattern_encoding" })
    event.shapeless("ae2:pattern_encoding_terminal", ["ae2:crafting_terminal", "4x pneumaticcraft:printed_circuit_board"])
    const timesmithing = [
        ['thermal:rf_coil', 'thermal:dynamo_disenchantment'],
        ['ae2:chest', 'ae2:drive'],
        ['pneumaticcraft:printed_circuit_board', 'ae2:pattern_provider'],
        ['ae2:engineering_processor', 'ae2:molecular_assembler'],
        ['ae2:calculation_processor', 'ae2:advanced_card'],
        ['minecraft:piston', 'ae2:storage_bus'],
        ['create:portable_storage_interface', 'ae2:io_port'],
        ['ae2:logic_processor', 'ae2:crafting_unit'],
        ['create:brass_funnel', 'ae2:interface'],
        ['minecraft:smithing_table', 'ae2:cell_workbench'],
        ['ae2:wireless_receiver', 'ae2:wireless_access_point'],
        ["waystones:warp_stone", "waystones:waystone"],
        ["waystones:warp_stone", "waystones:mossy_waystone"],
        ["waystones:warp_stone", "waystones:sandy_waystone"]
    ]
    event.remove({ id: "waystones:warp_stone" })

    const timecutting = [
        Item.of(AE2('formation_core'), 4),
        Item.of(AE2("wireless_booster")),
        Item.of(AE2("cell_workbench")),
        Item.of(AE2("basic_card"), 6),
        Item.of(AE2('annihilation_core'), 4),

        "ae2:controller",

        Item.of(AE2("inscriber"))
    ]
    /*event.remove({output:'computercraft:wireless_modem_normal'})
    event.remove({output:'computercraft:wireless_modem_advanced'})*/

    multicut(timecutting, 'kubejs:time_machine', true)

    event.replaceInput({ id: 'ae2:network/cables/covered_fluix' }, '#minecraft:occludes_vibration_signals', 'minecraft:string')
    event.recipes.create.deploying('2x ae2:engineering_processor', ['ae2:printed_engineering_processor', 'pneumaticcraft:printed_circuit_board'])
    event.recipes.create.deploying('2x ae2:calculation_processor', ['ae2:printed_calculation_processor', 'pneumaticcraft:printed_circuit_board'])
    event.recipes.create.deploying('2x ae2:logic_processor', ['ae2:printed_logic_processor', 'pneumaticcraft:printed_circuit_board'])
    event.shapeless('ae2:fluix_covered_cable', ['#ae2:covered_cable', '#ae2:can_remove_color'])

    event.shapeless('ae2:semi_dark_monitor', 'ae2:dark_monitor')
    machine_smithing(timesmithing, 'kubejs:time_machine', true)


    const supercriticalcutting = [
        Item.of('entangled:block', 2),
        Item.of('multiblocked:entity')
    ]
    multicut(supercriticalcutting, 'kubejs:supercritical_machine', true)
    const supercriticalmachining = [
        ['minecraft:nether_star', 'pneumaticcraft:aerial_interface']
    ]
    event.recipes.createMixing('2x kubejs:supercritical_mechanism', ['2x pneumaticcraft:printed_circuit_board', 'forbidden_arcanus:eternal_stella']).superheated()

    machine_smithing(supercriticalmachining, 'kubejs:supercritical_machine', true)

    event.remove({ id: "pneumaticcraft:compressed_iron_block_from_ingot" })
    event.shapeless('pneumaticcraft:compressed_iron_block', "9x pneumaticcraft:ingot_iron_compressed")
    event.remove({ id: "ae2:network/blocks/quantum_ring" })

    //this is where the fun begins
    //thermal augment
    //also thanks for simibubi code here
    event.replaceInput({ id: TE('augments/rf_coil_storage_augment') }, F('#ingots/silver'), MC('iron_ingot'))
    event.replaceInput({ id: TE('augments/rf_coil_xfer_augment') }, F('#ingots/silver'), MC('iron_ingot'))
    event.replaceInput({ id: TE('augments/rf_coil_augment') }, F('#ingots/silver'), MC('iron_ingot'))
    event.replaceInput({ id: "thermal:augments/item_filter_augment" }, "thermal:signalum_ingot", "create:filter")
    event.replaceInput({ id: "thermal:augments/fluid_filter_augment" }, "thermal:signalum_ingot", "create:filter")
    event.replaceInput({}, "pneumaticcraft:ingot_iron_compressed", "create:sturdy_sheet")
    event.shapeless('thermal:fluid_filter_augment', 'thermal:item_filter_augment')
    event.remove({ id: "ae2:smelting/silicon_from_certus_quartz_dust" })
    event.replaceInput({ id: "createaddition:mixing/bioethanol" }, "create:cinder_flour", "minecraft:sugar")
    event.replaceInput({}, '#forge:plates/iron', CR('iron_sheet'))
    event.replaceInput({ id: "thermal:machine_frame" }, "minecraft:iron_ingot", "thermal:invar_ingot")
    event.replaceInput({}, '#forge:plates/gold', CR('golden_sheet'))
    event.replaceInput({}, '#forge:dusts/gold', TE('gold_dust'))
    event.remove({ output: 'thermal:bronze_block' })
    event.remove({ output: 'thermal:bronze_ingot' })
    event.remove({ output: 'thermal:bronze_nugget' })
    event.remove({ output: 'thermal:bronze_dust' })
    event.remove({ output: 'thermal:bronze_gear' })
    event.remove({ output: 'thermal:bronze_plate' })
    event.remove({ output: 'thermal:bronze_coin' })

    event.replaceInput({}, '#forge:ingots/bronze', "minecraft:copper_ingot")
    event.replaceInput({}, '#forge:nuggets/bronze', "minecraft:copper_nuggets")
    event.replaceInput({}, "thermal:bronze_gear", "thermal:copper_gear")
    event.replaceInput({}, '#forge:dusts/iron', TE('iron_dust'))
    event.replaceInput({}, '#forge:dusts/copper', TE('copper_dust'))
    event.replaceInput({}, '#forge:plates/copper', CR('copper_sheet'))
    event.replaceOutput({}, '#forge:nuggets/silver', TE('silver_nugget'))
    event.replaceOutput({}, '#forge:ingots/silver', TE('silver_ingot'))
    event.replaceOutput({}, '#forge:storage_blocks/silver', TE('silver_block'))
    event.recipes.createSplashing(Item.of(MC('clay_ball'), 1).withChance(0.25), "#forge:sand")
    event.remove({ id: "create:splashing/sand" })
    event.recipes.createMixing('3x ars_nouveau:end_fiber', ['3x ars_nouveau:blaze_fiber', Fluid.of("integrateddynamics:liquid_chorus", 200)])
    //event.recipes.createMixing(Item.of('ars_nouveau:magebloom_fiber',3),[Item.of('ars_nouveau:magebloom_fiber',3), Fluid.of("tconstruct:blazing_blood",200)])
    let woodcutting = (mod, log, planks, slab) => {
        event.recipes.createCutting([mod + ":stripped_" + log], mod + ":" + log).processingTime(50)
        event.recipes.createCutting([Item.of(mod + ":" + planks, 6)], mod + ":stripped_" + log).processingTime(50)
        event.recipes.createCutting([Item.of(mod + ":" + slab, 2)], mod + ":" + planks).processingTime(50)
    }
    let TCON = 'tconstruct'
    event.custom({
        "type": "tconstruct:entity_melting",
        "entity": {
            "type": "minecraft:bee"
        },
        "result": {
            "fluid": "create:honey",
            "amount": 25
        },
        "damage": 2
    }).id(TCON + ':smeltery/entity_melting/bee')
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": "minecraft:honey_block"
        },
        "result": {
            "fluid": "create:honey",
            "amount": 1000
        },
        "temperature": 1,
        "time": 94
    }).id(TCON + ':smeltery/melting/slime/honey_block')
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
            "item": "minecraft:honey_bottle"
        },
        "result": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "fluid": "create:honey",
                "amount": 250
            }
        ],
        "energy": 400
    }).id('thermal:machines/centrifuge/centrifuge_honey_bottle')
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
            "item": "minecraft:honeycomb"
        },
        "result": [
            {
                "fluid": "create:honey",
                "amount": 100
            }
        ]
    }).id('thermal:machines/centrifuge/centrifuge_honeycomb')
    event.custom({
        "type": "thermal:crucible",
        "ingredient": {
            "item": "minecraft:honey_block"
        },
        "result": [
            {
                "fluid": "create:honey",
                "amount": 1000
            }
        ],
        "energy": 2000
    }).id('thermal:machines/crucible/crucible_honey_block_to_honey')

    woodcutting("forbidden_arcanus", "cherrywood_log", "cherrywood_planks", "cherrywood_slab")

    let woodcuttingfuckyouid = (mod, log, planks, slab) => {
        event.recipes.createCutting([mod + ":" + log + "_stripped"], mod + ":" + log).processingTime(50)
        event.recipes.createCutting([Item.of(mod + ":" + planks, 6)], mod + ":" + log + "_stripped").processingTime(50)
        event.recipes.createCutting([Item.of(mod + ":" + slab, 2)], mod + ":" + planks).processingTime(50)
    }
    woodcuttingfuckyouid("integrateddynamics", "menril_log", "menril_planks", "menril_slab")
    woodcutting("forbidden_arcanus", "mysterywood_log", "mysterywood_planks", "mysterywood_slab")
    woodcutting("architects_palette", "twisted_log", "twisted_planks", "twisted_slab")
    woodcutting("tconstruct", "greenheart_log", "greenheart_planks", "greenheart_planks_slab")
    woodcutting("tconstruct", "skyroot_log", "skyroot_planks", "skyroot_planks_slab")
    woodcutting("tconstruct", "bloodshroom_log", "bloodshroom_planks", "bloodshroom_planks_slab")
    //ae2 begin:
    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
            "type": "pneumaticcraft:fluid",
            "fluid": 'kubejs:magebloom_juice',
            "amount": 400
        },
        "input2": {
            "type": "pneumaticcraft:fluid",
            "fluid": 'kubejs:sourceberry_juice',
            "amount": 400
        },
        "fluid_output": {
            "fluid": 'kubejs:magebloom_sourceberry_smoothie',
            "amount": 800
        },
        "pressure": 3.0,
        "time": 60
    })
    let orestones = [
        ['veridium', 'tconstruct:molten_copper'], ['asurine', 'tconstruct:molten_zinc'], ['crimsite', 'tconstruct:molten_iron'], ['ochrum', 'tconstruct:molten_gold']
    ]
    let h = 40
    let temperature = 800
    let time = 400
    orestones.forEach(i => {
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:' + i[0]
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:cut_' + i[0]
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:cut_' + i[0] + "_stairs"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:cut_' + i[0] + "_wall"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:polished_cut_' + i[0]
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:polished_cut_' + i[0] + "_stairs"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:polished_cut_' + i[0] + "_wall"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:cut_' + i[0] + "_bricks"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:cut_' + i[0] + "_brick_stairs"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:cut_' + i[0] + "_brick_wall"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });

        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:small_' + i[0] + "_bricks"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:small_' + i[0] + "_brick_stairs"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:small_' + i[0] + "_brick_wall"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:layered_' + i[0]
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'create:' + i[0] + "_pillar"
            },
            "result": {
                "fluid": i[1],
                "amount": h
            },
            "temperature": temperature,
            "time": time
        });

    });
    event.replaceOutput({}, "immersive_weathering:vitrified_sand", "minecraft:glass")
    event.replaceInput({}, TE('niter_dust'), AE2('sky_dust'))
    event.replaceInput({}, TE('apatite_dust'), '#minecraft:flowers')
    function bookgate(item, ingredients) {
        event.remove({ id: `ars_nouveau:${item}_spell_book` })
        event.remove({ id: `ars_nouveau:${item}_spell_book_upgrade` })
        event.shapeless(`ars_nouveau:${item}_spell_book`, ingredients)
    }
    bookgate('novice', ['minecraft:book', 'kubejs:sourcegem_fragments'])
    bookgate('apprentice', ['ars_nouveau:novice_spell_book', 'tiab:time_in_a_bottle'])
    bookgate('archmage', ['ars_nouveau:apprentice_spell_book', 'forbidden_arcanus:eternal_stella', 'ars_nouveau:wilden_tribute'])
    /*const Alloystuff = [
        ["tconstruct:molten_copper_fluid",90,"tconstruct:molten_amethyst_fluid",100,"tconstruct:molten_amethyst_bronze_fluid",190]
    ]
    
    function godlikeAlloying(fluid1,fluid1amt,fluid2,fluid2amt,outfluid,outamt){
        event.custom({
            "type": "pneumaticcraft:fluid_mixer",
            "input1": {
              "type": "pneumaticcraft:fluid",
              "fluid": fluid1,
              "amount": fluid1amt
            },
            "input2": {
              "type": "pneumaticcraft:fluid",
              "fluid": fluid2,
              "amount": fluid2amt
            },
            "fluid_output": {
              "fluid": outfluid,
              "amount": outamt
            },
            "pressure": 3.0,
            "time": 200
        })
        event.recipes.createMixing([Fluid.of(outfluid,outamt)],[Fluid.of(fluid1,fluid1amt),Fluid.of(fluid2,fluid2amt)])
    }
    Alloystuff.forEach(i => {
        godlikeAlloying(i[0],i[1],i[2],i[3],i[4],i[5])
    });
    */

    onEvent("morejs.villager.trades", event => {
        event.removeModdedTrades('pneumaticcraft:mechanic', 1);
        event.removeModdedTrades('pneumaticcraft:mechanic', 2);
        event.removeModdedTrades('pneumaticcraft:mechanic', 3);
        event.removeModdedTrades('pneumaticcraft:mechanic', 4);
        event.removeModdedTrades('pneumaticcraft:mechanic', 5);

    })
    event.forEachRecipe({ output: 'reliquary:alkahestry_tome' }, recipe => {
        recipe.id(recipe.getOrCreateId() + '_manual_only')
    })
    event.forEachRecipe({ input: 'reliquary:alkahestry_tome' }, recipe => {
        recipe.id(recipe.getOrCreateId() + '_manual_only')
    })
    event.forEachRecipe({ id: 'reliquary:alkahestry/charging/redstone' }, recipe => {
        recipe.id(recipe.getOrCreateId() + '_manual_only')
    })
    event.forEachRecipe({ id: 'reliquary:alkahestry/charging/glowstone' }, recipe => {
        recipe.id(recipe.getOrCreateId() + '_manual_only')
    })
    event.forEachRecipe({ id: 'reliquary:alkahestry/charging/glowstone_dust' }, recipe => {
        recipe.id(recipe.getOrCreateId() + '_manual_only')
    })
    event.forEachRecipe({ id: 'reliquary:alkahestry/charging/redstone_block' }, recipe => {
        recipe.id(recipe.getOrCreateId() + '_manual_only')
    })
    event.forEachRecipe({ id: 'reliquary:alkahestry/drain/redstone' }, recipe => {
        recipe.id(recipe.getOrCreateId() + '_manual_only')
    })
    event.remove({ id: "reliquary:alkahestry/crafting/netherrack" })
    let alkahestryshit = [
        'sand',
        'sandstone',
        'iron_ingot',
        'lapis_lazuli',
        'diamond',
        'clay',
        'end_stone',
        'dirt',
        'flint',
        'gravel',
        'soul_sand',
        'obsidian',
        'nether_star',
        'charcoal',
        'gold_ingot',
        'silver_ingot',
        'gunpowder',
        'tin_ingot',
        'emerald',
        'steel_ingot',
        'copper_ingot'

    ]
    alkahestryshit.forEach(i => {
        event.forEachRecipe({ id: `reliquary:alkahestry/crafting/${i}` }, recipe => {
            recipe.id(recipe.getOrCreateId() + '_manual_only')
        })
    });
    event.remove({ output: 'create:tree_fertilizer' })
    function machineration(Mechanism, Casing) {
        event.shaped("kubejs:" + Mechanism + "_machine", [
            'SSS',
            'SCS',
            'SSS'
        ], {
            C: Casing,
            S: "kubejs:" + Mechanism + "_mechanism"
        }).id("wrenchation" + Mechanism)
    }
    machineration('radiant', 'thermal:machine_frame')
    event.remove({ mod: 'integrateddynamics', output: "minecraft:netherrack" })
    event.remove({ output: 'functionalstorage:ender_drawer' })
    event.remove({ output: /^functionalstorage\:fluid_/ })
    machineration('integrational', 'cae:gold_casing')
    machineration('plastic', 'cae:zinc_casing')
    machineration('time', 'cae:enderium_casing')
    machineration('supercritical', 'cae:supercritical_casing')

    event.recipes.create.itemApplication('cae:enderium_casing', ['#forge:stripped_logs', TE('enderium_ingot')])


    event.recipes.create.deploying('cae:enderium_casing', ['#forge:stripped_logs', TE('enderium_ingot')])
    event.recipes.create.itemApplication('cae:enderium_casing', ['#forge:stripped_wood', TE('enderium_ingot')])
    event.recipes.create.deploying('cae:enderium_casing', ['#forge:stripped_wood', TE('enderium_ingot')])
    //event.recipes.thermal.rockGen('minecraft:andesite',[Fluid.of('create:honey'),Fluid.of('minecraft:water')])
    event.recipes.create.itemApplication('cae:zinc_casing', ['#forge:stripped_logs', '#forge:plates/zinc'])
    event.recipes.create.deploying('cae:zinc_casing', ['#forge:stripped_logs', '#forge:plates/zinc'])
    event.recipes.create.itemApplication('cae:zinc_casing', ['#forge:stripped_wood', '#forge:plates/zinc'])
    event.recipes.create.deploying('cae:zinc_casing', ['#forge:stripped_wood', '#forge:plates/zinc'])

    function casineration(o, I, i) {
        event.recipes.create.itemApplication(o, [i, I])
        event.recipes.create.deploying(o, [i, I])
    }

    casineration("create:refined_radiance_casing", 'create:refined_radiance', '#forge:stripped_wood')
    casineration("create:refined_radiance_casing", 'create:refined_radiance', '#forge:stripped_logs')
    casineration("create:shadow_steel_casing", 'create:shadow_steel', '#forge:stripped_wood')
    casineration("create:shadow_steel_casing", 'create:shadow_steel', '#forge:stripped_logs')
    casineration("cae:supercritical_casing", "create:refined_radiance_casing", "create:shadow_steel_casing")

    event.recipes.create.itemApplication('cae:gold_casing', ['#forge:stripped_logs', '#forge:plates/gold'])
    event.recipes.create.deploying('cae:gold_casing', ['#forge:stripped_logs', '#forge:plates/gold'])
    event.recipes.create.itemApplication('cae:gold_casing', ['#forge:stripped_wood', '#forge:plates/gold'])
    event.recipes.create.deploying('cae:gold_casing', ['#forge:stripped_wood', '#forge:plates/gold'])
    //machineration('radiant','thermal:machine_frame')
    event.remove({ output: 'createaddition:zinc_sheet' })

    event.remove({ id: "create:splashing/crushed_raw_iron" })
});
onEvent('tags.blocks', thing => {
    dumbshitarray.forEach(entry => {
        let dumbmachines = ["kubejs:andesite_machine", "kubejs:sealed_machine", "kubejs:brass_machine", "kubejs:sturdy_machine", "kubejs:integrational_machine", "kubejs:radiant_machine", "kubejs:plastic_machine", "kubejs:time_machine", "kubejs:supercritical_machine"]
        if (entry.startsWith("x ", 1)) { entry = entry.slice(3) }
        if (entry.startsWith("x ", 2)) { entry = entry.slice(4) }
        if (Item.of(entry).isBlock()) {
            thing.add("create:wrench_pickup", entry)
        }
        dumbmachines.forEach(i => {
            thing.add("create:wrench_pickup", i)
        });
    })

})
onEvent('tags.fluids', event => {
    event.add('create:bottomless/allow', 'pneumaticcraft:oil')
})
