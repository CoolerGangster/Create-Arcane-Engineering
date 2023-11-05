// priority: 300
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let LV = (id, x) => MOD("libvulpes", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
function EG(id, x) {
  return MOD("endergetic", id, x)
}
let FD = (id, x) => MOD("farmersdelight", id, x)
let BOP = (id, x) => MOD("biomesoplenty", id, x)
let PR_C = (id, x) => MOD("projectred-core", id, x)
let PR_T = (id, x) => MOD("projectred-transmission", id, x)
let PR_I = (id, x) => MOD("projectred-illumination", id, x)
let RQ = (id, x) => MOD("xreliquary", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) => MOD("forge", id, x)
let AC = (id, x) => MOD("aquaculture", id, x)
let PP = (id, x) => MOD("prettypipes", id, x)
let OC = (id, x) => MOD("occultism", id, x)

onEvent('tags.items', event => {
  event.add('forge:menril_logs', 'integrateddynamics:menril_log_filled')
  event.add('forge:menril_logs', 'integrateddynamics:menril_log')
  event.add('forge:saws', 'kubejs:saw')
  event.add('forge:screwdrivers', 'kubejs:screwdriver')
});

onEvent('recipes', event => {
  let t = 'kubejs:incomplete_kinetic_mechanism'
  event.recipes.createSequencedAssembly([
    'kubejs:kinetic_mechanism',
  ], 'integrateddynamics:menril_slab', [
    event.recipes.createDeploying(t, [t, 'create:andesite_alloy']),
    event.recipes.createDeploying(t, [t, 'create:andesite_alloy']),
    event.recipes.createDeploying(t, [t, '#forge:saws'])
  ]).transitionalItem('kubejs:incomplete_kinetic_mechanism').loops(1)
  
  t = 'minecraft:leather'
  event.recipes.createSequencedAssembly([
    'minecraft:saddle',
  ], 'minecraft:leather', [
    event.recipes.createDeploying(t, [t, 'minecraft:iron_ingot']),
    event.recipes.createDeploying(t, [t, 'minecraft:iron_ingot'])
  ]).transitionalItem(t).loops(1)

  t = 'minecraft:tall_grass'
  event.recipes.createSequencedAssembly([
    '2x minecraft:tall_grass',
  ], 'minecraft:tall_grass', [
    event.recipes.createFilling(t, [t, Fluid.of('minecraft:water')])
  ]).transitionalItem(t).loops(200)

t = KJ('quartz_seed')
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:quartz_cluster').withChance(30), Item.of('kubejs:quartz_seed').withChance(70),
	], KJ('quartz_seed'), [
		event.recipes.createFilling(t, [t, Fluid.of(KJ("sky_solution"), 50)]),
    event.recipes.createDeploying(t, [t, 'minecraft:sand'])
	]).transitionalItem(t)
		.loops(1)
		.id('minecraft:quartz')

  t = 'ae2:certus_crystal_seed'
  event.recipes.createSequencedAssembly([
  	Item.of('kubejs:certus_quartz_seed_cluster').withChance(30), Item.of('ae2:certus_crystal_seed').withChance(70),
  ], 'ae2:certus_crystal_seed', [
  	event.recipes.createFilling(t, [t, Fluid.of(KJ("sky_solution"), 50)]),
    event.recipes.createDeploying(t, [t, 'minecraft:sand'])
  ]).transitionalItem(t)
  	.loops(1)
  	.id('ae2:certus_quartz_crystal')

  t = KJ('redstone_seed')
  event.recipes.createSequencedAssembly([
  	Item.of('kubejs:redstone_cluster').withChance(45), Item.of(t).withChance(70)
  ], t, [
  	event.recipes.createFilling(t, [t, Fluid.of(KJ("sky_solution"), 150)]),
    event.recipes.createDeploying(t, [t, 'minecraft:sand'])
  ]).transitionalItem(t)
  	.loops(1)
  	.id('cae:redstonequartz')


  t = CR('incomplete_precision_mechanism')
  event.recipes.createSequencedAssembly([
    'create:precision_mechanism',
  ], KJ('kinetic_mechanism'), [
    event.recipes.createDeploying(t, [t, 'create:electron_tube']),
    event.recipes.createDeploying(t, [t, 'create:electron_tube']),
    event.recipes.createDeploying(t, [t, '#forge:screwdrivers'])
  ]).transitionalItem(t).loops(1)

  event.recipes.createSequencedAssembly([
    'create:precision_mechanism',
  ], KJ('kinetic_mechanism'), [
    event.recipes.createDeploying(t, [t, 'integrateddynamics:variable']),
    event.recipes.createDeploying(t, [t, 'create:electron_tube']),
    event.recipes.createDeploying(t, [t, '#forge:screwdrivers'])
  ]).transitionalItem(t).loops(1)
  t = KJ("incomplete_integrational_mechanism")
  event.recipes.createSequencedAssembly([
    'kubejs:integrational_mechanism',
  ], CR('precision_mechanism'), [
    event.recipes.createDeploying(t, [t, 'ars_nouveau:source_gem']),
    event.recipes.createDeploying(t, [t, 'kubejs:sourcegem_fragments']),
    event.recipes.createPressing(t, [t])
  ]).transitionalItem(t).loops(1)

  t = KJ("incomplete_plastic_mechanism")
  event.recipes.createSequencedAssembly([
    'kubejs:plastic_mechanism',
  ], KJ('radiant_mechanism'), [
    event.recipes.createDeploying(t, [t, 'pneumaticcraft:plastic']),
    event.recipes.createFilling(t, [t, Fluid.of('pneumaticcraft:plastic',250)]),
    event.recipes.createPressing(t, [t])
  ]).transitionalItem(t).loops(1)

  t = KJ("incomplete_radiant_mechanism")
  event.recipes.createSequencedAssembly([
    'kubejs:radiant_mechanism',
  ], 'create:precision_mechanism', [
    event.recipes.createDeploying(t, [t, 'kubejs:radiant_coil']),
    event.recipes.createDeploying(t, [t, 'kubejs:radiant_coil']),
    event.recipes.createDeploying(t, [t, '#forge:resonators'])
  ]).transitionalItem(t).loops(1)


t = "kubejs:incomplete_engineering_circuit"
event.recipes.createSequencedAssembly([
  'ae2:printed_engineering_processor',
], 'kubejs:radiant_mechanism', [
  event.recipes.createFilling(t, [t, Fluid.of("tconstruct:molten_diamond", 100)]),
  event.recipes.createPressing(t,[t])
]).transitionalItem(t).loops(1)

t = "kubejs:incomplete_calculation_circuit"
event.recipes.createSequencedAssembly([
  'ae2:printed_logic_processor',
], 'create:precision_mechanism', [
  event.recipes.createFilling(t, [t, Fluid.of("tconstruct:molten_gold", 90)]),
  event.recipes.createPressing(t,[t])
]).transitionalItem(t).loops(1)

t = "kubejs:incomplete_logic_circuit"
event.recipes.createSequencedAssembly([
  'ae2:printed_calculation_processor',
], 'kubejs:kinetic_mechanism', [
  event.recipes.createDeploying(t, [t, "ae2:certus_quartz_crystal"]),
  event.recipes.createPressing(t,[t])
]).transitionalItem(t).loops(1)


t = KJ("incomplete_tested_pcb")
event.recipes.createSequencedAssembly([
  'kubejs:untested_pcb',
], 'kubejs:legend_pcb', [
  event.recipes.createFilling(t, [t, Fluid.of("tconstruct:molten_nickel", 90)]),
  event.recipes.createDeploying(t, [t, 'thermal:gold_dust'])
]).transitionalItem(t).loops(1)




event.recipes.create.mixing('architects_palette:ancient_plating_slab',["#forge:sand","forbidden_arcanus:soul","minecraft:red_dye","minecraft:obsidian","minecraft:stone","kubejs:runic_tablet","create:cinder_flour"])
t = 'minecraft:stone'
event.recipes.createSequencedAssembly([
  Item.of('minecraft:netherrack', 12),
  Item.of('minecraft:netherrack', 8).withChance(0.666),
  Item.of('minecraft:netherrack', 6).withChance(0.33),
  Item.of('minecraft:netherrack', 4).withChance(0.215),
  Item.of('minecraft:netherrack', 2).withChance(0.075),
], 'architects_palette:ancient_plating_slab',[
  event.recipes.createDeploying(t, [t, 'minecraft:emerald']),
  event.recipes.createDeploying(t, [t, 'minecraft:slime_ball']),
  event.recipes.createDeploying(t, [t, 'tconstruct:blood_slime_ball']),
  //event.recipes.createFilling(t, [t, Fluid.of('tconstruct:earth_slime_fluid', 250)]),
  //event.recipes.createFilling(t, [t, Fluid.of('tconstruct:molten_emerald_fluid', 100)]),
  //event.recipes.createFilling(t, [t, Fluid.of('tconstruct:blood_fluid', 100)]),
  event.recipes.createDeploying(t, [t, 'minecraft:pink_terracotta']),
  event.recipes.createDeploying(t, [t, 'minecraft:nether_bricks']),
  event.recipes.createDeploying(t, [t, 'minecraft:red_sand']),
  event.recipes.createDeploying(t, [t, 'quark:red_corundum_cluster']),
  event.recipes.createDeploying(t, [t, 'minecraft:soul_sand'])
]).transitionalItem(t).loops(1)

});

