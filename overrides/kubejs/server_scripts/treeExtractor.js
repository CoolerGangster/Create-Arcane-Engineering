let treeRegistry = [
    {
        type: 'tree',
        trees: [
            {
              sapling: 'integrateddynamics:menril_sapling',
              trunk: 'integrateddynamics:menril_log',
              leaf: 'integrateddynamics:menril_leaves',
              fruit: 'integrateddynamics:menril_berries',
              substrate: 'dirt',
              sap: 'integrateddynamics:menril_resin',
              rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'forbidden_arcanus:cherrywood_sapling',
                trunk: 'forbidden_arcanus:thin_cherrywood_log',
                leaf: 'forbidden_arcanus:cherrywood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                sapling: 'forbidden_arcanus:cherrywood_sapling',
                trunk: 'forbidden_arcanus:cherrywood_log',
                leaf: 'forbidden_arcanus:cherrywood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                sapling: 'forbidden_arcanus:mysterywood_sapling',
                trunk: 'forbidden_arcanus:mysterywood_log',
                leaf: 'forbidden_arcanus:mysterywood_leaves',
                substrate: 'dirt',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'biomesoplenty:palm_log',
                leaf: 'biomesoplenty:palm_leaves',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'biomesoplenty:palm_log',
                leaf: 'biomesoplenty:palm_leaves',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'biomesoplenty:dead_log',
                leaf: 'biomesoplenty:dead_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'ars_nouveau:red_archwood_log',
                leaf: 'ars_nouveau:red_archwood_leaves',
                sap: 'minecraft:lava',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:dark_oak_log',
                leaf: 'biomesoplenty:orange_autumn_leaves',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'ars_nouveau:green_archwood_log',
                leaf: 'ars_nouveau:green_archwood_leaves',
                sap: 'kubejs:flourishing_juice',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'ars_nouveau:purple_archwood_log',
                leaf: 'ars_nouveau:purple_archwood_leaves',
                sap: 'kubejs:vexing_juice',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'ars_nouveau:yellow_archwood_log',
                leaf: 'ars_nouveau:yellow_archwood_leaves',
                sap: 'kubejs:flashing_juice',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:blue_enchanted_log',
                leaf: 'byg:blue_enchanted_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:fir_log',
                leaf: 'byg:fir_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:green_enchanted_log',
                leaf: 'byg:green_enchanted_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:holly_log',
                leaf: 'byg:holly_berry_leaves',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:holly_log',
                leaf: 'byg:holly_leaves',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:jacaranda_log',
                leaf: 'byg:flowering_indigo_jacaranda_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:jacaranda_log',
                leaf: 'byg:indigo_jacaranda_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:lament_log',
                leaf: 'byg:lament_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:maple_log',
                leaf: 'byg:red_maple_leaves',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:maple_log',
                leaf: 'byg:maple_leaves',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:nightshade_log',
                leaf: 'byg:nightshade_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:palm_log',
                leaf: 'byg:palm_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:pine_log',
                leaf: 'byg:pine_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:rainbow_eucalyptus_log',
                leaf: 'byg:rainbow_eucalyptus_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:oak_log',
                leaf: 'byg:red_oak_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:oak_log',
                leaf: 'byg:brown_oak_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:birch_log',
                leaf: 'byg:brown_birch_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:spruce_log',
                leaf: 'byg:blue_spruce_leaves',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:pine_log',
                leaf: 'byg:araucaria_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:zelkova_log',
                leaf: 'byg:zelkova_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:skyris_log',
                leaf: 'byg:skyris_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:skyris_log',
                leaf: 'byg:green_apple_skyris_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:zelkova_log',
                leaf: 'byg:brown_zelkova_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'byg:zelkova_log',
                leaf: 'byg:zelkova_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:oak_log',
                leaf: 'byg:joshua_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:birch_log',
                leaf: 'byg:orange_birch_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:oak_log',
                leaf: 'byg:orange_oak_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:spruce_log',
                leaf: 'byg:orange_spruce_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:oak_log',
                leaf: 'byg:orchard_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:birch_log',
                leaf: 'byg:red_birch_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:spruce_log',
                leaf: 'byg:red_spruce_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'architects_palette:twisted_log',
                leaf: 'architects_palette:twisted_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'quark:blossom_log',
                leaf: 'quark:red_blossom_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'quark:blossom_log',
                leaf: 'quark:red_blossom_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'quark:blossom_log',
                leaf: 'quark:yellow_blossom_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'quark:blossom_log',
                leaf: 'quark:pink_blossom_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'quark:blossom_log',
                leaf: 'quark:lavender_blossom_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'quark:blossom_log',
                leaf: 'quark:blue_blossom_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:spruce_log',
                leaf: 'byg:yellow_spruce_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'minecraft:birch_log',
                leaf: 'byg:yellow_birch_leaves',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
              },
              {
                trunk: 'tconstruct:greenheart_log',
                leaf: 'tconstruct:ender_slime_leaves',
                sap: 'tconstruct:ender_slime',
                rate: { living: 25, dead: 4 }
              }

              
              
        ]
    }
];


onEvent('recipes', event => {
    const id_prefix = 'menril:base/thermal/tree_extractor/';

    treeRegistry.forEach((treeCategories) => {
        treeCategories.trees.forEach((tree) => {
            if (tree.sap) {
                if (tree.rate.living > 0) {

                        event.custom({
                            type: 'thermal:tree_extractor',
                            trunk: tree.trunk,
                            leaves: tree.leaf,
                            result: {
                                fluid: tree.sap,
                                amount: tree.rate.living
                            }
                        })
                }
            }
        });
    });
});
