onEvent('jei.hide.items', event => {
    event.hide('thermal:rose_gold_ingot')
    event.hide('thermal:rose_gold_dust')
    event.hide('thermal:rose_gold_nugget')
    event.hide('thermal:rose_gold_gear')
    event.hide('thermal:rose_gold_block')
    event.hide('thermal:cinnabar')
    event.hide('thermal:niter')
    event.hide('thermal:apatite')
    event.hide('tconstruct:liquid_redstone_bucket')
    event.hide('thermal:glowstone_mushroom_spores')
    event.hide('thermal:gunpowder_mushroom_spores')
    event.hide('thermal:redstone_mushroom_spores')
    event.hide('thermal:slime_mushroom_spores')
    event.hide('beyond_earth:iron_plate')
    event.hide('create:tree_fertilizer')
    event.hide('create:tree_fertilizer')
    event.hide('thermal:press_coin_die')
    event.hide('thermal:bronze_block')
    event.hide('thermal:bronze_ingot')
    event.hide('thermal:bronze_nugget')
    event.hide('thermal:bronze_dust')
    event.hide('thermal:bronze_gear')
    event.hide(/cinnabar/)
    event.hide(/niter/)
    event.hide(/apatite/)
    event.hide(Item.of('appliedenergistics2:facade').ignoreNBT())
    event.hide('thermal:bronze_plate')
    event.hide('thermal:bronze_coin')
    event.hide('integrateddynamics:logic_director')
    event.hide('functionalstorage:ender_drawer')
    event.hide(/^functionalstorage:fluid/)
    event.hide(/waystones\:.*sharestone/)
    event.hide(/waystone\:.*scroll/)
    event.hide("waystones:warp_plate")
    event.hide(/integrateddynamics\:part.*porter_world/)
    event.hide(/integratedtunnels\:part.*porter_world/)
    event.hide("integratedtunnels:part_player_simulator")
    event.hide("integrateddynamics:part_connector_omni_directional")
    event.hide("integratedterminals:terminal_storage_portable")
  })
  onEvent('jei.hide.fluids', event => {
    event.hide('tconstruct:liquid_redstone')
  })