onEvent('recipes', event => {
    event.recipes.create.deploying('glassential:glass_ghostly', ['#forge:glass/colorless','quark:soul_bead'])
    
    event.recipes.create.deploying('ars_nouveau:magebloom_fiber', ['kubejs:mage_leaf', '#forge:tools/knives'])
    event.recipes.create.deploying('kubejs:runic_tablet', ['minecraft:smooth_stone_slab', 'forbidden_arcanus:rune'])
    event.recipes.create.deploying('kubejs:sturdy_mechanism', ['create:precision_mechanism', 'create:sturdy_sheet'])
    event.recipes.create.sandpaperPolishing([Item.of('kubejs:tested_pcb', 1).withChance(0.7),Item.of('pneumaticcraft:failed_pcb', 1).withChance(0.3)], 'kubejs:mystery_pcb')
})