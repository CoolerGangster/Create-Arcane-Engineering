onEvent('jei.hide.items', event => {
    event.hide('easy_villagers:auto_trader')
    event.hide('easy_villagers:farmer')
    event.hide('easy_villagers:iron_farm')
    event.hide('easy_villagers:incubator')
    event.hide(/enderchests\:*/)
    event.hide(/enderstorage\:*/)
    event.hide(/endertanks\:*/)
})