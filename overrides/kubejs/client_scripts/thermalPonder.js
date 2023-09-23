//Script by GhostyRex
onEvent("ponder.tag", (event) => {
	event.createTag("kubejs:thermal", "thermal:machine_furnace", "Electric Machines", "Electric Machines", [
        "thermal:machine_furnace",
		"thermal:device_tree_extractor"
    ]);
})

onEvent("ponder.registry", (event) => {
	event.create(["#thermal:machines"]).scene("thermal_tech", "Electric Machines", "kubejs:thermalponder1", (scene, util) => {
		scene.showBasePlate()
		scene.idle(20)
		scene.world.showSection([1, 1, 1], Facing.DOWN);
		scene.idle(10)
		scene.text(80, "This is a thermal machine. It allows specific automation/processing", [1,1.5,1]).placeNearTarget().attachKeyFrame();
      	scene.idle(100)
		scene.showControls(70, [1,2.5,1], "down").rightClick()
		scene.text(70, "Open the menu of the machine", [1,1.5,1]).placeNearTarget().attachKeyFrame();
      	scene.idle(90)
		scene.text(100, "There are various settings inside but the key ones are in the configuration tab", [1,1.5,1]).placeNearTarget().attachKeyFrame();
      	scene.idle(120)
		scene.text(150, "Enable auto-input/auto-output as it is the most convenient option. This makes it so the machine will output/input items like a hopper from specific faces", [1,1.5,1]).placeNearTarget().attachKeyFrame();
      	scene.idle(170)
		scene.text(130, "On the right there are faces of the machine. Click them to change to input, output, or input/output", [1,1.5,1]).placeNearTarget().attachKeyFrame();
      	scene.idle(150)
		scene.text(100, "Exit the GUI to view your changes of input/output faces on the machine", [1,1.5,1]).placeNearTarget().attachKeyFrame();
      	scene.idle(120)
		scene.text(60, "This is an input face", [1,1.5,1.5]).placeNearTarget().attachKeyFrame();
      	scene.idle(80)
		scene.world.showSection([0, 1, 1], Facing.DOWN);
		scene.idle(10)
		scene.text(150, "Machines require electric energy. This one is powered by a connector connected to an energy source. A dynamo or electric motor with direct contact will also work", [1,1.5,1.5]).placeNearTarget().attachKeyFrame();
      	scene.idle(170)
		scene.text(80, "If this face was not an input face, energy would not enter the machine", [1,1.5,1.5]).placeNearTarget().attachKeyFrame();
      	scene.idle(100)
		scene.rotateCameraY(-90)
		scene.idle(30)
		scene.world.showSection([1, 1, 2], Facing.DOWN);
		scene.idle(20)
		scene.text(80, "Some machines require fluid input. Just like energy, must be an input face", [1.5,1.5,2]).placeNearTarget().attachKeyFrame();
      	scene.idle(110)
		scene.rotateCameraY(-90)
		scene.idle(30)
		scene.text(160, "This is an input/output face. It will output completed recipes and input required ingredients. Most useful for recipes that require an input that is also outputted by the machine", [2,1.5,1.5]).placeNearTarget().attachKeyFrame();
      	scene.idle(180)
		scene.world.showSection([2, 1, 1], Facing.DOWN);
		scene.idle(30)
		scene.rotateCameraY(-180)
		scene.idle(30)
		scene.text(70, "This is an output face. It will only output completed recipes", [1.5,2,1.5]).placeNearTarget().attachKeyFrame();
      	scene.idle(90)
	})

	event.create(["thermal:device_tree_extractor"]).scene("thermal_extrr", "Extractor", "kubejs:thermalponder2", (scene, util) => {
		scene.showStructure()
		scene.idle(20)
		scene.text(70, "This is an arboreal extractor. It extracts fluids from trees", [4,1.5,3]).placeNearTarget().attachKeyFrame();
		scene.idle(90)
		scene.text(120, "For it to work, it must be placed at the bottom of a tree. Some logs from the bottom of the tree may need to be removed", [4,1.5,3]).placeNearTarget().attachKeyFrame();
		scene.idle(140)
		scene.text(80, "The tree must be living. Either naturally spawning or grown from a sapling", [4,4,4]).placeNearTarget().attachKeyFrame();
		scene.idle(100)
		scene.text(80, "Breaking leaves or logs from the tree may cause the arboreal extractor to stop working", [4,4,4]).placeNearTarget().attachKeyFrame();
		scene.idle(100)
		scene.text(70, "Extract fluid from the extractor using a pump or other methods", [4,1.5,3]).placeNearTarget().attachKeyFrame();
		scene.idle(90)
		scene.text(70, "Multiple extractors can be placed around a tree log", [4,1.5,3]).placeNearTarget().attachKeyFrame();
		scene.idle(90)
	})
})
	