onEvent('tags.worldgen.biome', event => {
    event.add("forge:is_jungle", ['minecraft:jungle','terralith:amethyst_canyon', 'terralith:amethyst_rainforest','terralith:jungle_mountains','terralith:rocky_jungle','terralith:tropical_jungle'])
    event.add("forge:is_dry", ['terralith:ancient_sands', 'terralith:desert_canyon','terralith:desert_oasis','terralith:desert_spires','terralith:red_oasis','terralith:sandstone_valley'])
    event.add("forge:is_desert", ['terralith:ancient_sands', 'terralith:desert_canyon','terralith:desert_oasis','terralith:desert_spires','terralith:red_oasis','terralith:sandstone_valley'])
    event.add("forge:is_mountain", ['terralith:blooming_plateau','terralith:emerald_peaks','terralith:painted_mountains','terralith:rocky_mountains','terralith:scarlet_mountains','terralith:stony_spires','terralith:volcanic_crater','terralith:volcanic_peaks'])
    event.add("forge:is_overworld",['#terralith:all_terralith_biomes'])
})