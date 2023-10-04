onEvent('item.right_click', event => {
    let lootbags = [
        ['kubejs:lootbag_poggers', 'loot:patience'],
        ['kubejs:lootbag_create_andesite', 'loot:lootbag/create/andesite'],
        ['kubejs:lootbag_create_brass', 'loot:lootbag/create/brass'],
        ['kubejs:lootbag_create_radiant', 'loot:lootbag/create/radiant'],
        ['kubejs:lootbag_pcb', 'loot:lootbag/create/pcb'],
        ['kubejs:lootbag_arcane_1', 'cae:arcaneweak'],
        ['kubejs:lootbag_arcane_2', 'cae:arcanenormal'],
        ['kubejs:lootbag_arcane_3', 'cae:arcanetable'],
    ]

    lootbags.forEach(bag => {
        let lootbag = bag[0]
        let loottable = bag[1]

        if (event.item == lootbag) {
            event.cancel();
            event.player.swingArm(event.hand);
            event.player.playSound('minecraft:entity.experience_orb.pickup');
            const {x, y, z} = event.player
            for (let i = 0; i <= 256; i++) {
                if (event.item.hasEnchantment('minecraft:fortune', i)) {
                    event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${x} ${y} ${z} loot ${loottable}`);
                } else break
            }
            event.item.count--;
        }
    })
});