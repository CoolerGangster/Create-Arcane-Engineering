onEvent('server.load', event => {
    event.server.players.forEach(p => {
        p.stages.remove('arcane_crafting');
        if (p.stages.has('arcane_crafting')) {
            p.sendData('jei_show_stage_one', {})
        }

        p.stages.remove('keystone_crafting');
        if (p.stages.has('keystone_crafting')) {
            p.sendData('jei_show_stage_two', {})
        }
    })
})

onEvent('player.logged_in', event => {
    event.player.stages.remove('arcane_crafting');
    if (event.player.stages.has('arcane_crafting')) {
        event.player.sendData('jei_show_stage_one', {})
    }

    event.player.stages.remove('keystone_crafting');
    if (event.player.stages.has('keystone_crafting')) {
        event.player.sendData('jei_show_stage_two', {})
    }
})