onEvent('block.registry', event => {
  let layer = "切割"
  event.create('skystone_catalyst').unbreakable().displayName('陨石催化器').material('lantern').notSolid().renderType(layer).hardness(3.0)
  event.create('source_time_crystal').material('glass').displayName('时间魔源催化器').material('lantern').notSolid().renderType(layer).hardness(3.0)
  // event.create('andesite_machine').displayName('动能外壳').material('lantern').notSolid().renderType(layer).hardness(3.0)
  // event.create('brass_machine').displayName('精密外壳').material('lantern').notSolid().renderType(layer).hardness(3.0)
  // event.create('sealed_machine').displayName('橡胶外壳').material('lantern').notSolid().renderType(layer).hardness(3.0)
  // event.create('integrational_machine').displayName('魔源外壳').material('lantern').notSolid().renderType(layer).hardness(3.0)
  event.create('sturdy_machine').displayName('坚固外壳').material('lantern').notSolid().renderType(layer).hardness(3.0)
  // event.create('radiant_machine').displayName('光辉外壳').material('lantern').notSolid().renderType(layer).hardness(3.0)
  // event.create('plastic_machine').displayName('塑料外壳').material('lantern').notSolid().renderType(layer).hardness(3.0)
  // event.create('time_machine').displayName('时间外壳').material('lantern').notSolid().renderType(layer).hardness(3.0)
  event.create('supercritical_machine').displayName('超临界外壳').material('lantern').notSolid().renderType(layer).hardness(3.0)
  event.create('gold_casing').displayName('金机壳')
  event.create('zinc_casing').displayName('锌机壳')
  event.create('enderium_casing').displayName('末影机壳')
  event.create('supercritical_casing').displayName('超临界机壳')
  event.create('omlett_block').displayName('精华蛋块')
});