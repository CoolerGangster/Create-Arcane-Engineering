onEvent('jei.information', event => {
    event.add('minecraft:soul_sand', ['Retrieving Soulsand of its Soul', '', 'Due to a weakening of the arcane bulk haunting sand only yields soulless sand, to reinfuse it with a soul have a Wraith stand on top of it'])
    event.add('forbidden_arcanus:soulless_sand', ['Retrieving Soulsand of its Soul', 'Due to a weakening of the arcane bulk haunting sand only yields soulless sand, to reinfuse it with a soul have a Wraith stand on top of it '])
    event.add(/sophisticatedbackpacks:.*backpack/, "Upgradable by placing it (Shift+Right Click) and Right Clicking it with the items mentioned on its tooltip.")
})