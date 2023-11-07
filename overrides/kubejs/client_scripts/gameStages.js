const $VanillaTypes = java('mezz.jei.api.constants.VanillaTypes')

let stageOneItems = [
    'kubejs:god_actuation_fluid_bucket',
    'kubejs:source_essence_bucket',
    'kubejs:soul_essence_bucket',
    'kubejs:nature_essence_bucket',
    'kubejs:dry_essence_bucket',
    'kubejs:ice_essence_bucket'
]

let stageTwoItems = [
    'cae:source_keystone',
    'cae:soul_keystone',
    'cae:nature_keystone',
    'cae:dry_keystone',
    'cae:ice_keystone'
]

let stageThreeItems = [
    'avaritia:zizz',
    'avaritia:zyzzium_ingot'
]

onEvent('player.data_from_server.jei_show_stage_one', event => {
    stageOneItems.forEach(itemToShow => {
        global.jeiRuntime.getIngredientManager().addIngredientsAtRuntime($VanillaTypes.ITEM_STACK, [Item.of(itemToShow).itemStack])
    });
})

onEvent('player.data_from_server.jei_show_stage_two', event => {
    stageTwoItems.forEach(itemToShow => {
        global.jeiRuntime.getIngredientManager().addIngredientsAtRuntime($VanillaTypes.ITEM_STACK, [Item.of(itemToShow).itemStack])
    });
})

onEvent('player.data_from_server.jei_show_stage_three', event => {
    stageThreeItems.forEach(itemToShow => {
        global.jeiRuntime.getIngredientManager().addIngredientsAtRuntime($VanillaTypes.ITEM_STACK, [Item.of(itemToShow).itemStack])
    });
})