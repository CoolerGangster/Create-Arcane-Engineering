
onEvent('recipes', event => {
    event.recipes.createMixing(Fluid.of("kubejs:sky_solution", 200), ['ae2:sky_dust', Fluid.of(MC('water'), 500)])
    event.recipes.createMixing(Item.of("minecraft:gunpowder", 4), ['kubejs:powdered_flint','kubejs:powdered_flint','kubejs:powdered_flint','kubejs:powdered_flint', Fluid.of("thermal:refined_fuel", 800)])
    event.recipes.createMixing(Fluid.of("kubejs:green_anthraquinone", 108), [Fluid.of("kubejs:liquid_anthraquinone", 72),Fluid.of("minecraft:water", 500), "minecraft:green_dye"]).heated()
    event.recipes.createMixing(Fluid.of("kubejs:magebloom_sourceberry_smoothie", 200), [Fluid.of('kubejs:magebloom_juice', 100),Fluid.of('kubejs:sourceberry_juice', 100)])
    event.recipes.createMixing(Fluid.of("kubejs:source", 3) , [Fluid.of(KJ('impure_source'), 12)]).heated()
    event.recipes.createMixing('integrateddynamics:menril_sapling',['8x integrateddynamics:menril_berries','kubejs:rejuvinated_menril_shrub'])
    event.recipes.createMixing(Fluid.of("kubejs:source", 500), ['ars_nouveau:spell_parchment',Fluid.of(KJ('impure_source'), 500 )])
    event.recipes.createMixing('ae2:charged_certus_quartz_crystal', ['minecraft:iron_bars','ae2:certus_quartz_crystal']).heated()
    event.recipes.createMixing(['2x kubejs:time_mechanism',"kubejs:empty_vial"], ['tiab:time_in_a_bottle','2x kubejs:radiant_mechanism']).superheated()
    event.recipes.createMixing(Fluid.of('pneumaticcraft:yeast_culture',200),['#forge:mushrooms',Fluid.of('minecraft:water',1000)]).heated()
    event.recipes.createMixing(Fluid.of('createaddition:bioethanol',50),['minecraft:sugar',Fluid.of('pneumaticcraft:yeast_culture',100)]).heated()
})  