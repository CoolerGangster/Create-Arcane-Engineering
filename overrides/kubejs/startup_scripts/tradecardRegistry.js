let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)

let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
//let EG = (id, x) => MOD("endergetic", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let BOP = (id, x) => MOD("biomesoplenty", id, x)
//let PR_C = (id, x) => MOD("projectred-core", id, x)
//let RQ = (id, x) => MOD("xreliquary", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) => MOD("forge", id, x)

onEvent('item.registry', event => {

	    
    event.create('quests:task').texture("quests:item/task")
    event.create('quests:collecting_task').texture("quests:item/collecting_task")
    event.create('quests:deforesting_task').texture("quests:item/deforesting_task")
    event.create('quests:fishing_task').texture("quests:item/fishing_task")
    event.create('quests:hunting_task').texture("quests:item/hunting_task")
    event.create('quests:mining_task').texture("quests:item/mining_task")
    event.create('quests:slaying_task').texture("quests:item/slaying_task")
    //event.create('quests:cooking_task').texture("quests:item/cooking_task")
    event.create('quests:farming_task').texture("quests:item/farming_task")
	//event.create('quests:processing_task').texture("quests:item/processing_task")
    //event.create('quests:magic_task').texture("quests:item/magic_task")
    

	//task imports
	//event.create('trade:task_import').texture("quests:item/task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))
    event.create('trade:collecting_task_import').texture("quests:item/collecting_task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))
    event.create('trade:deforesting_task_import').texture("quests:item/deforesting_task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))
    event.create('trade:fishing_task_import').texture("quests:item/fishing_task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))
    event.create('trade:hunting_task_import').texture("quests:item/hunting_task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))
    event.create('trade:mining_task_import').texture("quests:item/mining_task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))
    event.create('trade:slaying_task_import').texture("quests:item/slaying_task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))
    //event.create('trade:cooking_task_import').texture("quests:item/cooking_task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))
    event.create('trade:farming_task_import').texture("quests:item/farming_task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))
	//event.create('trade:processing_task_import').texture("quests:item/processing_task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))
    //event.create('trade:magic_task_import').texture("quests:item/magic_task").glow(true).tooltip(Component.gray("Used to automatically buy Tasks"))


	global.trades = []
	global.transactions = []

	let trade = (name, c1, c2, transactions, custom) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.trades.push(id)
		global.transactions.push(transactions)
		event.create(`trade:trade_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("trade:item/trade_card")
			.texture("trade:item/trade_card_0")
			.displayName((custom ? "" : "Import: ") + name)
			.unstackable()
	}

	let S = (x) => TE('silver_coin', x)
	let G = (x) => TE('gold_coin', x)

	trade("Exchange Currencies", 0xEBA83A, 0xF4F4F4, [
		{ in: G(1), out: S(64) },
		{ in: S(64), out: G(1) }
	], true)

	let DATAGEN_QUESTS = false

	let data = []
	let group_max_width = []
	let current_group_max_width = 0
	let simulate = DATAGEN_QUESTS
	let entry_cost = 10

	let row = 0
	let col = 0
	let group = 0

	let next_group = () => {
		group++
		if (simulate)
			group_max_width.push(current_group_max_width)
		current_group_max_width = 0
		col = 0
		row++
	}

	let simple = (name, item, coin, unit, c1, c2) => {
		if (!simulate)
			trade(name, c1, c2, [{ in: unit(coin), out: item }])
		if (!DATAGEN_QUESTS)
			return

		current_group_max_width = Math.min(8, current_group_max_width + 1)
		if (simulate)
			return

		let silver = unit == S
		let split = item.split('x')
		let amount = split[0]
		let id = split.splice(1).join('x').replace(' ', '')
		let card_id = "trade:trade_card_" + name.toLowerCase().replace("'", "").split(' ').join('_')

		if (col > 7) {
			col = 0
			row++
		}

		//let x = col - (group_max_width[group] - 1) / 2
		let x = col - 7/2
		let y = row + group / 2
		col++

		let template = `
		{
			title: "${amount}x ${name}"
			icon: "${id}"
			disable_toast: true
			x: ${x}d
			y: ${y}d
			shape: "hexagon"
			subtitle: "${coin} ${silver ? "Silver" : "Gold"}"
			can_repeat: true
			tasks: [{
				type: "item"
				item: "thermal:silver_coin"
				icon: { id: "thermal:silver_coin", Count: ${entry_cost}b }
				count: ${entry_cost}L
				consume_items: true
			}]
			rewards: [
				{
					type: "item"
					auto: "enabled"
					item: "${card_id}"
				}
				{
					type: "custom"
					title: "Repeatable"
					icon: "thermal:machine_cycle_augment"
					tags: ["reset"]
					auto: "no_toast"
				}
			]
		}`
		data.push(template)
	}

	while (true) {
		group = 0
		row = 0

		entry_cost = 10
		simple("Dirt", MC('dirt', 16), 2, S, 0x513825, 0xA87954)
		simple("Sand", MC('sand', 16), 4, S, 0xC2B289, 0xD8D6B9)
		simple("Gravel", MC('gravel', 16), 2, S, 0x686160, 0xA19393)
		simple("Clay", MC('clay', 16), 6, S, 0x878B95, 0x8E939D)
		simple("Ice", MC('ice', 16), 16, S, 0x7E99CF, 0xABB8D0)
		simple("Blackstone", MC('blackstone', 16), 12, S, 0x140E0F, 0x2D2831)
		simple("Grout", TC('grout', 16), 12, S, 0x70737F, 0xAEB0B5)
		simple("Cobblestone", MC('cobblestone', 16), 1, S, 0x585858, 0x646363)
		simple("Granite", MC('granite', 16), 3, S, 0x563A2F, 0x9A6C5B)
		simple("Diorite", MC('diorite', 16), 3, S, 0x7F7F7F, 0xD4D4D4)
		simple("Andesite", MC('andesite', 16), 3, S, 0x5F5F5F, 0x8E8E8E)
		simple("Deepslate", MC('deepslate', 16), 3, S, 0xA7A89E, 0xC0C2BA)
		simple("Dripstone", MC('dripstone_block', 16), 3, S, 0x5E6055, 0x797E74)
		simple("Calcite", MC('calcite', 16), 3, S, 0xC2C2C2, 0xDADADA)
		simple("Tuff", MC('tuff', 16), 3, S, 0x6B5D4F, 0x7D6B5A)
		simple("Scoria", CR('scoria', 16), 3, S, 0x2A130C, 0x553427)
		simple("Scorchia", CR('scorchia', 16), 3, S, 0x0D0706, 0x23201A)
		simple("Obsidian", MC('obsidian', 1), 8, S, 0x05030A, 0x36234C)
		
		next_group()
		entry_cost = 10
		simple("Dead Log", BOP('dead_log', 16), 2, S, 0x3D362D, 0x7A756D)
		simple("Oak Log", MC('oak_log', 16), 4, S, 0x735932, 0xA88756)
		simple("Birch Log", MC('birch_log', 16), 4, S, 0xD6D6D2, 0xC4B079)
		simple("Spruce Log", MC('spruce_log', 16), 4, S, 0x523E21, 0x6F522F)
		simple("Jungle Log", MC('jungle_log', 16), 4, S, 0x5A501D, 0x9B6E4C)
		simple("Acacia Log", MC('acacia_log', 16), 4, S, 0x4F4B42, 0x9E552E)
		simple("Dark Oak Log", MC('dark_oak_log', 16), 4, S, 0x2C1B0D, 0x422B15)
		simple("Crimson Stem", MC('crimson_stem', 16), 8, S, 0x442332, 0x7A3852)
		simple("Warped Stem", MC('warped_stem', 16), 8, S, 0x3E1E2D, 0x347776)
		
		next_group()
		entry_cost = 10
		simple("Iron Ingot", MC('iron_ingot', 8), 16, S, 0xA6A6A6, 0xD5D5D5)
		simple("Zinc Ingot", CR('zinc_ingot', 8), 16, S, 0x616A60, 0xD0D2C5)
		simple("Copper Ingot", MC('copper_ingot', 8), 16, S, 0xDD7E5D, 0xFCEFBA)
		simple("Nickel Ingot", TE('nickel_ingot', 8), 32, S, 0x977756, 0xE4D196)
		simple("Lead Ingot", TE('lead_ingot', 8), 32, S, 0x232456, 0x7C95A4)
		simple("Gold Ingot", MC('gold_ingot', 8), 48, S, 0xD99413, 0xFAF25E)
		
		simple("Andesite Alloy", CR('andesite_alloy', 16), 8, S, 0x505050, 0x878787)
		simple("Steel", "8x alloyed:steel_ingot", 16, S, 0x3E4644, 0xB8DAC8)
		simple("Brass Ingot", CR('brass_ingot', 8), 48, S, 0x6F3C2D, 0xFCF085)
		simple("Invar Ingot", TE('invar_ingot', 4), 64, S, 0x406D6C, 0xC3CAC1)
		
		entry_cost = 10
		simple("Coal", MC('coal', 16), 4, S, 0x1C1C1E, 0x383D45)
		simple("Flint", MC('flint', 16), 4, S, 0x3C3B3B, 0xA6A6A6)
		simple("Redstone Dust", MC('redstone', 16), 8, S, 0xA80F01, 0xFC7781)
		simple("Diamond", MC('diamond', 1), 1, G, 0x20C3B3, 0xD2FCF3)
		simple("Lapis Lazuli", MC('lapis_lazuli', 8), 32, S, 0x335DC1, 0x7395E7)
		simple("Emerald", MC('emerald', 1), 1, G, 0x00A82B, 0xADFACB)
		simple("Sulfur", TE('sulfur', 4), 8, S, 0xC7A94A, 0xEEF071)
		simple("Nether Quartz", MC('quartz', 8), 24, S, 0xB19E8F, 0xE7E2DB)
		simple("Certus Quartz", AE2('certus_quartz_crystal', 8), 24, S, 0x91C5FC, 0xA7CBCF)
		simple("Fluix Quartz", AE2('fluix_crystal', 8), 32, S, 0x8F5CCB, 0xFC7ED4)
		simple("Cured Rubber", TE('cured_rubber', 6), 16, S, 0x3D363C, 0x594F55)
		
		next_group()
		entry_cost = 10
		simple("Scaffolding", MC('scaffolding', 16), 2, S, 0x7F5F41, 0xDDC683)
		simple("Wool", MC('white_wool', 1), 8, S, 0xBEC4C5, 0xE4E4E4)
		simple("Sponge", MC('sponge', 1), 16, S, 0x8F8234, 0xCDCF4A)
		simple("Cobweb", MC('cobweb', 1), 16, S, 0xC2CCCF, 0xFCFCFC)
		
		row += 2
		
		next_group()
		entry_cost = 10
		simple("Rice", FD('rice_bag', 1), 4, S, 0x9F7653, 0xCEC6BC)
		simple("Pointed Dripstone", MC('pointed_dripstone', 16), 3, S, 0x5E6055, 0x797E74)
		simple("Straw", FD('straw', 32), 8, S, 0x623A17, 0x966537)
		simple("Glowshroom", BOP('glowshroom', 4), 9, S, 0x2C65C9, 0x83A7B7)
		simple("Bramble", BOP('bramble', 4), 9, S, 0x8C3122, 0xECCDBC)
		simple("Barley", BOP('barley', 4), 4, S, 0xB78B44, 0xD8BC64)
		simple("Watergrass", BOP('watergrass', 4), 4, S, 0x43763D, 0x538B51)
		simple("Menril Sapling", "integrateddynamics:menril_sapling", 32, S, 0x0015A8, 0x0015A8)
		// simple("Mangrove Root", BOP('mangrove_root', 4), 9, S, 0x795740, 0xB8AB88)
		simple("Reed", BOP('reed', 4), 5, S, 0x7B4E35, 0xB2855C)
		simple("Clover Petal", BOP('huge_clover_petal', 4), 10, S, 0x5B8A4F, 0x6FA960)
		simple("Spanish Moss", BOP('spanish_moss', 4), 7, S, 0x395B2A, 0xA2C790)
		simple("Willow Vine", BOP('willow_vine', 4), 7, S, 0x265F0D, 0x317B10)
		simple("Cattail", BOP('cattail', 4), 4, S, 0x186B2B, 0x845738)
		simple("Sugar Cane", MC('sugar_cane', 4), 3, S, 0x688546, 0xC5FC85)
		simple("Kelp", MC('kelp', 8), 3, S, 0x5B8131, 0x58A92F)
		simple("Bamboo", MC('bamboo', 8), 5, S, 0x4F7416, 0x88AC5F)
		simple("Sweet Berries", MC('sweet_berries', 8), 11, S, 0x27613F, 0xA30700)
		simple("Vines", MC('vine', 4), 7, S, 0x183D08, 0x317B10)
		
		next_group()
		entry_cost = 10
		simple("Daub", SP('daub', 16), 5, S, 0xBFBAAA, 0xCBC8B6)
		simple("Clear Glass", TC('clear_glass', 16), 4, S, 0xA9C3CF, 0xE8E8E8)
		// simple("Factory Block", "16x chisel:factory/dots", 2, S, 0x211C10, 0x604B43)
		// simple("Laboratory Block", "16x chisel:laboratory/wallpanel", 4, S, 0x71706E, 0x9D9A98)
		simple("Copper Shingles", CR('copper_shingles', 16), 3, S, 0xB5654B, 0xE4BB79)
		simple("Algal Bricks", AP('algal_bricks', 32), 6, S, 0x292926, 0x3D4D48)
		simple("Olivestone Bricks", AP('olivestone_bricks', 32), 8, S, 0x3A3C2E, 0x57553E)
		simple("Limestone", CR('limestone', 32), 8, S, 0x756958, 0x7F7360)
		simple("Sunmetal", AP('sunmetal_block', 32), 8, S, 0x603E38, 0xB48764)
		simple("Plating Block", AP('plating_block', 32), 8, S, 0x222225, 0x39383C)
		simple("Twisted Planks", AP('twisted_planks', 32), 8, S, 0x5E5259, 0x72616B)
		simple("Osseous Bricks", AP('osseous_bricks', 32), 8, S, 0x9D976F, 0xD3D0BF)
		simple("Seared Stone", TC('seared_stone', 16), 32, S, 0x393734, 0x59534F)
		simple("Scorched Stone", TC('scorched_stone', 16), 32, S, 0x382C25, 0x4C3F37)
		
		simple("Lantern", MC('lantern', 1), 1, S, 0x484F64, 0xF6C765)
		simple("Copper Lantern", SP('copper_lantern', 1), 1, S, 0xB36535, 0xF3B154)
		simple("Brass Lantern", SP('brass_lantern', 1), 1, S, 0xA47C37, 0xFAEACF)
		simple("Crimson Lantern", SP('crimson_lantern', 1), 1, S, 0x9C0E2C, 0xE7EB56)
		
		next_group()
		entry_cost = 10
		simple("Slime Ball", MC('slime_ball', 4), 24, S, 0x4F7E48, 0x8AD480)
		simple("String", MC('string', 4), 5, S, 0x2E4446, 0xD8D8D8)
		simple("Feather", MC('feather', 4), 6, S, 0xD0D0D0, 0xFCFCFC)
		simple("Gunpowder", MC('gunpowder', 4), 7, S, 0x535353, 0x717171)
		simple("Leather", MC('leather', 4), 8, S, 0x873A25, 0xC45B34)
		simple("Ink Sac", MC('ink_sac', 4), 8, S, 0x493F49, 0x786470)
		simple("Experience", MC('experience_bottle', 1), 8, S, 0x689AC7, 0xFFF2FF)
		simple("Shulker Shell", MC('shulker_shell', 1), 2, G, 0x6B476A, 0x956895)
		simple("Spider Eye", MC('spider_eye', 4), 10, S, 0x64062A, 0xC25E6A)
		simple("Ender Pearl", MC('ender_pearl', 1), 48, S, 0x0B4C41, 0x2BCBAF)
		simple("Rotten Flesh", MC('rotten_flesh', 4), 3, S, 0xB24320, 0x695C18)
		simple("Blaze Rod", MC('blaze_rod', 1), 20, S, 0xAC3B00, 0xD5AC26)
		simple("Bone", MC('bone', 4), 8, S, 0xC9C4A3, 0xC9C4A3)
		simple("Prismarine Shard", MC('prismarine_shard', 4), 16, S, 0x2F6355, 0x8FC0AA)
		simple("Prismarine Crystals", MC('prismarine_crystals', 4), 24, S, 0x71A296, 0xDCE6D9)
		
        next_group()
		entry_cost = 10
		// simple("Witch Hat", RQ('witch_hat', 1), 1, G, 0x424242, 0x568125)
		// simple("Zombie heart", RQ('zombie_heart', 1), 32, S, 0x532B38, 0x8D584A)
		// simple("Squid Beak", RQ('squid_beak', 1), 32, S, 0x00613B, 0x5BCDA1)
		// simple("Rib Bone", RQ('rib_bone', 1), 32, S, 0xDFDDCE, 0xFAF9E9)
		// simple("Catalyzing Gland", RQ('catalyzing_gland', 1), 48, S, 0x268E23, 0x63CA52)
		// simple("Chelicerae", RQ('chelicerae', 1), 32, S, 0x251721, 0x4D0C3B)
		// simple("Slime Pearl", RQ('slime_pearl', 1), 48, S, 0x1B9D33, 0x84F58E)
		// simple("Bat Wing", RQ('bat_wing', 1), 2, G, 0x464646, 0x6D6D6D)
		// simple("Withered Rib", RQ('withered_rib', 1), 2, G, 0x2A2E2E, 0x434949)
		// simple("Molten Core", RQ('molten_core', 1), 48, S, 0xED7102, 0xFAFC58)
		// simple("Eye of the Storm", RQ('eye_of_the_storm', 1), 2, G, 0xFCD607, 0x96FC52)
		// simple("Frozen Core", RQ('frozen_core', 1), 48, S, 0x008DC2, 0x7571FB)
		// simple("Nebulous Heart", RQ('nebulous_heart', 1), 1, G, 0x6200A0, 0xE500C3)
		// simple("Guardian Spike", RQ('guardian_spike', 1), 1, G, 0x7F4215, 0xE29964)
		simple("Phantom Membrane", MC('phantom_membrane', 1), 48, S, 0x6E506B, 0xC1B79F)
		simple("Blaze Cake", CR('blaze_cake', 1), 16, S, 0x834141, 0xFCE083)

		if (!DATAGEN_QUESTS)
			break
		if (!simulate)
			break
		simulate = false
	}


	if (DATAGEN_QUESTS) {
		console.log("QUEST PASTER:")
		console.log(data.join(""))
		console.log(":QUEST PASTER END")
	}
})