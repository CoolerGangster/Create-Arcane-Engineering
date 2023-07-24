let MysteriousItemConversionCategory = java('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
let ConversionRecipe = java('com.simibubi.create.compat.jei.ConversionRecipe')

MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('minecraft:soulsand', 'forbidden_arcanus:soulless_sand'))
onEvent('recipes',event => {
    
})