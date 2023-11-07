// priority: 200
onEvent('tags.items', event => {
    let corundum = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
    corundum.forEach(Color => {
        event.add('forge:corundum_clusters', 'quark:'+ Color +'_corundum_cluster')
    });
    //event.add('forge:oil', 'beyond_earth:oil_bucket')
    event.add('lychee:fire_immune', 'minecraft:gunpowder')
    event.add('lychee:fire_immune', 'minecraft:glowstone_dust')
    event.add('forge:screwdrivers', 'framedblocks:framed_screwdriver')
    event.add('forge:resonators', 'kubejs:resonator')
    let vial = ['anthracene', 'incomplete_anthraquinone','anthraquinone','empty_vial']
    vial.forEach(I => {
        event.add('create:upright_on_belt', 'kubejs:' + I)
    });
    event.add('create:upright_on_belt', 'forbidden_arcanus:pixie_utrem_jar')
    event.add('create:upright_on_belt', 'forbidden_arcanus:corrupted_pixie_utrem_jar')
    event.add('create:upright_on_belt', 'forbidden_arcanus:utrem_jar')
    event.add('create:upright_on_belt', 'forbidden_arcanus:soul')
    event.add('create:upright_on_belt', 'forbidden_arcanus:dark_soul')
    event.add('create:upright_on_belt', 'forbidden_arcanus:aureal_bottle')
    event.add('create:upright_on_belt', 'forbidden_arcanus:corrupted_pixie')
    event.add('create:upright_on_belt', 'forbidden_arcanus:pixie')
    event.add('create:upright_on_belt', 'tiab:time_in_a_bottle')
    
    event.add('create:upright_on_belt', 'forbidden_arcanus:arcane_crystal_obelisk')
    event.add('create:funkynuggets','minecraft:iron_nugget')
    event.add('create:funkynuggets','create:zinc_nugget')
    event.add('create:kinetic_mechanisms','kubejs:makeshift_kinetic_mechanism')
    event.add('create:kinetic_mechanisms','kubejs:kinetic_mechanism')
    event.add('davebuildingmod:skeleton', /^davebuildingmod:skeleton_/)
    
    const wrenchpickupables = 
    ["#thermal:", "", "", "", "", "", "", "", "", "",]

    event.add('cae:skystone', 'ae2:sky_stone_block')
    event.add('cae:skystone', 'cae:sky_stone')
    event.add("randomium:blacklist", [
        /dev/,
        /creative/,
        /test/,
        /command/,
        /infinite/,
        /portal/,
        /^tconstruct:.*bucket/,
        /^curios:/,
        /^itemfilters:/,
        /^cae/,
        /^waystones:/,
        "create:handheld_worldshaper",
        "kubejs:finalpcb",
        "randomium:randomium",
        "kubejs:god_actuation_fluid_bucket",
        "kubejs:portal_actuation_fluid_bucket"
    ])
})
