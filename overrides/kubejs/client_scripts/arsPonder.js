//Script by GhostyRex
onEvent("ponder.tag", (event) => {
	event.createTag("kubejs:ars_nouveau", "ars_nouveau:enchanting_apparatus", "Ars Magic", "Ars Nouveau Recipes", [
        "ars_nouveau:enchanting_apparatus"
    ]);
})

onEvent("ponder.registry", (event) => {
	event.create(["ars_nouveau:enchanting_apparatus","ars_nouveau:imbuement_chamber","ars_nouveau:arcane_core","ars_nouveau:arcane_pedestal"]).scene("ars_recipe", "Ars Nouveau Recipes", "kubejs:arsponder1", (scene, util) => {
		scene.showStructure()
		scene.idle(20)
		scene.text(80, "Ars Nouveau offers magical recipes using magic catalysts", [1,1,1]).placeNearTarget().attachKeyFrame();
     	scene.idle(100)
		scene.text(100, "The enchanting apparatus requires a core underneathe it, while an imbuement chamber does not", [1,2.5,1]).placeNearTarget().attachKeyFrame();
     	scene.idle(120)
		scene.text(110, "Place recipe ingredients in pedestals one block from the catalyst (enchanting apparatus in this case)", [1,1.5,0]).placeNearTarget().attachKeyFrame();
     	scene.idle(130)
		scene.text(60, "Place middle ingredient in the catalyst", [1,2.5,1]).placeNearTarget().attachKeyFrame();
     	scene.idle(80)
		scene.text(70, "The recipe will begin, but may require source nearby", [1,2.5,1]).placeNearTarget().attachKeyFrame();
     	scene.idle(90)
		scene.text(100, "The enchanting apparatus consumes materials in pedestals while the imbuement chamber does not", [1,2.5,1]).placeNearTarget().attachKeyFrame();
     	scene.idle(110)
	})
})
	