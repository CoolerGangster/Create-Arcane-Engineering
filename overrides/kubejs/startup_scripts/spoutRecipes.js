onEvent("create.spout.special", event => {
    //Creates a handler for spout, the id is required as there's no way to generate a consistent uuid here.
    //
    //Spout will call the handler with simulate = true for every tick, if the returned value > 0, then
    //the spout will start its animation, handler will be called with simulate = false again at the end of
    //the animation. 
    //
    //The returned integer is how much fluid should this operation consume.

    let spoutInteraction = (blockId, fluidId, fluidAmount, result, requiredAmount) => {
    event.addSpoutHandler(blockId + "_spout_interaction", blockId, (block, fluid, simulate) => {
        /*
        blockId = The block required below the spout
        fluidId = The fluid to be used
        fluidAmount = The amount of fluid consumed in an interaction and the amount needed to start an interaction if requiredAmount is left undefined. 0 wont work, even if requiredAmount is defined.
        result = The block that is placed instead of the old block. A random tick will be called if left undefined.
        requiredAmount = the amount of fluid required to start an interaction. 0 doesnt work.
        */
        if (!requiredAmount)
        requiredAmount = fluidAmount
        if (fluid.id == fluidId && fluid.amount >= requiredAmount) {
            if (!simulate)
                if (result)
                block.setBlockState(Block.getBlock(result).defaultBlockState(), 2);
                else
                block.blockState.randomTick(block.level.minecraftLevel, block.pos, block.level.minecraftLevel.random)
            return fluidAmount;
        }   
        return 0;
        });
    }
    spoutInteraction("minecraft:wheat", "minecraft:water", 100)
    spoutInteraction("ars_nouveau:blue_archwood_sapling", "kubejs:cascading_juice", 1000, "chipped:moss_block_1")
    spoutInteraction("ars_nouveau:green_archwood_sapling", "kubejs:flourishing_juice", 1000, "immersive_weathering:rooted_grass_block")
    spoutInteraction("ars_nouveau:purple_archwood_sapling", "kubejs:vexing_juice", 1000, "chipped:amethyst_block_30")
    spoutInteraction("ars_nouveau:red_archwood_sapling", "kubejs:blazing_juice", 1000, "minecraft:netherrack")
    spoutInteraction("ars_nouveau:yellow_archwood_sapling", "kubejs:flashing_juice", 1000, "quark:yellow_shingles")
    let corundum = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
    corundum.forEach(Color => {
        spoutInteraction("quark:" + Color + "_corundum", "minecraft:water", 100)
    }); 

    
})