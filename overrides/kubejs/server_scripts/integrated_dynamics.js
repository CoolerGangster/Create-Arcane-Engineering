/**
 * Simple recipe changes to reset IDs on parts.
 */
onEvent('recipes', event => {

    // Fix Integrated Tunnels items not able to be reset once an ID is defined.
    event.shapeless('integratedtunnels:part_interface_item', ['integratedtunnels:part_interface_item'])
    event.shapeless('integratedtunnels:part_importer_item', ['integratedtunnels:part_importer_item'])
    event.shapeless('integratedtunnels:part_exporter_item', ['integratedtunnels:part_exporter_item'])
    event.shapeless('integratedtunnels:part_interface_fluid', ['integratedtunnels:part_interface_fluid'])
    event.shapeless('integratedtunnels:part_importer_fluid', ['integratedtunnels:part_importer_fluid'])
    event.shapeless('integratedtunnels:part_exporter_fluid', ['integratedtunnels:part_exporter_fluid'])

    // Fix Integrated Dynamics items not able to be reset once an ID is defined.
    event.shapeless('integrateddynamics:part_connector_mono_directional', ['integrateddynamics:part_connector_mono_directional'])
})