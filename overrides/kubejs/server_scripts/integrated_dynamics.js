/**
 * Simple recipe changes to reset IDs on parts.
 */

let integrated_parts = [
    'integrateddynamics:part_audio_reader',
    'integrateddynamics:part_block_reader',
    'integrateddynamics:part_entity_reader',
    'integrateddynamics:part_extradimensional_reader',
    'integrateddynamics:part_fluid_reader',
    'integrateddynamics:part_inventory_reader',
    'integrateddynamics:part_machine_reader',
    'integrateddynamics:part_network_reader',
    'integrateddynamics:part_redstone_reader',
    'integrateddynamics:part_world_reader',
    'integrateddynamics:part_audio_writer',
    'integrateddynamics:part_effect_writer',
    'integrateddynamics:part_entity_writer',
    'integrateddynamics:part_machine_writer',
    'integrateddynamics:part_inventory_writer',
    'integrateddynamics:part_redstone_writer',
    'integrateddynamics:part_static_light_panel',
    'integrateddynamics:part_dynamic_light_panel',
    'integrateddynamics:part_display_panel',
    'integrateddynamics:part_connector_mono_directional',
    'integratedterminals:part_terminal_storage',
    'integratedterminals:part_terminal_crafting_job',
    'integratedtunnels:part_interface_energy',
    'integratedtunnels:part_interface_filter_energy',
    'integratedtunnels:part_importer_energy',
    'integratedtunnels:part_exporter_energy',
    'integratedtunnels:part_interface_item',
    'integratedtunnels:part_interface_filter_item',
    'integratedtunnels:part_importer_item',
    'integratedtunnels:part_exporter_item',
    'integratedtunnels:part_interface_fluid',
    'integratedtunnels:part_interface_filter_fluid',
    'integratedtunnels:part_importer_fluid',
    'integratedtunnels:part_exporter_fluid',
    'integratedcrafting:part_interface_crafting',
    'integratedcrafting:part_crafting_writer'
]
onEvent('recipes', event => {
    event.remove({output: 'integrateddynamics:logic_director'})
    event.remove({output: 'integrateddynamics:energy_battery'})
    event.remove({output: 'integratedcrafting:part_interface_crafting'})
    event.remove({output: 'integratedcrafting:part_crafting_writer'})
    event.remove({output: /integrateddynamics\:part.*porter_world/})
    event.remove({output: /integratedtunnels\:part.*porter_world/})
    event.remove({output: "integratedtunnels:part_player_simulator"})
    event.remove({output: "integrateddynamics:part_connector_omni_directional"})
    event.remove({output: "integratedterminals:terminal_storage_portable"})
    event.remove({output: 'integrateddynamics:coal_generator'})

    integrated_parts.forEach(part => {
        event.shapeless(part, [part])
    })
})