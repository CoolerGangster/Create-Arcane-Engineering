onEvent('recipes', event => {
    event.recipes.createMechanicalCrafting('kubejs:radiant_coil', [
        'C'
      ], {
        C: 'kubejs:radiant_sheet',
      })

      event.recipes.createMechanicalCrafting('4x kubejs:radiant_coil', [
        'CS'
      ], {
        C: 'kubejs:radiant_sheet',
        S: 'create:shadow_steel'
      })

      event.recipes.createMechanicalCrafting('4x kubejs:radiant_coil', [
        'C',
        'S'
      ], {
        S: 'kubejs:radiant_sheet',
        C: 'create:shadow_steel'
      })
      event.remove({ id: CR("mechanical_crafting/crushing_wheel") })
      event.recipes.createMechanicalCrafting(Item.of(CR('crushing_wheel'), 2), [
        ' AAA ',
        'AABAA',
        'ABBBA',
        'AABAA',
        ' AAA '
      ], {
        A: F('#cobblestone'),
        B: MC('stick')
      })
})  