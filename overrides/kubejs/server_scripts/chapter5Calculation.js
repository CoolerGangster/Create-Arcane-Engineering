onEvent('recipes', event => {
	function PCBMadness(A,B,C,D){
		event.recipes.createSequencedAssembly([
			"2x " + D,
		], B, [
			event.recipes.createDeploying(B, [B, A]),
			event.recipes.createDeploying(B, [B, C]),
		]).transitionalItem(B).loops(1)	
	}
	PCBMadness('kubejs:damaged_a','kubejs:damaged_b','kubejs:damaged_c','kubejs:b')
	PCBMadness('kubejs:damaged_b','kubejs:damaged_c','kubejs:damaged_d','kubejs:c')
	PCBMadness('kubejs:damaged_c','kubejs:damaged_d','kubejs:damaged_e','kubejs:d')
	PCBMadness('kubejs:damaged_d','kubejs:damaged_e','kubejs:damaged_f','kubejs:e')
	PCBMadness('kubejs:damaged_e','kubejs:damaged_f','kubejs:damaged_g','kubejs:f')
	PCBMadness('kubejs:damaged_f','kubejs:damaged_g','kubejs:damaged_a','kubejs:g')
	PCBMadness('kubejs:damaged_g','kubejs:damaged_a','kubejs:damaged_b','kubejs:a')
	  event.recipes.createMechanicalCrafting('kubejs:finalpcb', [
        'AAAAAAA',
		'BBBBBBB',
		'CCCCCCC',
		'DDDDDDD',
		'EEEEEEE',
		'FFFFFFF',
		'GGGGGGG'
      ], {
        A: 'kubejs:a',
		B: 'kubejs:b',
		C: 'kubejs:c',
		D: 'kubejs:d',
		E: 'kubejs:e',
		F: 'kubejs:f',
		G: 'kubejs:g'
      })
	let c = 0.15	;
	event.recipes.createCrushing([
		Item.of('kubejs:damaged_a').withChance(c),
		Item.of('kubejs:damaged_b').withChance(c),
		Item.of('kubejs:damaged_c').withChance(c),
		Item.of('kubejs:damaged_d').withChance(c),
		Item.of('kubejs:damaged_e').withChance(c),
		Item.of('kubejs:damaged_f').withChance(c),
		Item.of('kubejs:damaged_g').withChance(c),
	],'pneumaticcraft:printed_circuit_board')
})
