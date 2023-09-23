//Script by GhostyRex
onEvent("ponder.tag", (event) => {
      event.createTag("kubejs:pneumaticcraft", "pneumaticcraft:pressure_chamber_wall", "Pressure Chamber", "Creating the Pressure", [
        "pneumaticcraft:pressure_chamber_wall",
        "pneumaticcraft:assembly_controller",
        "pneumaticcraft:pressure_tube",
        "pneumaticcraft:safety_tube_module"
    ]);
});

onEvent("ponder.registry", (event) => {
    event.create(["pneumaticcraft:pressure_chamber_wall","pneumaticcraft:pressure_chamber_interface","pneumaticcraft:pressure_chamber_valve", "pneumaticcraft:pressure_chamber_glass"]).scene("pressure_chamber", "Creating a Pressure Chamber", "kubejs:pneumaticponder1", (scene, util) => {
		scene.showBasePlate()
    scene.idle(10)
    for (let x = 1; x < 4; x++) {
        for (let z = 1; z < 4; z++) {
           scene.world.showSection([x, 1, z], Facing.DOWN);
           scene.idle(2)
       }
       scene.idle(2)
    }
    scene.text(80, "A pressure chamber is created with pressure chamber blocks", [2,1,2]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    for (let x = 1; x < 4; x++) {
      for (let z = 1; z < 4; z++) {
         scene.world.showSection([x, 2, z], Facing.DOWN);
         scene.idle(2)
     }
     scene.idle(2)
  }

   for (let x = 1; x < 4; x++) {
     for (let z = 1; z < 4; z++) {
        scene.world.showSection([x, 3, z], Facing.DOWN);
        scene.idle(2)
     }
    scene.idle(2)
  }
    scene.text(80, "A pressure chamber is used to compress items for various recipes", [2,1,2]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.text(100, "The chamber requires a valve that allows air to enter/leave the pressure chamber", [2.5,2.5,1]).placeNearTarget().attachKeyFrame();
    scene.idle(110)
    scene.rotateCameraY(90)
    scene.idle(20)
    scene.text(90, "Two pressure chamber interfaces are required. One facing inside the chamber as the input...", [3,2,3]).placeNearTarget().attachKeyFrame();
    scene.idle(110)
    scene.rotateCameraY(180)
    scene.idle(20)
    scene.text(60, "And one facing outside the chamber as the output", [1.5,2,2]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.rotateCameraY(-90)
    scene.idle(20)
    scene.text(60, "Pressure chamber glass is used for decoration", [1,1,2]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.rotateCameraY(180)
    scene.idle(20)
    scene.text(60, "Interfaces/valves cannot be placed in corners of the chamber", [2.5,2.5,1]).placeNearTarget().attachKeyFrame();
    scene.idle(80)

    scene.world.showSection([4, 2, 2], Facing.DOWN);
    scene.world.showSection([0, 2, 2], Facing.DOWN);
    scene.idle(20)
    scene.text(80, "Input items into the interface through a hopper or modded transportation", [4.5,3,2]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.text(80, "Compressed items will automatically output into an inventory", [0,2.5,2]).placeNearTarget().attachKeyFrame();
    scene.idle(100)

    scene.world.showSection([2, 2, 0], Facing.DOWN);
    scene.world.showSection([1, 2, 0], Facing.DOWN);
    scene.idle(20)
    scene.text(80, "Connect pressure tubes to the valve to connect to various pressure machines", [2.5,2.5,0.5]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.text(80, "Machines such as compressors can supply/take air from the chamber", [1.5,2.5,0]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.text(60, "Right click the pressure chamber to see its interface", [2,3,2]).placeNearTarget().attachKeyFrame();
    scene.showControls(60, [2,4,2], "down").rightClick()
    scene.idle(80)
    scene.text(60, "The chamber will diagnose problems as well as provide statistics", [2,3,2]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(70, "Upgrades such as the volume upgrade can be added inside the interface", [2,3,2]).placeNearTarget().attachKeyFrame();
    scene.showControls(70, [2,4,2], "down").rightClick().withItem("pneumaticcraft:volume_upgrade")
    scene.idle(90)
  })
  .scene("chamber_size", "Pressure Chamber Sizes", "kubejs:pneumaticponder2", (scene, util) => {
    scene.showStructure()
    scene.idle(20)
    scene.text(60, "Pressure chambers can be three different sizes", [5,1,5]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(80, "3x3x3", [8,4,8]).placeNearTarget().attachKeyFrame()
    scene.text(80, "4x4x4", [8,4.5,2]).placeNearTarget().attachKeyFrame()
    scene.text(80, "5x5x5", [2,5.5,8]).placeNearTarget().attachKeyFrame()
    scene.idle(100)
    scene.text(90, "Because each pressure chamber recipe uses 1000 mL of air, it may be convenient to have a larger chamber", [5,1,5]).placeNearTarget().attachKeyFrame();
    scene.idle(110)
    scene.text(60, "Larger pressure chambers can hold a larger volume of air", [5,1,5]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(80, "16,000 mL", [8,4,8]).placeNearTarget().attachKeyFrame()
    scene.text(80, "128,000 mL", [8,4.5,2]).placeNearTarget().attachKeyFrame()
    scene.text(80, "432,000 mL", [2,5.5,8]).placeNearTarget().attachKeyFrame()
    scene.idle(100)
    scene.text(60, "Different chambers sizes also differ in max pressure", [5,1,5]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "Exceeding max pressure will explode the chamber", [5,1,5]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(80, "5 bar", [8,4,8]).placeNearTarget().attachKeyFrame()
    scene.text(80, "7 bar", [8,4.5,2]).placeNearTarget().attachKeyFrame()
    scene.text(80, "7 bar", [2,5.5,8]).placeNearTarget().attachKeyFrame()
    scene.idle(100)
    scene.text(70, "A security upgrade will release air when nearing the danger zone", [5,1,5]).placeNearTarget().attachKeyFrame();
    scene.showControls(70, [2,6,8], "down").rightClick().withItem("pneumaticcraft:security_upgrade")
    scene.idle(90)
  })
  
  event.create(["pneumaticcraft:pressure_tube","pneumaticcraft:reinforced_pressure_tube","pneumaticcraft:advanced_pressure_tube"]).scene("pressure_tubes", "Pressure in Tubes", "kubejs:pneumaticponder3", (scene, util) => {
    scene.showBasePlate()
    scene.idle(20)
    for (let z = 1; z < 6; z++) {
      scene.world.showSection([5, 1, z], Facing.DOWN);
      scene.idle(2)
    }
    scene.text(70, "Pressure tubes move air between compressors and machines", [5,2,3]).placeNearTarget().attachKeyFrame();
    scene.idle(90)
    scene.text(60, "Air moves in the direction where pressure is lower", [5,2,3]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.world.showSection([5, 1, 0], Facing.DOWN);
    scene.idle(10)
    scene.text(60, "Example: An air compressor supplies air here", [5,2,0]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "...and the air will distribute through the tube", [5,2,5]).placeNearTarget().attachKeyFrame();
    scene.idle(90)
    scene.text(70, "Open tubes will leak air, but can be closed by using a wrench", [5,2,5]).placeNearTarget().attachKeyFrame();
    scene.showControls(70, [5,2,5], "down").rightClick().withItem("create:wrench")
    scene.idle(90)
    scene.text(60, "A pneumatic wrench also works", [5,2,5]).placeNearTarget().attachKeyFrame();
    scene.showControls(50, [5,2,5], "down").rightClick().withItem("pneumaticcraft:pneumatic_wrench")
    scene.idle(80)
    scene.text(60, "Pressure tubes have a maximum pressure", [5,2,3]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    scene.text(60, "Exceeding this pressure will explode the tube", [5,2,3]).placeNearTarget().attachKeyFrame();
    scene.idle(80)
    for (let z = 1; z < 6; z++) {
      scene.world.showSection([3, 1, z], Facing.DOWN);
      scene.idle(2)
    }
    scene.world.showSection([4, 1, 3], Facing.DOWN);
    scene.idle(2)
    for (let z = 1; z < 6; z++) {
      scene.world.showSection([1, 1, z], Facing.DOWN);
      scene.idle(2)
    }
    scene.world.showSection([2, 1, 3], Facing.DOWN);
    scene.idle(20)
    scene.text(70, "Reinforced and advanced tubes have a higher pressure threshold", [3,2,3]).placeNearTarget().attachKeyFrame();
    scene.idle(90)
    scene.text(80, "5 bar", [5,2,3]).placeNearTarget().attachKeyFrame();
    scene.text(80, "10 bar", [3,2,3]).placeNearTarget().attachKeyFrame();
    scene.text(80, "20 bar", [1,2,3]).placeNearTarget().attachKeyFrame();
    scene.idle(100)
    scene.world.showSection([1, 1, 6], Facing.DOWN);
    scene.text(70, "Example: A compressor that provides 20 bar pressure...", [1,2,6]).placeNearTarget().attachKeyFrame();
    scene.idle(90)
    scene.text(50, "...will cause this tube to explode first", [5,2,3]).placeNearTarget().attachKeyFrame();
    scene.idle(70)
    scene.text(70, "...and will cause this tube to explode next as pressure builds up further", [3,2,3]).placeNearTarget().attachKeyFrame();
    scene.idle(90)
    })
    
    event.create(["pneumaticcraft:safety_tube_module","pneumaticcraft:pressure_gauge_module","pneumaticcraft:flow_detector_module","pneumaticcraft:air_grate_module","pneumaticcraft:regulator_tube_module","pneumaticcraft:charging_module","pneumaticcraft:logistics_module","pneumaticcraft:redstone_module","pneumaticcraft:vacuum_module"]).scene("tube_modules", "Applying Modules to Tubes", "kubejs:pneumaticponder4", (scene, util) => {
      scene.showBasePlate()
      scene.idle(20)
      for (let z = 1; z < 4; z++) {
        scene.world.showSection([5, 1, z], Facing.DOWN);
        scene.idle(2)
      }
      scene.idle(20)
      scene.text(70, "Modules can be added to tubes to change their behaviour", [5,2,1]).placeNearTarget().attachKeyFrame();
      scene.idle(90)
      scene.text(80, "Right click with desired module on a tube to apply it", [5,2,1]).placeNearTarget().attachKeyFrame();
      scene.showControls(80, [5,2.5,1], "down").rightClick().withItem("pneumaticcraft:air_grate_module")
      scene.idle(100)
      scene.text(80, "The air grate is very effective at cooling down heat sinks", [5,2,1]).placeNearTarget().attachKeyFrame();
      scene.idle(100)
      scene.text(80, "And it can repel/attract entities depending on positive/negative pressure", [5,2,1]).placeNearTarget().attachKeyFrame();
      scene.idle(100)
      for (let z = 4; z < 7; z++) {
        scene.world.showSection([5, 1, z], Facing.DOWN);
        scene.idle(2)
      }
      scene.idle(20)
      scene.text(80, "The safety tube module releases air when nearing maximum pressure", [5,2,5]).placeNearTarget().attachKeyFrame();
      scene.idle(100)
      for (let z = 0; z < 4; z++) {
        scene.world.showSection([3, 1, z], Facing.DOWN);
        scene.idle(2)
      }
      scene.idle(20)
      scene.text(90, "The vacuum tube module takes pressure at the wide green end and moves it to the narrow red end", [3,2,1]).placeNearTarget().attachKeyFrame();
      scene.idle(110)
      scene.text(60, "You can achieve 'negative' pressure using the vacuum", [3,2,1]).placeNearTarget().attachKeyFrame();
      scene.idle(80)
      for (let z = 4; z < 7; z++) {
        scene.world.showSection([3, 1, z], Facing.DOWN);
        scene.idle(2)
      }
      scene.idle(20)
      scene.text(70, "The regulator caps the amount of pressure allowed through", [3,2,5]).placeNearTarget().attachKeyFrame();
      scene.idle(90)
      for (let z = 3; z < 7; z++) {
        scene.world.showSection([1, 1, z], Facing.DOWN);
        scene.idle(2)
      }
      scene.idle(20)
      scene.text(80, "The charging module charges items in the inventory its pointing at", [1,2,4]).placeNearTarget().attachKeyFrame();
      scene.idle(100)
      for (let z = 0; z < 3; z++) {
        scene.world.showSection([1, 1, z], Facing.DOWN);
        scene.idle(2)
      }
      scene.idle(20)
      scene.text(80, "A module expansion card can be applied to modules to allow advanced settings", [1,2,1]).placeNearTarget().attachKeyFrame();
      scene.showControls(80, [1,2.5,1], "down").rightClick().withItem("pneumaticcraft:module_expansion_card")
      scene.idle(100)
      scene.text(90, "Example: A regulator is capped at 4.9 bar but can be customized with an expansion card", [1,2,1]).placeNearTarget().attachKeyFrame();
      scene.idle(110)
    })

    event.create(["pneumaticcraft:assembly_controller","pneumaticcraft:assembly_laser","pneumaticcraft:assembly_platform","pneumaticcraft:assembly_io_unit_export","pneumaticcraft:assembly_io_unit_import","pneumaticcraft:assembly_drill"]).scene("assembly_line", "Assembly in Pneumatics", "kubejs:pneumaticponder5", (scene, util) => {
      scene.showStructure()
      scene.idle(20)
      scene.text(70, "This is an assembly line. It allows for specific recipes", [2,1,2]).placeNearTarget().attachKeyFrame();
      scene.idle(90)
      scene.text(80, "For the assembly to successfully work, each component must be in contact", [2,1,2]).placeNearTarget().attachKeyFrame();
      scene.idle(100)
      scene.text(70, "Place required program for a recipe in the controller", [3,1.5,2]).placeNearTarget().attachKeyFrame();
      scene.idle(90)
      scene.text(80, "The drill will work with programs that require the drill", [2,1.5,1]).placeNearTarget().attachKeyFrame();
      scene.idle(100)
      scene.text(70, "The laser works in the same way", [1,1.5,2]).placeNearTarget().attachKeyFrame();
      scene.idle(90)
      scene.text(110, "The importer and exporter are required to input/output items and will take from nearby inventories", [2,1.5,3]).placeNearTarget().attachKeyFrame();
      scene.idle(130)
      scene.text(70, "The platform is the station where programs will be completed", [2,1.5,2]).placeNearTarget().attachKeyFrame();
      scene.idle(90)
    })
});