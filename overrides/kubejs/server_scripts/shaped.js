onEvent('recipes', event => {
  event.shaped('2x create:belt_connector', [
    '   ',
    'SSS',
    'SSS'
  ], {
    S: 'kubejs:enriched_rubber'
  })
  event.shaped('create:belt_connector', [
    '   ',
    'RRR',
    'RRR'  
  ], {
    R: 'thermal:cured_rubber'
  })
  event.shaped('1x minecraft:chest', [
    'SSS',
    'S S',
    'SSS'
  ], {
    S: '#minecraft:planks'
  })

  event.shaped('3x kubejs:empty_vial', [
    '   ',
    'G G',
    ' G '
  ], {
    G: 'glassential:glass_ghostly'
  })
  event.shaped('kubejs:saw', [
    '  G',
    ' G ',
    'W  '
  ], {
    G: 'minecraft:iron_ingot',
    W: '#minecraft:planks'
  })
  event.shaped('kubejs:resonator', ["R B", "I I", "III"], {R: "minecraft:red_dye", B: "minecraft:blue_dye", I: "minecraft:iron_ingot"})
})
