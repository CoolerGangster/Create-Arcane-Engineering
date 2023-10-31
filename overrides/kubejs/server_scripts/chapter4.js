//most stuff from ch4 isnt here but it is what it is
onEvent('recipes',event => {
  let r = 3;
    event.recipes.create.compacting('kubejs:dryed_board_stack', r+'x kubejs:dryed_board')
    event.recipes.create.compacting('kubejs:separated_board_stack', r+'x kubejs:separated_board')
    event.custom({
        "type": "pneumaticcraft:assembly_drill",
        "input": {
          "item": "kubejs:pcb_assembly"
        },
        "result": {
          "item": "pneumaticcraft:empty_pcb",
          "count": r
        },
        "program": "drill"
      })
      event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "item": "kubejs:pcb_assembly_2"
        },
        "result": {
          "item": "kubejs:legend_pcb",
          "count": r
        },
        "program": "laser"
      })
    event.recipes.create.deploying('kubejs:pcb_assembly_2', ['kubejs:dryed_board_stack', 'pneumaticcraft:pcb_blueprint'])
    let t = KJ("incomplete_masked_pcb")
    event.recipes.createSequencedAssembly([
      r+'x kubejs:masked_pcb',
    ], 'kubejs:separated_board_stack', [
      event.recipes.createDeploying(t, [t, 'pneumaticcraft:pcb_blueprint']),
      event.recipes.createFilling(t, [t, Fluid.of("kubejs:green_anthraquinone", 144)])
    ]).transitionalItem(t).loops(1)
    t = KJ("incomplete_pcb_blueprint")
  event.recipes.createSequencedAssembly([
    '3x pneumaticcraft:pcb_blueprint',
  ], 'create:empty_schematic', [
    event.recipes.createDeploying(t, [t, 'ae2:printed_calculation_processor']),
    event.recipes.createDeploying(t, [t, 'ae2:printed_logic_processor']),
    event.recipes.createDeploying(t, [t, 'ae2:printed_engineering_processor'])
  ]).transitionalItem(t).loops(1)

  t = KJ("incomplete_pcb_assembly")
  event.recipes.createSequencedAssembly([
    'kubejs:pcb_assembly',
  ], 'pneumaticcraft:plastic', [
    event.recipes.createDeploying(t, [t, 'pneumaticcraft:pcb_blueprint']),
    event.recipes.createDeploying(t, [t, 'create:copper_sheet'])
  ]).transitionalItem(t).loops(1)

  let corundum = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
  corundum.forEach(i => {
      event.recipes.thermal.crystallizer(`2x quark:${i}_corundum_cluster`,[`quark:${i}_corundum_cluster`,Fluid.of('minecraft:water',1000)])
      event.recipes.thermal.crystallizer(`2x quark:${i}_corundum`,[`quark:${i}_corundum`,Fluid.of('minecraft:water',1000)])
  });

  event.recipes.createMechanicalCrafting("cae:advassembly", [
    'PZP',
    'DDD',
    'PZP'
  ], {
    P: "kubejs:supercritical_mechanism",
    Z: "kubejs:finalpcb",
    D: "cae:supercritical_casing"
})
})