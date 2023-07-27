// priority: 0

onEvent("lootjs", (event) => {
    event
        .addBlockLootModifier(/waystones\:.*waystone/)
        .removeLoot(/waystones\:.*waystone/)
})