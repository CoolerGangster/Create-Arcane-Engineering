function lootbag(lootbag, lootable) {
    if (event.item == lootbag) {
        event.cancel();
        event.player.swingArm(event.hand);
        event.player.playSound('minecraft:entity.experience_orb.pickup');

        for (let i = 0; i <= 256; i++) {
            if (event.item.hasEnchantment('minecraft:fortune', i)) {
                event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${event.player.x} ${event.player.y} ${event.player.z} loot ${lootable}`);
            } else break
        }
        event.item.count--;
    }
}

onEvent('item.right_click', event => {
    lootbag('kubejs:lootbag_poggers', 'loot:patience');
    lootbag('kubejs:lootbag_create_andesite', 'loot:lootbag/create/andesite');
    lootbag('kubejs:lootbag_create_brass', 'loot:lootbag/create/brass');
    lootbag('kubejs:lootbag_create_radiant', 'loot:lootbag/create/radiant');
    lootbag('kubejs:lootbag_pcb', 'loot:lootbag/create/pcb');
    lootbag('kubejs:lootbag_arcane_1', 'cae:arcaneweak');
    lootbag('kubejs:lootbag_arcane_2', 'cae:arcanenormal');
    lootbag('kubejs:lootbag_arcane_3', 'cae:arcanetable');
});