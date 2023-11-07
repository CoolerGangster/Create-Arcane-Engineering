onEvent('recipes', event => {
  event.recipes.createMilling(Item.of('3x kubejs:quartz_seed'), 'minecraft:quartz')
  event.recipes.createMilling(Item.of('3x kubejs:redstone_seed'), 'create:rose_quartz')
  event.recipes.createMilling(Item.of('3x ae2:certus_crystal_seed'), 'ae2:certus_quartz_crystal')
  event.recipes.create.milling('4x kubejs:rune_dust', 'forbidden_arcanus:rune')
  event.recipes.create.milling('kubejs:powdered_flint', "minecraft:flint")
  event.recipes.create.milling('minecraft:gravel', "minecraft:mossy_cobblestone")
  event.recipes.create.cutting('ae2:certus_quartz_dust', "ae2:certus_quartz_crystal")
  event.recipes.create.milling(Item.of('minecraft:sand').withChance(0.33), "minecraft:gravel")
  event.recipes.create.milling(['create:powdered_obsidian',Item.of('create:powdered_obsidian',1).withChance(0.50)],'minecraft:obsidian').processingTime(200)
  event.recipes.create.milling('3x thermal:blizz_powder', 'thermal:blizz_rod')
  event.recipes.create.milling('3x thermal:basalz_powder', 'thermal:basalz_rod')
  event.recipes.create.milling('3x thermal:blitz_powder', 'thermal:blitz_rod')
  
    let dumbshit = [ "waystones:waystone",
        "waystones:mossy_waystone",
     "waystones:sandy_waystone" ]
     dumbshit.forEach(i => {
      event.recipes.create.crushing(["5x kubejs:warp_fragments",Item.of("kubejs:warp_fragments")],i)
     })
})
