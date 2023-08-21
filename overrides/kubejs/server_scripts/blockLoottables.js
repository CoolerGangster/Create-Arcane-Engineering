// priority: 0

onEvent("lootjs", (event) => {
    event
        .addBlockLootModifier(/waystones\:.*waystone/)
        .removeLoot(/waystones\:.*waystone/)
    event
        .addBlockLootModifier('cae:sky_stone')
        .addLoot('ae2:sky_stone_block')
})