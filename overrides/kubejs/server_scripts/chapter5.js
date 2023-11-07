onEvent('recipes', event => {
    event.remove({id: 'pneumaticcraft:spawner_core_shell'}) 
    event.remove({id: 'beyond_earth:fuel_refining/fuel_from_oil'}) 
    event.remove({id: 'forbidden_arcanus:dark_nether_star'}) 
    event.remove({id: 'thermal:ender_tnt'}) 
    event.recipes.create.haunting('forbidden_arcanus:dark_nether_star','minecraft:nether_star')
    event.recipes.create.haunting(Item.of('thermal:ender_tnt').withChance(0.65),'minecraft:tnt')
    event.recipes.createMixing([Fluid.of('kubejs:portal_actuation_fluid',1),'pneumaticcraft:spawner_core_shell'],[Fluid.of('pneumaticcraft:gasoline',1000),Fluid.of('pneumaticcraft:diesel',800), 'forbidden_arcanus:orb_of_temporary_flight']).superheated()
    event.shaped('pneumaticcraft:spawner_core_shell', [
        'NBN',
        'BSB',
        'NBN'
      ], {
        S: 'forbidden_arcanus:dark_nether_star',
        N: 'minecraft:netherite_scrap',
        B: 'forbidden_arcanus:eternal_stella'
      })
      event.recipes.createMechanicalCrafting("cae:arcanereactor", [
        'PZP',
        'ZZZ',
        'PZP'
      ], {
        P: "forbidden_arcanus:eternal_stella",
        Z: "kubejs:finalpcb"
    })
    event.recipes.createMechanicalCrafting("cae:particle_accelerator", [
      'PZP',
      'ZZZ',
      'PZP'
    ], {
      P: "spirit:broken_spawner",
      Z: "kubejs:finalpcb" 
  })

    event.custom({
        "type": "pneumaticcraft:explosion_crafting",
        "input": {
          "item": "forbidden_arcanus:dark_rune"
        },
        "loss_rate": 30,
        "results": [
          {
            "item": "forbidden_arcanus:corrupti_dust"
          }
        ]
      })
      event.custom({
        "type": "pneumaticcraft:explosion_crafting",
        "input": {
          "item": "ae2:matter_ball"
        },
        "loss_rate": 20,
        "results": [
          {
            "item": "forbidden_arcanus:dark_matter"
          }
        ]
      })
    event.recipes.createCrushing([Item.of('ae2:singularity').withChance(0.30)],'2x create:crushing_wheel')
})
onEvent('level.tick', event => {
  event.level.getEntities('@e[type=cae:essentialorb]').forEach(Orb => {
    if (Orb.fullNBT.getInt('kubejsdoshit')){
      Orb.block.popItem('forbidden_arcanus:orb_of_temporary_flight')
      Orb.remove()
    }
  });
})
//todo: fix the Liquid resent 