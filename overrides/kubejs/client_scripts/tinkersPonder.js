//Script by GhostyRex
onEvent("ponder.tag", (event) => {
      event.createTag("kubejs:smeltery_foundry", "tconstruct:smeltery_controller", "Tinkers Forges", "Creating the Smeltery and Foundry", [
        "tconstruct:smeltery_controller",
        "tconstruct:seared_faucet",
        "tconstruct:seared_channel",
        "tconstruct:seared_basin",
        "tconstruct:seared_table",
        "tconstruct:seared_duct",
        "tconstruct:foundry_controller"
    ]);
});

onEvent("ponder.registry", (event) => {
    event.create("tconstruct:smeltery_controller").scene("smeltery_intro", "Creating the Smeltery", "kubejs:tinkersponder1", (scene, util) => {
	scene.showBasePlate()
    scene.idle(10)
    for (let x = 4; x < 7; x++) {
        for (let z = 3; z < 6; z++) {
           scene.world.showSection([x, 1, z], Facing.DOWN);
           scene.idle(2)
       }
       scene.idle(2)
    }
    scene.text(80, "The smeltery is made out of seared materials", [5,1,4]).placeNearTarget().attachKeyFrame();
    scene.idle(80),
    scene.world.showSection([4, 2, 2], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([5, 2, 2], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([6, 2, 2], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([7, 2, 3], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([7, 2, 4], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([7, 2, 5], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([6, 2, 6], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([5, 2, 6], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([4, 2, 6], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([3, 2, 5], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([3, 2, 4], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([3, 2, 3], Facing.DOWN);
    scene.idle(2)
    
    scene.world.showSection([4, 3, 2], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([5, 3, 2], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([6, 3, 2], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([7, 3, 3], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([7, 3, 4], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([7, 3, 5], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([6, 3, 6], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([5, 3, 6], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([4, 3, 6], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([3, 3, 5], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([3, 3, 4], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([3, 3, 3], Facing.DOWN);
    scene.idle(30)
    scene.world.replaceBlocks([4, 2, 2, 4, 3, 2], "tconstruct:seared_glass", true);
    scene.world.replaceBlocks([6, 2, 2, 6, 3, 2], "tconstruct:seared_glass", true);
    scene.idle(20)
    scene.text(90, "Only breaking the smeltery controller loses materials inside the smeltery", [4,3,2]).placeNearTarget().attachKeyFrame();
	scene.idle(110);
    scene.text(70, "These seared glass blocks are purely cosmetic", [4,3,2]).placeNearTarget().attachKeyFrame();
	scene.idle(90);

	scene.text(80, "Every smeltery requires a smeltery controller to function", [5,2,2]).placeNearTarget().attachKeyFrame();
	scene.idle(100);
    scene.text(80, "Placing certain items inside such as ore will smelt them into fluid", [5,2,2]).placeNearTarget().attachKeyFrame();
    scene.showControls(60, [5,2.5,2], "down").rightClick()
	scene.idle(100);
    scene.text(80, "A seared fuel gauge is used to supply the smeltery with fuel", [5,3,2]).placeNearTarget().attachKeyFrame();
	scene.idle(100);
    scene.showControls(60, [5,3.5,2], "down").rightClick().withItem("lava_bucket")
    scene.text(80, "Fuel the smeltery with energy fluids such as lava", [5,3,2]).placeNearTarget().attachKeyFrame();
	scene.idle(100);
    scene.text(80, "Seared drains allow fluids to be transferred from/to the smeltery", [3,3,4]).placeNearTarget().attachKeyFrame();
	scene.idle(100);

    scene.world.showSection([2, 3, 4], Facing.EAST);
    scene.idle(2)
    scene.world.showSection([2, 2, 4], Facing.EAST);
    scene.text(120, "Use seared faucets to pour fluid onto a table/basin/spout and other fluid containers", [2,4,4]).placeNearTarget().attachKeyFrame();
    scene.showControls(60, [2,4.5,4], "down").rightClick()
    scene.idle(40)
    scene.world.replaceBlocks([2, 2, 4, 2, 2, 4], "tconstruct:seared_table", true);
    scene.idle(40)
    scene.world.replaceBlocks([2, 2, 4, 2, 2, 4], "create:spout", true);
	scene.idle(40);
    scene.world.showSection([2, 3, 5], Facing.EAST);
    scene.text(70, "Faucets will pour automatically if powered with redstone", [2, 4, 5]).placeNearTarget().attachKeyFrame();
    scene.idle(90)
    scene.text(140, "Faucets will pour the fluid at the bottom of the smeltery. Right click on fluids inside the smeltery controller interface to change a fluid to the bottom.", [2,4,4]).placeNearTarget().attachKeyFrame();
    scene.idle(160)

    scene.world.showSection([2, 3, 3], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([1, 3, 3], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([0, 3, 3], Facing.DOWN);
    scene.text(80, "A create mechanical pump can input/output fluids from a drain", [2, 3, 3]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    })
    .scene("smeltery_sizing", "Smeltery Sizing", "kubejs:tinkersponder2", (scene, util) => {
    scene.showStructure()   
    scene.idle(20)
    scene.text(40, "Smelteries can be various sizes", [5, 4, 4]).placeNearTarget().attachKeyFrame();
    scene.idle(60)
    scene.text(60, "1x1", [8, 4, 1]).placeNearTarget().attachKeyFrame();
    scene.text(60, "2x2", [5, 4, 4]).placeNearTarget().attachKeyFrame();
    scene.text(60, "3x3", [2, 4, 9]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "The max smeltery size is 14x14 and height of 64", [5, 4, 4]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "Larger smelteries have less fuel efficiency", [2, 4, 9]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    });

    event.create(["tconstruct:seared_faucet","tconstruct:seared_channel","tconstruct:scorched_faucet","tconstruct:scorched_channel"]).scene("faucet_channel", "Pouring Fluids", "kubejs:tinkersponder3", (scene, util) => {
    scene.showStructure()  
    scene.idle(20)
    scene.text(60, "Faucets can pour fluids from various containers", [3, 2, 4]).placeNearTarget().attachKeyFrame();
    scene.showControls(60, [3,3,3], "down").rightClick()
    scene.idle(80)
    scene.text(60, "Power faucets with redstone to keep it constantly pouring", [3, 2, 4]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    })
    .scene("seared_channel", "Combine With Channels", "kubejs:tinkersponder4", (scene, util) => {
    scene.showStructure()  
    scene.idle(20)
    scene.text(80, "Channels can distribute fluid in multiple directions. Use a faucets to pour onto channels", [3, 2.5, 2]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.text(50, "Right click channels to change flow of direction.", [3, 2.5, 2]).placeNearTarget().attachKeyFrame();
    scene.idle(70)
    scene.text(90, "Example: Right clicking in the middle of the channel will allow flow downward", [6, 2.5, 3]).placeNearTarget().attachKeyFrame();
    scene.showControls(90, [6,3,3], "down").rightClick()
    scene.idle(110)
    scene.text(70, "Channels can distribute fluid into other channels", [6, 2.5, 3]).placeNearTarget().attachKeyFrame();
    scene.idle(90)
    })

    event.create(["tconstruct:seared_basin","tconstruct:seared_table","tconstruct:scorched_table","tconstruct:scorched_basin"]).scene("basin_table", "Using Basins and Tables", "kubejs:tinkersponder5", (scene, util) => {
    scene.showBasePlate() 
    scene.world.showSection([1, 2, 3], Facing.DOWN);
    scene.world.showSection([3, 2, 3], Facing.DOWN);
    scene.idle(20)
    scene.text(60, "Tables and basins are used for casting fluids", [3, 2, 3]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "Use a faucet or channel to cast fluids", [1, 3.5, 3]).placeNearTarget().attachKeyFrame();
    scene.world.showSection([3, 3, 3], Facing.DOWN);
    scene.world.showSection([2, 3, 3], Facing.DOWN);
    scene.world.showSection([1, 3, 3], Facing.DOWN);
    scene.idle(80)
    scene.text(80, "Placing items inside a basin or table can result in different recipes when casting", [1, 2.5, 3]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.text(70, "This is an ingot cast. It will mold certain fluids into an ingot", [1, 3, 3]).placeNearTarget().attachKeyFrame();
    scene.idle(90)
    scene.world.showSection([4, 2, 3], Facing.DOWN);
    scene.world.showSection([4, 3, 3], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([3, 1, 3], Facing.DOWN);
    scene.world.showSection([3, 1, 2], Facing.DOWN);
    scene.text(60, "Hoppers can be used to automatically input items...", [4, 2, 3]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "...and automatically output results", [3, 1, 3]).placeNearTarget().attachKeyFrame();
    scene.idle(80)

    scene.world.showSection([1, 1, 2], Facing.EAST);
    scene.idle(2)
    scene.world.showSection([1, 1, 3], Facing.EAST);
    scene.idle(2)
    scene.world.showSection([1, 1, 4], Facing.EAST);
    scene.idle(2)
    scene.world.showSection([0, 1, 2], Facing.EAST);
    scene.idle(2)
    scene.world.showSection([1, 2, 2], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([1, 2, 4], Facing.DOWN);
    scene.idle(20)
    scene.text(80, "Create funnels and other methods of transportation are also compatible", [1, 2, 2]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    })
    .scene("scorched_table_basin", "Scorched Table and Basin Differences", "kubejs:tinkersponder7", (scene, util) => {
    scene.showStructure()
    scene.text(60, "Seared tables and basins can not accept fluid without a cast", [3.5, 1.5, 3.5]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "A gold platform in a basin acts as an empty cast", [5, 2, 3]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "Gold bars on a table acts as an empty cast", [3, 2, 3]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(80, "Scorched and seared basins/tables are compatible with both the foundry and the smeltery", [3.5, 1.5, 3.5]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    })

    event.create("tconstruct:foundry_controller").scene("foundry", "Creating the Foundry", "kubejs:tinkersponder6", (scene, util) => {
    scene.showBasePlate() 
    scene.idle(20)
    for (let x = 2; x < 7; x++) {
        for (let z = 2; z < 7; z++) {
           scene.world.showSection([x, 1, z], Facing.DOWN);
           scene.idle(2)
       }
       scene.idle(2)
    }
    scene.text(70, "The foundry is made out of scorched materials", [4.5, 1, 4.5]).placeNearTarget().attachKeyFrame();
    scene.idle(90)
    scene.text(80, "Unlike the smeltery, it requires scorched blocks in its corners", [2.5, 1, 2.5]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.showBasePlate() 
    for (let x = 2; x < 7; x++) {
        for (let z = 2; z < 7; z++) {
            for (let y = 2; y < 4; y++) {
                scene.world.showSection([x, y, z], Facing.DOWN);
                scene.idle(1)
            }
        scene.idle(1)
       }
       scene.idle(1)
    }
    scene.text(80, "Like the smeltery, the foundry smelts items and can pour fluids", [4.5, 3, 4.5]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.text(60, "However, the foundry has a few differences", [4.5, 3, 4.5]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(80, "1. It can hold a larger amount of fluid than a smeltery", [4.5, 3, 4.5]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.text(60, "2. It can not alloy fluids", [4.5, 3, 4.5]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(80, "3. Smelting materials such as ore will result in byproduct such as extra ore", [4.5, 3, 4.5]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.text(90, "4. Smelting items can give multiple products such as netherite tools giving diamonds and netherite back", [4.5, 3, 4.5]).placeNearTarget().attachKeyFrame();
    scene.idle(110)
    scene.world.showSection([1, 2, 3], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([1, 2, 4], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([1, 2, 5], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([1, 3, 3], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([1, 3, 4], Facing.DOWN);
    scene.idle(2)
    scene.world.showSection([1, 3, 5], Facing.DOWN);
    scene.idle(2)
    scene.text(100, "Scorched and seared basins/tables/faucets/channels are compatible with both the foundry and the smeltery", [1, 2.5, 5]).placeNearTarget().attachKeyFrame();
    scene.idle(120)
    })

    event.create(["tconstruct:seared_chute","tconstruct:scorched_chute","tconstruct:seared_duct","tconstruct:scorched_duct"]).scene("chute_duct", "Chutes and Ducts", "kubejs:tinkersponder8", (scene, util) => {
    scene.showStructure()
    scene.idle(20)
    scene.text(60, "A hopper can directly input items into a controller", [2.5, 2, 2.5]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "However, a chute can be used to input items as well", [3.5, 3, 2.5]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "A duct can filter fluid input/output", [2, 2.5, 3]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(90, "Place a bucket or can filled with fluid inside the duct to filter that fluid", [2, 3, 3]).placeNearTarget().attachKeyFrame();
    scene.showControls(90, [2, 3.5, 3], "down").rightClick().withItem("tconstruct:molten_iron_bucket")
    scene.idle(110)
    })

});