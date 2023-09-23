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

  event.shaped('2x thermal:nuke_tnt', [
    'WGW',
    'GOG',
    'WGW'
  ], {
    G: 'ae2:singularity',
    W: 'kubejs:warp_fragments',
    O: 'forbidden_arcanus:orb_of_temporary_flight'
  })
  event.shaped('8x thermal:nuke_grenade', [
    'WGW',
    'GOG',
    'WGW'
  ], {
    G: 'ae2:singularity',
    W: 'kubejs:warp_fragments',
    O: 'forbidden_arcanus:orb_of_temporary_flight'
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
  
  //Cast Iron Unification
  event.shaped('12x dustrial_decor:cast_iron_block', [
    'SSS',
    'S S',
    'SSS'
  ], {
    S: 'createdeco:cast_iron_ingot'
  })
  event.shaped('16x dustrial_decor:cast_iron_balustrade', [
    '   ',
    'SSS',
    'SSS'  
  ], {
    S: 'createdeco:cast_iron_sheet'
  })

  //Tyr Samurai Cost change
  event.shaped('epicsamurai:tyr_samurai_chestplate', [
    'GSG',
    'AGA',
    'AAA'  
  ], {
    S: 'thermal:steel_ingot',
    G: 'forbidden_arcanus:golden_dragon_scale',
    A: 'forbidden_arcanus:aquatic_dragon_scale'
  })
})
