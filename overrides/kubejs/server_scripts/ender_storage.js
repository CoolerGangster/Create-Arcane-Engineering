/* Remove Ender Storage, Ender Chests and Ender Tanks */
onEvent('recipes', event => {
    event.remove({mod: 'enderchests'})
    event.remove({mod: 'enderstorage'})
    event.remove({mod: 'endertanks'})
})