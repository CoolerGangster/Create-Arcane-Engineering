onEvent('recipes', event => {
    let cast_block = (fluid, item) => {
		event.custom({
			"type": "tconstruct:casting_basin",
			"fluid": { "name": fluid, "amount": 1296 },
			"result": { "item": item },
			"cooling_time": 150
		})
	}
    event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": MC('redstone_block')
		},
		"result": {
			"fluid": TE('redstone'),
			"amount": 900
		},
		"temperature": 500,
		"time": 90
	});
    event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": MC('redstone')
		},
		"result": {
			"fluid": TE('redstone'),
			"amount": 100
		},
		"temperature": 300,
		"time": 10
	});
    event.custom({
        "type": "tconstruct:casting_basin",
        "fluid": {
          "name": TE('redstone'),
          "amount": 900
        },
        "result": MC('redstone_block'),
        "cooling_time": 225
    });
	event.custom({
        "type": "tconstruct:entity_melting",
        "entity": {
            "types": [
                "quark:wraith",
                "minecraft:vex"
            ]
        },
        "result": {
            "fluid": "kubejs:liquid_resent",
            "amount": 10
        },
        "damage": 0
    });
	event.custom({
        "type": "tconstruct:entity_melting",
        "entity": {
            "types": [
                "create:carriage_contraption",
                "create:contraption",
				"create:gantry_contraption",
				"create:stationary_contraption"
            ]
        },
        "result": {
            "fluid": "kubejs:inertia_essence",
            "amount": 10
        },
        "damage": 0
    });	
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
		  "tag": "forge:tar"
		},
		"result": {
		  "fluid": "kubejs:superheated_anthracene",
		  "amount": 144	
		},	
		"temperature": 1400,
		"time": 400
	  })
	  event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
		  "item": "kubejs:runic_tablet"
		},
		"cast_consumed": true,
		"fluid": {
		  "name": "kubejs:source",
		  "amount": 200	
		},
		"result": "ars_nouveau:source_gem",
		"cooling_time": 100
	  }
	  )
	  event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
		  "tag": "forge:nuggets"
		},
		"cast_consumed": true,
		"fluid": {
		  "name": "tconstruct:molten_gold",
		  "amount": 90	
		},
		"result": "tconstruct:nugget_cast",
		"cooling_time": 40
	  }
	  )
	  
	event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
		  "name": "thermal:refined_fuel",
		  "amount": 75
		},
		"duration": 300,
		"temperature": 1900
	  }

	)    
})