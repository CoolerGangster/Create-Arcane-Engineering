onEvent('recipes', event => {
    event.recipes.thermal.centrifuge(['kubejs:separated_board', Fluid.of('kubejs:chromatic_waste', 50)],'kubejs:etched_board')
    event.recipes.thermal.smelter('kubejs:dryed_board','kubejs:masked_pcb')
    event.recipes.thermal.refinery([Fluid.of('thermal:refined_fuel',100),'thermal:sulfur_dust'],Fluid.of('thermal:light_oil',100))
    event.remove({id: 'thermal:machines/refinery/refinery_light_oil'})
    event.recipes.thermal.refinery([Fluid.of('thermal:refined_fuel',75),'thermal:tar'],Fluid.of('thermal:heavy_oil',100))
    event.remove({id: 'thermal:machines/refinery/refinery_heavy_oil'})
    let bedrock_cobblegen = (adjacent, output) => {
		event.custom({
			"type": "thermal:rock_gen",
			"adjacent": "water",
			"below": adjacent,
			"result": { "item": output }
		})
	}
    //this is abstracted from enigmatica6cobblegens
    event.remove({id:'thermal:compat/create/pulverizer_create_tuff'})
    event.remove({id:'thermal:compat/create/pulverizer_create_tuff_recycle'})
    event.remove({id:'create:crushing/tuff_recycling'})
    let custom_generators = [

        ["cobblestone", "byg:dacite_cobblestone", ["byg:dacite_cobblestone"]],
        ["cobblestone", "byg:ether_stone", ["byg:ether_stone"]],
        ["cobblestone", "byg:purpur_stone", ["byg:purpur_stone"]],
        ["cobblestone", "byg:red_rock", ["byg:red_rock"]],
        ["cobblestone", "byg:soapstone", ["byg:soapstone"]],
        ["cobblestone", "minecraft:tuff", ["byg:soapstone"]],
        ["cobblestone", "minecraft:blackstone", ["minecraft:blackstone"]],

        ["stone", "minecraft:andesite", ["minecraft:andesite"]],
        ["stone", "minecraft:diorite", ["minecraft:diorite"]],
        ["stone", "minecraft:granite", ["minecraft:granite"]],
        ["stone", "byg:black_sandstone", ["byg:black_sandstone"]],
        ["stone", "byg:blue_sandstone", ["byg:blue_sandstone"]],
        ["stone", "byg:dacite", ["byg:dacite"]],
        ["stone", "byg:purple_sandstone", ["byg:purple_sandstone"]],
        ["stone", "byg:pink_sandstone", ["byg:pink_sandstone"]],
        ["stone", "byg:scoria_stone", ["byg:scoria_stone"]],
        ["stone", "byg:white_sandstone", ["byg:white_sandstone"]],
        ["stone", "minecraft:red_sandstone", ["minecraft:red_sandstone"]],
        ["stone", "minecraft:sandstone", ["minecraft:sandstone"]],
    
        ["stone", "quark:limestone", ["quark:limestone"]],
        ["stone", "quark:permafrost", ["quark:permafrost"]],
        ["stone", "create:scoria", ["create:scoria"]],
        ["stone", "create:limestone", ["create:limestone"]]
    ]
    custom_generators.forEach(i => {
        bedrock_cobblegen(i[1],i[1])
    });
})