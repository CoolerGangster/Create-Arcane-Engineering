onEvent('recipes', event => {
  event.shapeless('kubejs:sealed_mechanism', ['2x kubejs:enriched_rubber', '#create:kinetic_mechanisms'])
  event.shapeless('kubejs:sealed_mechanism', ['4x thermal:cured_rubber', '#create:kinetic_mechanisms'])
  event.shapeless('3x quark:violet_corundum_cluster', ['3x #forge:corundum_clusters', 'kubejs:rune_dust'])
  event.shapeless('minecraft:crafting_table', ['#forge:workbenches'])
  event.shapeless('minecraft:chest', ['#forge:chests/wooden'])
  event.shapeless("createoreexcavation:drill", "pneumaticcraft:drill_bit_iron")
  event.shapeless("ars_nouveau:spell_parchment", "4x ars_nouveau:magebloom_fiber")

  event.shapeless("create:andesite_alloy", ["minecraft:diorite", "minecraft:andesite"]).id('cae:coolrecipe_manual_only')
  event.recipes.create.mixing("4x create:andesite_alloy", ["integrateddynamics:crystalized_menril_chunk", "minecraft:andesite"])
  event.shapeless("2x create:andesite_alloy", ["integrateddynamics:crystalized_menril_chunk", "minecraft:andesite"]).id('cae:supa_coolrecipe_manual_only')
  event.recipes.create.mixing("2x create:andesite_alloy", ["minecraft:diorite", "minecraft:andesite"])
  //event.recipes.create.mixing("2x minecraft:andesite", ["minecraft:petrified_oak_slab", "minecraft:moss_block"])
  //event.recipes.create.compacting("3x minecraft:moss_block", ["minecraft:moss_block", Fluid.of('minecraft:water',100)])
  event.remove({output: "create:andesite_alloy"}) 
  event.replaceInput({id:"createaddition:mixing/netherrack"}, "#forge:cobblestone", 'minecraft:ancient_debris')
  event.remove({id:"thermal:smelting/slag_from_smelting"})
  event.smelting(Item.of("minecraft:andesite").withChance(0.2),"minecraft:gravel")
  event.shapeless("avaritia:zizz",["7x kubejs:finalpcb","2x avaritia:zyzzium_ingot"])
  event.shapeless("ars_nouveau:bucket_of_source","kubejs:source_bucket")
  event.shapeless("kubejs:makeshift_kinetic_mechanism", ["2x #forge:stripped_logs",Item.of("kubejs:saw").ignoreNBT(),"4x create:andesite_alloy"]).damageIngredient(Item.of('kubejs:saw'))
  const drills = [
    "netherite",
    "diamond"
  ]
  function drill(In) {event.shapeless("createoreexcavation:" + In + "_drill", "pneumaticcraft:drill_bit_" + In)}

  drills.forEach(element => {
      drill(element)
      })
  
})