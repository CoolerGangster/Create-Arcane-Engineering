onEvent('block.registry', event => {
  let layer = "cutout"
  event.create('skystone_catalyst').unbreakable().displayName('Skystone Catalyst').material('lantern').notSolid().renderType(layer).hardness(3.0)
  event.create('source_time_crystal').material('glass').displayName('Source Time Crystal').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('andesite_machine').displayName('Andesite Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('brass_machine').displayName('Brass Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('sealed_machine').displayName('Copper Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('integrational_machine').displayName('Integrational Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  event.create('sturdy_machine').displayName('Sturdy Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
 // event.create('radiant_machine').displayName('Radiant Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('plastic_machine').displayName('Plastic Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('time_machine').displayName('Time Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  event.create('supercritical_machine').displayName('Supercritical Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  /*event.create('gold_casing')
  event.create('zinc_casing')
  event.create('enderium_casing')
  event.create('supercritical_casing')*/
  event.create('omlett_block')
});
