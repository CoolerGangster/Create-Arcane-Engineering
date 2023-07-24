onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
      ores.blocks = [ '#forge:ores/cinnabar', '#forge:ores/niter', '#forge:ores/apatite','rocketcraft_simulator_:aluminium_ore','rocketcraft_simulator_:platinum_ore','rocketcraft_simulator_:tin_ore','rocketcraft_simulator_:copper_ore','rocketcraft_simulator_:zinc_ore'] // Removes coal and iron ore 
    })
})