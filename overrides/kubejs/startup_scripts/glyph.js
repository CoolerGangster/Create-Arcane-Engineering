/*onForgeEvent('com.hollingsworth.arsnouveau.api.event.SpellResolveEvent$Pre', event =>{
    let blck = event.world.asKJS().getBlock(event.rayTraceResult.getLocation()) 
    //event.world.server.asKJS().tell("§9Distance to Shooter: " + event.rayTraceResult.distanceTo(event.shooter))
    if (blck.id == "ars_nouveau:source_jar") {
        let num = blck.getEntityData().getFloat("source") + event.spell.getCastingCost() - Math.round(event.rayTraceResult.distanceTo(event.shooter))
        if (num >= 10000){num = 10000}
        if (num >= blck.getEntityData().getFloat("source")) {
            blck.mergeEntityData('\{source:' + num+ '\}')
        }
        event.setCanceled(true)
    }
    console.log("Recipe: " + event.spell.recipe)
    let glyphs = []
    event.spell.recipe.forEach(Spell =>{
        console.log(Spell.getGlyph())
        glyphs.push(Spell.getGlyph())
        if (Spell.getGlyph() == "glyph_sensitive") {console.log("CHECK!")}
    })
    if (true) {
        if (event.rayTraceResult.getLocation().x() % 1 == 0 && !blck.blockState.isFaceSturdy(event.world.asKJS().minecraftLevel, blck.pos, Direction.east)) {
            blck = event.world.asKJS().getBlock(event.rayTraceResult.getLocation().add(-0.5, 0, 0))
        }
        if (event.rayTraceResult.getLocation().y() % 1 == 0 && !blck.blockState.isFaceSturdy(event.world.asKJS().minecraftLevel, blck.pos, Direction.up)) {
            blck = event.world.asKJS().getBlock(event.rayTraceResult.getLocation().add(0, -0.5, 0))
        }
        if (event.rayTraceResult.getLocation().z() % 1 == 0 && !blck.blockState.isFaceSturdy(event.world.asKJS().minecraftLevel, blck.pos, Direction.south)) {
            blck = event.world.asKJS().getBlock(event.rayTraceResult.getLocation().add(0, 0, -0.5))
        }
    }
    event.world.server.asKJS().tell("§3Block: §r" + blck)
    glyphs.forEach(glyph =>{
        if (glyph == "glyph_sensitive" && blck == "minecraft:stone") {blck.set("minecraft:diamond_block")}
    })
})*/