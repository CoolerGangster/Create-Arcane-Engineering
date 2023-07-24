onEvent('item.tooltip',tooltip => {
    //tooltip.add(['ars_nouveau:source_gem'], 'The tooltip above is wrong, press shift to see how its been changed for this pack.')
    tooltip.addAdvanced('ars_nouveau:source_gem', (item, advanced, text) => {
        text.add(1, Text.darkPurple('Made by Casting Source onto Runic Tablets. (the tooltip below is wrong)'))
    })
    tooltip.addAdvanced('ars_nouveau:magebloom_crop', (item, advanced, text) => {
        text.add(1, Text.darkPurple('Sighted on floating Islands, stashed by the Ancients. Can also be made by the following:'))
    })
    tooltip.addAdvanced('ars_nouveau:magebloom', (item, advanced, text) => {
        text.add(1, Text.darkPurple('Sighted on floating Islands, stashed by the Ancients.'))
    })
    let toltips =[
        ['thermal:obsidian_glass', "Completely Indestructible by Withers."],
        ['thermal:enderium_glass',"Completely Indestructible by Withers."],
        ['thermal:lumium_glass',"Completely Indestructible by Withers."],
        ['thermal:signalum_glass',"Completely Indestructible by Withers."], 
        ['createaddition:straw',"Right-Click on a Blaze Burner, to allow it to take Liquid Fuels as an Input, for example oil,refined fuel etc."],
        ['kubejs:lootbag_create_andesite',"Rightclick to open. You can enchant it with Fortune for more Fortune"],
        ['kubejs:lootbag_arcane_1',"Rightclick to open. You can enchant it with Fortune for more Fortune"],
        ['kubejs:lootbag_arcane_2',"Rightclick to open. You can enchant it with Fortune for more Fortune"],
        ['kubejs:lootbag_arcane_3',"Rightclick to open. You can enchant it with Fortune for more Fortune"],
        ['kubejs:lootbag_poggers',"You've done it. Rightclick to open."],
        ['kubejs:lootbag_create_brass',"Rightclick to open. You can enchant it with Fortune for more Fortune"],
        ['minecraft:ancient_debris','Can be automated with the Source Time Catalyst'],
        ['forbidden_arcanus:arcane_crystal','Obtained by Simply Mining Arcane Crystal Ore. Or by Chapter M3'],
        ['kubejs:runic_tablet','Right-Click to Create Lightning'],
        ['forbidden_arcanus:corrupted_pixie_utrem_jar','Right Click a Utrem Jar with a Corrupted Pixie to make.'],
        ['forbidden_arcanus:pixie_utrem_jar','Wash a Corrupted Pixie Utrem Jar.'],
        ['forbidden_arcanus:aureal_bottle','Made by Filling a Glass Vial with Aureal Essence'],
        ["kubejs:source_bucket","Shapeless Craft it into a Ars Nouveau Source Bucket, which then can be rightclicked onto sourcejars..."],
        ["ars_nouveau:bucket_of_source","Right-Click Source Jars to insert the Source, can be made from Source Buckets from KubeJS"],
        ["cae:skystone_catalyst", "An alien Artifact found at the heart of a Meteorite. Right-Click it with redstone to make it create Skystone In a Cloud around it."],
        ["cae:veridium_catalyst", "This Block can be found below Sea Level in a Geode. Rightclick it, and it will spew out blocks of its relatives into the surrounding, allowing them to be farmed"],
        ["cae:ochrum_catalyst", "This Block can be found below Sea Level in a Geode. Rightclick it, and it will spew out blocks of its relatives into the surrounding, allowing them to be farmed"],
        ["cae:asurine_catalyst", "This Block can be found below Sea Level in a Geode. Rightclick it, and it will spew out blocks of its relatives into the surrounding, allowing them to be farmed"],
        ["cae:crimsite_catalyst", "This Block can be found below Sea Level in a Geode. Rightclick it, and it will spew out blocks of its relatives into the surrounding, allowing them to be farmed"],
        ["forbidden_arcanus:stellarite_piece","Throw Nether Stars above y320 to make it transform to stellarite"],
        ["kubejs:fragment_of_patience","§c *Important: The Saw processing will always set the Shard to Stage 1, so make sure the saw only gets used once!.* \n §5 7 Processing Steps are involved, with 7 machines, the order of processing steps are randomized on every world Load. The first step will always be cutting \nTheres a 1/1000 Chance for each cycle to bear success.\nThe key here is to make a factory thats super generalized."]
    ]
    toltips.forEach(i => {
        tooltip.addAdvanced(i[0], (item, advanced, text) => {
            text.add(1, Text.darkPurple(i[1]))
        })
    });
    tooltip.addAdvanced(/sophisticatedbackpacks:.*backpack/, (item, advanced, text) => {
		if (!tooltip.isShift()) {
			if (item.nbt) {
				text.add(1, "§7Leather:§r " + (item.nbt.leather ? item.nbt.leather : 0) + "§7/§r4")
				text.add(2, "§7String:§r " + (item.nbt.string ? item.nbt.string : 0) + "§7/§r2")
				text.add(3, "§7Pockets:§r " + (item.nbt.pocket ? item.nbt.pocket : 0) + "§7/§r2")
				text.add(4, "§7Obelisks:§r " + (item.nbt.obelisk ? item.nbt.obelisk : 0) + "§7/§r1")
				text.add(5, "§7Final PCBs:§r " + (item.nbt.pcb ? item.nbt.pcb : 0) + "§7/§r1")
			} else {
				text.add(1, "§7Leather:§r 0§7/§r4")
				text.add(2, "§7String:§r 0§7/§r2")
				text.add(3, "§7Pockets:§r 0§7/§r2")
				text.add(4, "§7Obelisks:§r 0§7/§r1")
				text.add(5, "§7Final PCBs:§r 0§7/§r2")
			}
		}
	})
})
 