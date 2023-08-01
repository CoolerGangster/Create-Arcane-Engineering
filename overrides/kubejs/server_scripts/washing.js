onEvent('recipes', event => {
  event.recipes.createSplashing(['minecraft:petrified_oak_slab'],'minecraft:oak_slab')
  event.recipes.createSplashing(['kubejs:etched_board'],'pneumaticcraft:unassembled_pcb')
  event.recipes.create.splashing(['kubejs:cleaned_pcb'],'kubejs:tested_pcb')
  //event.recipes.create.splashing(Item.of('minecraft:gold_nugget', 1).withChance(0.02),'minecraft:soul_sand')
  event.recipes.create.splashing(['minecraft:bowl', Item.of('kubejs:mage_leaf',1).withChance(0.35)],'kubejs:dirty_bowl')
  event.recipes.create.splashing('kubejs:rejuvinated_menril_shrub',['kubejs:menril_shrub'])
  event.recipes.create.splashing('10x minecraft:iron_nugget', 'create:crushed_raw_iron')
})