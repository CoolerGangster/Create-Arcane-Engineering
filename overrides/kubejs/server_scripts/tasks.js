// priority: 0

global.seededRandom
global.cachedSeed
global.questLists
if (global.questLists == undefined) {global.questLists = []}

console.log(global.questLists)

let taskCost = 8

function shuffle(array, random) {
    for (let i = 0; i < array.length; i++) {
		let j = random.nextInt(i+1)
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return
};
function assign(array, values, random, item) {
	for (let i = 0; i < array.length; i++) {
		shuffle(array, random)
	}
	let tempArray = []
	let modifiedArray = array
	for (let i = 0; i < values.length; i++) {
		shuffle(modifiedArray, random)
		tempArray[i] = [modifiedArray[0], values[i]]
		modifiedArray.splice(0, 1)
		if (modifiedArray[0] == undefined) {modifiedArray = array}
	}
	global.questLists.push([tempArray, item])

	return
};

function capitalize(string) {;
	let stringOut = "";
	string.split(/[ \_]/).forEach(substring =>{
		substring = substring.charAt(0).toUpperCase()+substring.slice(1);
		stringOut = stringOut + substring + " ";
	});
	return stringOut;
};

let mining = [//item, value-multiplier, amount-multiplier.
	['minecraft:tuff', 1, 6], 
	['minecraft:calcite', 3, 8],
	['minecraft:deepslate', 1, 24], 
	['minecraft:deepslate', 2, 32], 
	['minecraft:raw_copper', 3, 5], 
	['minecraft:copper_ingot', 2, 6], 
	['minecraft:quartz', 1, 6], 
	['minecraft:quartz', 2, 9], 
	['minecraft:quartz', 3, 13], 
	['minecraft:raw_iron', 4, 2], 
	['minecraft:iron_ingot', 1, 3], 
	['minecraft:iron_block', 8, 1], 
	['minecraft:raw_gold', 8, 1], 
	['minecraft:diamond', 12, 1],
	['minecraft:diamond', 14, 1], 
	['minecraft:ancient_Debris', 32, 1],
	['minecraft:amethyst_shard', 4, 9]
]
let hunting = [// same as above
	['minecraft:rabbit_hide', 3, 1],
	['minecraft:scute', 20, 1],
	['minecraft:feather', 1, 4],
	['minecraft:leather', 1, 4],
	['minecraft:rabbit_foot', 8, 1],
	['minecraft:chicken', 1, 12],
	['minecraft:beef', 1, 8],
	['minecraft:porkchop', 1, 8],
	['minecraft:egg', 1, 16],
	['minecraft:turtle_egg', 10, 1],
	['minecraft:mutton', 1, 8],
	['quark:diamond_heart', 24, 1], //are stonelings even enabled?
	['minecraft:white_wool', 1, 32], //maybe
	['minecraft:honey_bottle', 4, 3],
	['minecraft:honeycomb_block', 3, 3]
]
let slaying = [// i am repeating comments.
	['minecraft:ender_pearl', 1, 6],
	['minecraft:bone', 1, 10],
	['minecraft:blaze_rod', 1, 4],
	['minecraft:wither_skeleton_skull', 8, 1],
	['tconstruct:necrotic_bone', 1, 10],
	['minecraft:spider_eye', 1, 4],
	['minecraft:gunpowder', 1, 6],
	['minecraft:slime_ball', 1, 3],
	['minecraft:shulker_shell', 10, 1],
	['minecraft:nautilus_shell', 20, 1],
	['quark:slime_in_a_bucket', 1, 1],
	['minecraft:rotten_flesh', 1, 16],
	['minecraft:string', 1, 8], //flax is a thing
	['minecraft:prismarine_crystals', 1, 2],
	['minecraft:prismarine_shard', 1, 4],
	['minecraft:phantom_membrane', 3, 1],
	['minecraft:ghast_tear', 3, 1],
	['minecraft:nether_star', 48, 1]
]
let farming = [
	['minecraft:wheat', 1, 5], 
	['minecraft:chorus_fruit', 1, 2], 
	['supplementaries:flax', 1, 3], 
	['minecraft:carrot', 1, 9], 
	['minecraft:potato', 1, 9], 
	['minecraft:apple', 1, 3], // villager trades; prb needs a nerf 
	['minecraft:glow_berries', 1, 16], 
	['minecraft:sweet_berries', 1, 16], 
	['minecraft:beetroot', 1, 4], 
	['minecraft:poisonous_potato', 3, 1], //maybe?
	['farmersdelight:rice_bag', 2, 1], 
	['minecraft:hay_block', 2, 1], 
	['farmersdelight:tomato', 1, 12], 
	['farmersdelight:cabbage', 1, 5], 
	['minecraft:bamboo', 1, 32], 
	['minecraft:sugar_cane', 1, 8], 
	['minecraft:melon_slice', 1, 16], 
	['minecraft:pumpkin', 3, 4], 
	['minecraft:melon', 3, 4],
	['minecraft:cocoa_beans', 1, 5],
	['minecraft:nether_wart', 1, 3],
	['minecraft:red_mushroom', 1, 6],
	['minecraft:brown_mushroom', 1, 6],
	['minecraft:warped_fungus', 1, 3],
	['minecraft:crimson_fungus', 1, 3]
]
let fishing = [
	['minecraft:tropical_fish_bucket', 8, 1], 
	['minecraft:tropical_fish', 6, 1], 
	['minecraft:pufferfish_bucket', 6, 1], 
	['minecraft:salmon_bucket', 2, 1], 
	['minecraft:pufferfish', 4, 1], 
	['minecraft:cod_bucket', 2, 1], 
	['minecraft:salmon', 1, 3], 
	['minecraft:cod', 1, 3], 
	['minecraft:glow_ink_sac', 3, 5], 
	['minecraft:ink_sac', 1, 3], 
	['minecraft:nautilus_shell', 20, 1],
	['minecraft:axolotl_bucket', 8, 1],
	['minecraft:fishing_rod', 1, 1]
]
let deforesting = [
	['minecraft:oak_log', 1, 32], 
	['minecraft:spruce_log', 1, 32], 
	['minecraft:birch_log', 1, 32], 
	['minecraft:jungle_log', 1, 32], 
	['minecraft:acacia_log', 1, 32], 
	['minecraft:dark_oak_log', 1, 32], 
	['tconstruct:greenheart_log', 1, 26], 
	['tconstruct:skyroot_log', 1, 26], 
	['tconstruct:bloodshroom_log', 1, 20], 
	['minecraft:warped_stem', 1, 26], 
	['minecraft:crimson_stem', 1, 26], 
	['integrateddynamics:menril_log', 1, 26] 
]
let cooking = [ //fd meals n stuff, too lazy rn
]

let collecting = [
	['quark:bottled_cloud', 5, 6], 
	['quark:golden_apple_crate', 40, 1], 
	['minecraft:end_crystal', 24, 1], 
	['minecraft:wither_rose', 15, 3], 
	['minecraft:beacon', 56, 1], 
	//['randomium:randomium', 63 , 1], //you can just dupe gold coins
	['minecraft:fire_charge', 16, 1], 
	['minecraft:experience_bottle', 5, 5], 
	['minecraft:writable_book', 2, 1], 
	['minecraft:name_tag', 5, 1], 
	['minecraft:bundle', 16, 1], 
	['minecraft:enchanted_golden_apple', 40, 1], 
	['forbidden_arcanus:arcane_gold_ingot', 24, 1], 
	['forbidden_arcanus:dragon_scale', 32, 1], 
	['minecraft:saddle', 16, 1], 
	['minecraft:glowstone', 2, 5]
]
let processing //needs to be done in actual pack
let magic //same as processing

let values = [ //multiplier, modifier (output-only)
	[1, 1],
	[1.5, 0],
	[2, -1],
	[2, 1],
	[2.5, 0],
	[3, 0],
	[3, 1],
	[3.5, 1],
	[3.7, 0],
	[4, -1]
]

onEvent('level.load', event => {
	if (event.level.getDimension() != 'minecraft:overworld') {return}
	if (global.cachedSeed == event.level.getSeed()) {return}
	global.cachedSeed = event.level.getSeed()
	global.seededRandom = new java("java.util.Random")(global.cachedSeed)

	//quest types
	assign(mining, values, global.seededRandom, "quests:mining_task")
	assign(farming, values, global.seededRandom, "quests:farming_task")
	assign(collecting, values, global.seededRandom, "quests:collecting_task")
	assign(deforesting, values, global.seededRandom, "quests:deforesting_task")
	assign(fishing, values, global.seededRandom, "quests:fishing_task")
	assign(hunting, values, global.seededRandom, "quests:hunting_task")
	assign(slaying, values, global.seededRandom, "quests:slaying_task")

	event.server.runCommandSilent('/reload')
})

onEvent('recipes', event => {
	let identifier
	global.questLists.forEach(array =>{
		if (array[0] == undefined) {array[0] = []}
		identifier = 0
		array[0].forEach(element =>{
			
			identifier++
			let silverOutput = Math.round(element[0][1]*element[1][0]+element[1][1])
			let itemAmount = Math.round(element[0][2]*element[1][0])
			let task = Item.of(array[1], '\{identifier:' + identifier.toString() + '\}').withName('§4§lQuest: §r§6Collect ' + itemAmount + capitalize(element[0][0].replace(/^.*\:/, ' ')))
			
			event.recipes.custommachinery.custom_machine("quests:quest_station", 20)
				.requireItem(task, "task_slot")
				.requireItem(Item.of(element[0][0].toLowerCase().replace(/ /g, '_'), itemAmount))
				.produceItem(Item.of("thermal:silver_coin", (silverOutput)))
				.produceItem(Item.of("thermal:silver_coin", taskCost))
				.requireEnergy(1000)
		})
	})
	//imports
	for (let i = 0; i < global.trades.length; i++) {
		let card = Item.of('trade:trade_card_' + global.trades[i]);
		global.transactions[i].forEach(trade =>{
			let input = Item.of(trade.in)
			let output = Item.of(trade.out)
			if (trade.in.includes("x ")) {
				input = Item.of(trade.in.replace(/^.*x /, ""), Number.parseInt(trade.in.slice(0, trade.in.indexOf("x"))))
			}
			if (trade.out.includes("x ")) {
				output = Item.of(trade.out.replace(/^.*x /, ""), Number.parseInt(trade.out.slice(0, trade.out.indexOf("x"))))
			}
			event.recipes.custommachinery.custom_machine("quests:quest_station", 20)
				.requireItem(card, "card_slot").chance(0)
				.requireItem(input, "input1")
				.produceItem(output, "output1")
				.requireEnergy(1000)
			event.custom({
				"type": "pneumaticcraft:amadron",
				"static": true,
				"input": {
					"type": "ITEM",
					"id": input.id,
					"amount": input.count
				},
				"output": {
					"type": "ITEM",
					"id": output.id,
					"amount": output.count
				},
				"level": 0
			})

		})
	}
	//task imports
	global.questLists.forEach(array =>{
		let task = array[1]
		let taskImport = Item.of(task.replace(/^.*\:/, "trade:").concat("_import"))
		event.recipes.custommachinery.custom_machine("quests:quest_station", 20)
			.requireItem(Item.of(taskImport), "task_slot").chance(0)
			.requireItem(Item.of("thermal:silver_coin", taskCost))
			.produceItem(Item.of(task)).chance(0)
			.lootTableOutput(task)
			.requireEnergy(1000)
		event.custom({
			"type": "pneumaticcraft:amadron",
			"static": true,
			"input": {
				"type": "ITEM",
				"id": "thermal:silver_coin",
				"amount": taskCost
			},
			"output": {
				"type": "ITEM",
				"id": task,
				"amount": 1
			},
			"level": 0
		})
	})
})

onEvent("item.tags", event =>{
	global.questLists.forEach(questType =>{
		event.add("quests:task_items", [questType[1], questType[1].replace(/^.*\:/, "trade:").concat("_import")])
	})
	global.trades.forEach(trade =>{
		event.add("trade:cards", "trade:trade_card_" + trade)
	})
})

onEvent('lootjs', event=>{
	global.questLists.forEach(questType =>{
		let lootEntries = []
		let identifier = 0
		questType[0].forEach(element => {
			identifier++
			let lootNbt = '\{identifier:' + identifier.toString() + '\}'
			let lootItem = LootEntry.of(questType[1])
			let requiredAmount = Math.round(element[0][2]*+element[1][0])
			let coinOutput = Math.round(element[0][1]*element[1][0]+element[1][1] + taskCost)
			lootItem.addNbt(lootNbt)
			lootItem.setName('§4§lQuest: §r§6Collect ' + requiredAmount + capitalize(element[0][0].replace(/^.*\:/, ' ')))
			lootItem.addLore('§7' + requiredAmount + capitalize(element[0][0].replace(/^.*\:/, ' ')) + ' §8 -> §7  ' + coinOutput + " Silver")
			lootEntries.push(lootItem)
		})
		event.addLootTableModifier(questType[1]).addWeightedLoot(lootEntries)
	})
})

onEvent('item.right_click', event =>{
	if (!event.item.hasTag("quests:task_items")) {return}
	if (event.item.id.includes("import")) {return}
	if (!event.item.nbt) {
		let itemId = event.item.id
		if (!event.player.creativeMode) {event.item.count--}
		event.server.runCommandSilent(`/loot give ${event.player.name.string} loot ${itemId}`)
		return
	}
	if (event.item.nbt.contains("identifier")) {
		global.questLists.forEach(questType =>{
			if (questType[1] != event.item.id) {return}
			let id = event.item.nbt.identifier - 1
			let reqItem = questType[0][id][0][0]
			let amtMultpl = questType[0][id][1][0]
			let reqAmt = Math.round(amtMultpl * questType[0][id][0][2])
			let silver = Math.round((amtMultpl * questType[0][id][0][1]) + questType[0][id][1][1] + taskCost)
			let currentAmt = event.player.inventory.count(Item.of(reqItem).ignoreNBT())
			if (currentAmt < reqAmt) {
				event.player.setStatusMessage("§7You need§r " + (reqAmt - currentAmt).toString() + " §7more§r " + capitalize(reqItem.replace(/^.*\:/, "")) + "§7to complete this Quest!")
				event.player.swingArm(MAIN_HAND)
				return
			}
			if (!event.player.crouching) {
				event.player.setStatusMessage("  §7'§rSneak + Rightclick§7'   to complete this Quest!")
				event.player.swingArm(MAIN_HAND)
				return
			}
			if (!event.player.creativeMode) {event.item.count--}
			let toTake = reqAmt
			while (toTake > 0) {
				let slotAmt = event.player.inventory.get(event.player.inventory.find(Item.of(reqItem).ignoreNBT())).count
				if (toTake <= slotAmt) {
					event.player.inventory.extract(event.player.inventory.find(Item.of(reqItem).ignoreNBT()), toTake, false)
					toTake = 0
					break
				}
				event.player.inventory.extract(event.player.inventory.find(Item.of(reqItem).ignoreNBT()), slotAmt, false)
				toTake -= slotAmt
			}
			event.player.giveInHand(Item.of("thermal:silver_coin", silver))
			event.player.setStatusMessage("§6Congrats on completing a Quest!")
			event.player.swingArm(MAIN_HAND)
		})
	}
})