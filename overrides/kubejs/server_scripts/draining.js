onEvent('recipes', event => {
    event.recipes.createEmptying(['kubejs:chrom',Fluid.of('kubejs:chromatic_waste', 250)], 'minecraft:glowstone_dust')
    event.recipes.createEmptying(['kubejs:empty_vial',Fluid.of('kubejs:liquid_anthraquinone', 56)], 'kubejs:anthraquinone')
    event.recipes.createEmptying(['kubejs:dirty_bowl',Fluid.of('kubejs:impure_source', 50)], 'kubejs:magebloom_sourceberry_smoothie_bowl')
})