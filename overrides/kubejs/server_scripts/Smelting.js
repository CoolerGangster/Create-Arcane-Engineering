onEvent('recipes', event => {
  event.smelting('minecraft:quartz', 'kubejs:quartz_cluster')
  event.smelting('ae2:certus_quartz_crystal', 'kubejs:certus_quartz_seed_cluster')
  event.smelting('minecraft:obsidian', 'create:powdered_obsidian')
  event.smelting('thermal:invar_ingot', 'thermal:invar_dust')
  event.smelting(/*[Item.of("minecraft:redstone",1).withChance(0.9),Item.of("minecraft:redstone",3).withChance(0.3)]*/ "minecraft:redstone","kubejs:redstone_cluster")
  event.smoking('pneumaticcraft:printed_circuit_board', 'kubejs:cleaned_pcb')
})
  