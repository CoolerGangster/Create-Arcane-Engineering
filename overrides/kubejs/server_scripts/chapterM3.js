onEvent('recipes', event => {
    event.remove({id: 'create:haunting/soul_sand'})
    event.remove({id: 'forbidden_arcanus:blasting/arcane_crystal_dust_from_blasting'})
    event.remove({id: 'forbidden_arcanus:smelting/arcane_crystal_dust_from_smelting'})
    event.remove({id: 'forbidden_arcanus:aureal_bottle'})
    event.remove({id: 'tiab:time_in_a_bottle'})
    event.remove({id: 'forbidden_arcanus:arcane_gold_ingot'})
    event.remove({id: 'forbidden_arcanus:mundabitur_dust'})
    event.remove({id: 'create:splashing/soul_sand'})
    event.recipes.create.splashing([Item.of('minecraft:quartz',2),Item.of('minecraft:gold_nugget').withChance(0.69)],'minecraft:soul_sand')
    event.remove({output: 'forbidden_arcanus:arcane_crystal'})
    event.remove({output: 'forbidden_arcanus:corrupted_pixie'})
    event.remove({output: 'forbidden_arcanus:dark_soul'})
    event.recipes.create.haunting('forbidden_arcanus:soulless_sand','#forge:sand')
    event.recipes.createEmptying([Fluid.of('kubejs:aureal_essence', 723), 'forbidden_arcanus:utrem_jar'], 'forbidden_arcanus:pixie_utrem_jar')
    event.recipes.createEmptying([Fluid.of('kubejs:aureal_essence', 333), 'kubejs:empty_vial'], 'forbidden_arcanus:aureal_bottle')
    event.recipes.create.splashing('forbidden_arcanus:pixie_utrem_jar', 'forbidden_arcanus:corrupted_pixie_utrem_jar')
    event.recipes.create.crushing(Item.of('forbidden_arcanus:arcane_crystal_dust_speck', 50), 'forbidden_arcanus:arcane_crystal_obelisk')
    event.recipes.create.haunting('forbidden_arcanus:darkstone','minecraft:blackstone')
    event.recipes.create.haunting('forbidden_arcanus:dark_soul','forbidden_arcanus:soul')
    event.recipes.create.deploying('forbidden_arcanus:corrupted_pixie', ['forbidden_arcanus:dark_soul', 'forbidden_arcanus:arcane_crystal_dust'])
    event.recipes.create.filling('forbidden_arcanus:aureal_bottle', ['kubejs:empty_vial', Fluid.of('kubejs:aureal_essence', 333)])
    event.recipes.create.mixing('forbidden_arcanus:mundabitur_dust', ['forbidden_arcanus:arcane_crystal_dust','quark:soul_bead'])
    event.recipes.create.mixing('forbidden_arcanus:arcane_gold_ingot', [Item.of('minecraft:gold_nugget', 9),'forbidden_arcanus:mundabitur_dust'])
    event.smelting('forbidden_arcanus:arcane_crystal_dust', '#forbidden_arcanus:arcane_crystal_ores')
    //todo:e +remove nipas entirely +redo mundabitur recipe +  soul recipe + remove serene seasons + soulsand info/ponder + remove aureal bottles from dungeons
    let t = 'forbidden_arcanus:arcane_crystal_dust_speck'
    event.recipes.createSequencedAssembly([
      'forbidden_arcanus:arcane_crystal',
    ], t, [
    event.recipes.createFilling(t, [t, Fluid.of("kubejs:aureal_essence", 16)]),
    event.recipes.create.pressing(t, t),
    event.recipes.createFilling(t, [t, Fluid.of("kubejs:aureal_essence", 16)]),
    event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(2)

    t = 'forbidden_arcanus:aureal_bottle'
    event.recipes.createSequencedAssembly([
      'tiab:time_in_a_bottle',
    ], t, [
    event.recipes.createDeploying(t, [t, 'forbidden_arcanus:arcane_crystal']),
    event.recipes.createDeploying(t, [t, 'kubejs:sourcegem_fragments']),
    event.recipes.createDeploying(t, [t, 'forbidden_arcanus:arcane_gold_nugget']),
    event.recipes.createDeploying(t, [t, 'forbidden_arcanus:arcane_gold_nugget']),
    event.recipes.createFilling(t, [t, Fluid.of("kubejs:source", 144)]),
    event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1)
    event.recipes.create.crushing(Item.of('kubejs:sourcegem_fragments', 1).withChance(0.4), 'ars_nouveau:source_gem')

    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "reagent": [
        {
          "item": "forbidden_arcanus:aureal_bottle"
        }
      ],
      "pedestalItems": [
        {
          "item": {
            "item": "forbidden_arcanus:arcane_crystal"
          }
        },
        {
          "item": {
            "item": "kubejs:sourcegem_fragments"
          }
        },
        {
          "item": {
            "item": "forbidden_arcanus:arcane_gold_nugget"
          }
        },
        {
          "item": {
            "item": "forbidden_arcanus:arcane_gold_nugget"
          }
        }
      ],
      "output": {
        "item": "tiab:time_in_a_bottle"
      },
      "sourceCost": 2000, 
      "keepNbtOfReagent": false
    })
})

onEvent('block.right_click', event =>{
  if (event.block.id == 'minecraft:soul_sand' && event.item.id == "forbidden_arcanus:soul_extractor") {
      event.block.set('forbidden_arcanus:soulless_sand')
      event.block.popItemFromFace("forbidden_arcanus:soul", "up")
  }
})
global.tick20 = 0
onEvent('level.tick', event =>{
  if (event.level.getDimension() != 'minecraft:overworld') {return}
  global.tick20++
  if (global.tick20 == 20) {
      global.tick20 = 0
      //event.server.tell("5 Seconds have passed!")
      event.level.getEntities('@e[type=quark:wraith]').forEach(Wraith =>{
        if (Wraith.block.id == 'forbidden_arcanus:soulless_sand'){
          Wraith.block.set('minecraft:soul_sand')
          event.server.runCommandSilent(`playsound cae:wraith_soulconvert block @e[type=player] ${Wraith.block.x} ${Wraith.block.y} ${Wraith.block.z}`)
      }
      })
  }
})