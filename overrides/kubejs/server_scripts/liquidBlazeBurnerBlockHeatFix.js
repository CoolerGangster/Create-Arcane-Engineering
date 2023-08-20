onEvent('recipes', event => {
    event.custom({
        "type": "pneumaticcraft:heat_properties",
        "block": "createaddition:liquid_blaze_burner",
        "description": "pneumaticcraft.gui.jei.description.create_blaze_burner.smouldering",
        "statePredicate": {
          "blaze": "smouldering"
        },
        "temperature": 1700,
        "thermalResistance": 100000,
      })
    
      event.custom({
        "type": "pneumaticcraft:heat_properties",
        "block": "createaddition:liquid_blaze_burner",
        "description": "pneumaticcraft.gui.jei.description.create_blaze_burner.fading",
        "statePredicate": {
          "blaze": "fading"
        },
        "temperature": 1700,
        "thermalResistance": 1000,
      })

      event.custom({
        "type": "pneumaticcraft:heat_properties",
        "block": "createaddition:liquid_blaze_burner",
        "description": "pneumaticcraft.gui.jei.description.create_blaze_burner.kindled",
        "statePredicate": {
          "blaze": "kindled"
        },
        "temperature": 1700,
        "thermalResistance": 500,
      })

      event.custom({
        "type": "pneumaticcraft:heat_properties",
        "block": "createaddition:liquid_blaze_burner",
        "description": "pneumaticcraft.gui.jei.description.create_blaze_burner.seething",
        "statePredicate": {
          "blaze": "seething"
        },
        "temperature": 1700,
        "thermalResistance": 50,
      })
})
