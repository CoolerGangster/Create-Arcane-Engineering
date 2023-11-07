
onEvent('item.registry.tool_tiers', event => {
    event.add('tool', tier => {
        tier.uses = 250
        tier.repairIngredient = '#forge:ingots/iron'
    })
    event.add('zyzz', tier => {
        tier.uses = -1
        tier.speed = 20.0
        tier.attackDamageBonus = 36.0
        tier.level = 20
        tier.enchantmentValue = 200
        tier.repairIngredient = 'avaritia:zyzzium_ingot'
    })
    event.add('lootbag', tier =>{
        tier.enchantmentValue = 15
        tier.speed = 0.0
        //tier.uses = -1  //makes them not work in the enchanting table
        tier.attackDamageBonus = 0
    })
});

onEvent('item.registry', (event) => {
    let mechanism = (name, rarity) => {
        let id = name.toLowerCase()
        event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + ' Mechanism').rarity(RARITY_COMMON)
        event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly').texture("kubejs:item/incomplete_" + id + "_mechanism").displayName('Incomplete ' + name + ' Mechanism')

    }
    let tool = (name,rarity) => {
        let id = name.toLowerCase()
        event.create(id, 'sword').tier('tool').texture("kubejs:item/" + id).displayName(name).rarity(RARITY_COMMON)
    }
    event.create("avaritia:zizz", 'sword').tier('zyzz').displayName("Goetterwaffe").rarity(RARITY_EPIC)
    let seed = (name) => {
        let id = name.toLowerCase()
        event.create(id + '_seed').texture("kubejs:item/" + id + "_seed").displayName(name + ' Seed')
        event.create(id + '_cluster').texture("kubejs:item/" + id + "_cluster").displayName(name + ' Seed Cluster')
        event.create('incomplete_' + id, 'create:sequenced_assembly').texture("kubejs:item/" + id + "_seed").displayName('Incomplete ' + name)
    }
    event.create('leather_pocket')  
    event.create('warp_fragments').rarity(RARITY_RARE).glow(true)
    event.create('radiant_coil').glow(true).texture("kubejs:item/radiant_coil").displayName('Radiant Induction Coil')
    event.create('radiant_sheet').glow(true).texture("kubejs:item/radiant_sheet").displayName('Radiant Sheet')
    event.create('petrified_sheet').texture("kubejs:item/petrified_sheet").displayName('Petrified Sheet')
    event.create('enriched_rubber').texture("kubejs:item/enriched_rubber").displayName('Menril Enriched Rubber')
    event.create('certus_quartz_seed_cluster').texture("kubejs:item/certus_quartz_cluster").displayName('Certus Quartz Cluster')
    event.create('incomplete_certus_quartz_cluster', 'create:sequenced_assembly').texture("kubejs:item/certus_quartz_seed").displayName('Incomplete Certus Quartz Cluster')
    mechanism('Kinetic')
    event.create('makeshift_kinetic_mechanism').tooltip("Without menril wood, the Mechanism isn't sturdy enough to support further tiers of mechanisms.")
    mechanism('Sealed') 
    mechanism('Sturdy')
    event.create('track_tool').glow(true)
    mechanism('Plastic', RARITY_UNCOMMON)
    mechanism('Integrational', RARITY_UNCOMMON)
    event.create('radiant_mechanism').texture("kubejs:item/radiant_mechanism").displayName('Radiant Mechanism').rarity(RARITY_COMMON).glow(true)
    event.create('incomplete_radiant_mechanism', 'create:sequenced_assembly').texture("kubejs:item/incomplete_radiant_mechanism").displayName('Incomplete Radiant Mechanism').glow(false)
    mechanism('Time', RARITY_RARE)
    mechanism('Supercritical', RARITY_RARE)
    tool('Saw')
    seed('Quartz')
    tool('Screwdriver')

    tool('Resonator') 
    event.create('rune_dust').displayName('Rune Dust')
    event.create('anthracene').displayName('Anthracene').tooltip("C₁₄H₁₀")
    event.create('incomplete_anthraquinone').displayName('Incomplete Anthraquinone').tooltip("Next: Submerge in Chromic Acid")
    event.create('anthraquinone').displayName('Anthraquinone').tooltip("C₁₄H₈O₂")
    event.create('chrom').displayName('Chrom').tooltip("Cr")
    event.create('powdered_flint').displayName('Powdered Flint').tooltip("Mix with Refined Fuel to create gunpowder")
    event.create('empty_vial').displayName('Empty Vial')
    //start chapter 4
    let k = 'Unassembled PCB'
    event.create('incomplete_pcb_blueprint', 'create:sequenced_assembly').displayName('Incomplete PCB Blueprint').texture("create:item/empty_schematic")
    event.create('plastic_board').displayName('Plastic Board')
    event.create('etched_board').displayName(k).tooltip("Next: Separate leftover residue inside a Centrifugal Separator")
    event.create('dryed_board').displayName(k).tooltip("Next: Package for legend processing")
    event.create('separated_board').displayName(k).tooltip("Next: Apply Solder mask")
    event.create('masked_pcb').displayName(k).tooltip("Next: Let dry in an Induction Smelter")
    event.create('incomplete_masked_pcb', 'create:sequenced_assembly').displayName('Incomplete Unassembled PCB')
    event.create('pcb_assembly').displayName('PCB Assembly Package')
    event.create('incomplete_pcb_assembly', 'create:sequenced_assembly').displayName('Incomplete PCB assembly package').texture("pneumaticcraft:item/plastic")
    event.create('pcb_assembly_2').displayName('PCB Legend Assembly Package').rarity(RARITY_COMMON).glow(true)
    event.create('incomplete_pcb_assembly_2', 'create:sequenced_assembly').displayName('Incomplete PCB Legend Assembly Package').texture("kubejs:item/pcb_assembly")
    event.create('legend_pcb').displayName(k).tooltip("Next: Apply ENIG surface treatment")
    event.create('incomplete_tested_pcb', 'create:sequenced_assembly').displayName('Incomplete Unassembled PCB').texture("kubejs:item/legend_pcb")
    event.create('untested_pcb').displayName(k).tooltip("Next: Electrical testing with Drill processing.")
    event.create('tested_pcb').displayName(k).tooltip("Next: Clean for finish.")  
    event.create('cleaned_pcb').displayName(k).tooltip("Next: Finally, let dry.")
    event.create('incomplete_calculation_circuit', 'create:sequenced_assembly').displayName('Incomplete Calculation Circuit').texture("kubejs:item/kinetic_mechanism")
    event.create('incomplete_logic_circuit', 'create:sequenced_assembly').displayName('Incomplete Logic Circuit').texture("create:item/precision_mechanism")
    event.create('incomplete_engineering_circuit', 'create:sequenced_assembly').displayName('Incomplete Engineering Circuit').texture("kubejs:item/radiant_mechanism")
    event.create('electricaly_tested').displayName(k).tooltip("Next: Electrical testing with Drill processing.")
    event.create('mystery_pcb').displayName(k).tooltip("Next: Use Sandpaper to Reveal the Inside.")
    event.create("separated_board_stack").displayName(k)
    event.create("dryed_board_stack").displayName(k)

    //start M2
    event.create('mage_leaf').displayName('Magically Blooming Leaves')
    event.create('magebloom_sourceberry_smoothie_bowl').displayName('Magebloom Sourceberry Smoothie Bowl').food(food => {
        food.hunger(8).saturation(0.75).effect("ars_nouveau:mana_regen",300,2,1).eaten(ctx => {
            ctx.player.give(Item.of("minecraft:bowl",1))
        })
    })
    event.create('dirty_bowl').displayName('Bowl of Leaves')
    //start m3
    event.create('sourcegem_fragments').displayName('Source Crystal Fragments')
    //compat shit
    event.create('incomplete_cogwheel', 'create:sequenced_assembly').displayName('Incomplete Cogwheel').parentModel("create:block/cogwheel_shaftless")
    event.create('runic_tablet').displayName("Runic Tablet").tooltip("What mysteries may this behold?")
    event.create('alloy_radar').displayName('Alloy Scanner').tooltip("Rightclick The Ground to scan for Andesite and Diorite Pockets in Chunk. *might be laggy*")

    //ch5calcstuff
    event.create('damaged_a').displayName('Damaged A PCB Part')
	event.create('damaged_b').displayName('Damaged B PCB Part')
	event.create('damaged_c').displayName('Damaged C PCB Part')
	event.create('damaged_d').displayName('Damaged D PCB Part')
	event.create('damaged_e').displayName('Damaged E PCB Part')
	event.create('damaged_f').displayName('Damaged F PCB Part')
	event.create('damaged_g').displayName('Damaged G PCB Part')
	event.create('a').displayName('A PCB Part')
	event.create('b').displayName('B PCB Part')
	event.create('c').displayName('C PCB Part')
	event.create('d').displayName('D PCB Part')
	event.create('e').displayName('E PCB Part')
	event.create('f').displayName('F PCB Part')
	event.create('g').displayName('G PCB Part')
    event.create('fragment_of_patience').glow(true).rarity(RARITY_EPIC)
	event.create('finalpcb').displayName('ZPM Greg PCB')
    event.create('menril_shrub').tooltip("With the weakening of the Arcane so have the Arcane Trees been weakened. Can you restore this artifact?")
    event.create('rejuvinated_menril_shrub').tooltip("Youve restored it, well to some part. To fully restore the Menril Sapling you must continue.")

    //m4
    event.create('cae:time_crystal').displayName('Time Crystal Fragments')
	
    function Keystone(id,color) {
        event.create("cae:"+ id + "_keystone").texture("kubejs:item/gem").color(0, color).rarity(RARITY_EPIC)
    }
    Keystone("source",0x9F2B68)
    Keystone("soul",0x000099)
    Keystone("nature",0x009933)
    Keystone("dry",0xffcc00)
    Keystone("ice",0x00ccff)
    /*let keystones = ["source","soul","nature","dry","ice"]
    keystones.forEach(element => {
        event.create("cae:"+ element[0] + "_keystone").texture("kubejs:items/gem").color(0x9F2B68)
    });
    */
    event.create("avaritia:zyzzium_ingot").texture("kubejs:item/zyzz").rarity(RARITY_EPIC).displayName("Zyzzium Ingot")
    event.create("broken_arcane_egg").rarity(RARITY_EPIC)
    event.create("arcane_unscrambled_egg").rarity(RARITY_EPIC).food(food => {
        food.hunger(8).saturation(3).effect("ars_nouveau:mana_regen",1200,2,1).effect('haste', 600, 2, 1).eaten(ctx => {ctx.player.tell(Text.darkPurple("You feel Arcane."))})
    })
    event.create("source_candy_rock").rarity(RARITY_EPIC).food(food => {
        food.hunger(8).saturation(4).effect("ars_nouveau:mana_regen",2800,3,1).effect('strength', 600, 2, 1).eaten(ctx => {ctx.player.tell(Text.darkPurple("You feel Source coarsing through your veins."))})
    })
    event.create("sushi").rarity(RARITY_EPIC).food(food => {
        food.hunger(8).saturation(4).effect("ars_nouveau:mana_regen",1200,2,1).effect('water_breathing', 600, 0, 1).eaten(ctx => {ctx.player.tell(Text.yellow("You feel Cool."))})
    })
    event.create("magical_ice").rarity(RARITY_EPIC).food(food => {
        food.hunger(8).saturation(4).effect("ars_nouveau:mana_regen",1200,2,1).effect('minecraft:speed', 600, 2, 1).eaten(ctx => {ctx.player.tell(Text.blue("You feel Iced Out."))})
    })
    event.create("arcane_omelett_sheet").rarity(RARITY_EPIC).food(food => {
        food.hunger(20).saturation(12).effect("ars_nouveau:mana_regen",2400,3,1).effect('instant_health', 600, 2, 1).eaten(ctx => {ctx.player.tell(Text.gold("You feel Godlike."))})
    })
    //C5    
  	event.create('cae:stem_cell').displayName("Stem Cell").texture("kubejs:item/stem_cell").rarity(RARITY_EPIC).food(food => {
	    food
    	    .hunger(6)
    	    .saturation(6)//This value does not directly translate to saturation points gained
      	    //The real value can be assumed to be:
      		//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
            .effect('instant_health', 600, 0, 1)
            .effect('water_breathing', 600, 0, 1)
      		.removeEffect('poison')
      		.alwaysEdible()//Like golden apples
      		.fastToEat()//Like dried kelp
      		.meat()//Dogs are willing to eat it
      		.eaten(ctx => {//runs code upon consumption
        		ctx.player.tell(Text.darkGreen('You feel rejuvinated!'))
          		//If you want to modify this code then you need to restart the game.
          		//However, if you make this code call a global startup function
          		//and place the function *outside* of an event handler
          		//then you may use the command:
          		//  /kubejs reload startup_scripts
          		//to reload the function instantly.
          		//See example below
        	})
	})

    //sum chapter 2 stuff
    event.create("redstone_cluster")
    event.create("incomplete_redstone_seed").texture("kubejs:item/redstone_seed")
    event.create("redstone_seed")
    event.create("lootbag_create_andesite", "pickaxe").displayName("Engineers Toolkit").rarity(RARITY_RARE).unstackable().tier("lootbag")
    event.create("lootbag_arcane_1", "pickaxe").displayName("Artificers Bag").rarity(RARITY_UNCOMMON).unstackable().tier("lootbag")
    event.create("lootbag_arcane_2", "pickaxe").displayName("Artificers Epic Bag").rarity(RARITY_RARE).unstackable().tier("lootbag")
    event.create("lootbag_arcane_3", "pickaxe").displayName("Artificers Legendary Bag").rarity(RARITY_EPIC).unstackable().tier("lootbag")
    event.create("lootbag_poggers", "pickaxe").displayName("Reward of Patience").rarity(RARITY_EPIC).unstackable().tier("lootbag")
    event.create("lootbag_create_brass", "pickaxe").displayName("Engineers Brass Toolkit").rarity(RARITY_EPIC).unstackable().tier("lootbag")
    event.create("lootbag_create_radiant", "pickaxe").displayName("Engineers Radiant Toolkit").rarity(RARITY_EPIC).unstackable().tier("lootbag").glow(true)
    event.create("lootbag_pcb", "pickaxe").displayName("PCB Loot Package").rarity(RARITY_EPIC).unstackable().tier("lootbag")
});
