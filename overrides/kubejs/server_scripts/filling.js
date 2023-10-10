onEvent('recipes', event => {
  event.recipes.createFilling('kubejs:enriched_rubber', [
  'thermal:cured_rubber',
  Fluid.of('integrateddynamics:menril_resin', 100)
  ])
  event.recipes.createFilling(CR('electron_tube'), [
    CR('rose_quartz'),
    Fluid.of('tconstruct:molten_iron', 45)
  ])
  event.recipes.createFilling(CR('rose_quartz'), [
    'minecraft:redstone',
    Fluid.of('thermal:redstone', 25)
  ])
  event.recipes.create.filling('quark:soul_bead', ['forbidden_arcanus:soul', Fluid.of('kubejs:liquid_resent', 200)])
  event.recipes.create.filling('kubejs:anthracene', ['kubejs:empty_vial', Fluid.of('kubejs:superheated_anthracene', 144)])
  event.recipes.create.filling('kubejs:magebloom_sourceberry_smoothie_bowl', ['minecraft:bowl', Fluid.of('kubejs:magebloom_sourceberry_smoothie', 100)])
  event.recipes.create.filling('pneumaticcraft:plastic',['create:sturdy_sheet', Fluid.of("pneumaticcraft:plastic", 500)])
})