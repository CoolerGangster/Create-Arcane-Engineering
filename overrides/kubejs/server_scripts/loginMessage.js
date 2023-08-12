//priority: 0

onEvent('player.logged_in', event => {
    event.player.tell("Welcome! \n§7If you find missing textures or item names, \ntry reloading them by pressing §fF3+T§7!\n")
})