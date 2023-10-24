onEvent('server.load', event => {
    event.server.players.forEach(p => {
        if (p.stages.has('arcane_crafting')) {
            p.sendData('jei_show_stage_one', {})
        }

        if (p.stages.has('keystone_crafting')) {
            p.sendData('jei_show_stage_two', {})
        }
    })
})

onEvent('player.logged_in', event => {
    if (event.player.stages.has('arcane_crafting')) {
        event.player.sendData('jei_show_stage_one', {})
    }

    if (event.player.stages.has('keystone_crafting')) {
        event.player.sendData('jei_show_stage_two', {})
    }
})
