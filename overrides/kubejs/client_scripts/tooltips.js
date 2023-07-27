onEvent('item.tooltip', tooltip => {
    //tooltip.add(['ars_nouveau:source_gem'], 'The tooltip above is wrong, press shift to see how its been changed for this pack.')
    tooltip.addAdvanced('ars_nouveau:source_gem', (item, advanced, text) => {
        text.add(1, Text.darkPurple('通过在符文石碑上浇筑魔源液来制作。'))
    })
    tooltip.addAdvanced('ars_nouveau:magebloom_crop', (item, advanced, text) => {
        text.add(1, Text.darkPurple('在漂浮空岛发现他 也可以通过以下方式制作：'))
    })
    tooltip.addAdvanced('ars_nouveau:magebloom', (item, advanced, text) => {
        text.add(1, Text.darkPurple('在漂浮空岛发现他'))
    })
    let toltips = [
        ['thermal:obsidian_glass', "可抵御凋零破坏"],
        ['thermal:enderium_glass', "可抵御凋零破坏"],
        ['thermal:lumium_glass', "可抵御凋零破坏"],
        ['thermal:signalum_glass', "可抵御凋零破坏"],
        ['createaddition:straw', "右键烈焰人燃烧室，使其可以将液体燃料作为输入，例如石油、精炼燃料等。"],
        ['kubejs:lootbag_create_andesite', "右键打开。幸运可以获得更多战利品。"],
        ['kubejs:lootbag_arcane_1', "右键打开 幸运可以获得更多战利品"],
        ['kubejs:lootbag_arcane_2', "右键打开 幸运可以获得更多战利品"],
        ['kubejs:lootbag_arcane_3', "右键打开 幸运可以获得更多战利品"],
        ['kubejs:lootbag_poggers', "你已经做到了！右击打开"],
        ['kubejs:lootbag_create_brass', "右键打开 幸运可以获得更多战利品"],
        ['minecraft:ancient_debris', '可通过时间来源催化器实现自动化'],
        ['forbidden_arcanus:arcane_crystal', '通过开采奥术水晶矿石获得。或通过魔法第三章获得'],
        ['kubejs:runic_tablet', '右键创建闪电，以雷霆击碎黑暗！'],
        ['forbidden_arcanus:corrupted_pixie_utrem_jar', '手持腐化精灵右击放在地上的瓶罐可以将其装入罐中'],
        ['forbidden_arcanus:pixie_utrem_jar', '洗涤腐化精灵瓶罐'],
        ['forbidden_arcanus:aureal_bottle', '往空瓶中注入耀金流体制成'],
        ["kubejs:source_bucket", "无需工作台合成，往桶中注入魔源液制作, 然后可以倒入魔源罐..."],
        ["ars_nouveau:bucket_of_source", "右键魔源罐将其倒入, 可由KubeJS的魔源罐生成"],
        ["cae:skystone_catalyst", "在陨石中心发现的外星方块。用红石右键它，可在其周围的生成陨石。"],
        ["cae:veridium_catalyst", "这个方块可以在地下的地穴中找到。用红石右键它，它就会向周围生成它对应材质的方块"],
        ["cae:ochrum_catalyst", "这个方块可以在地下的地穴中找到。用红石右键它，它就会向周围生成它对应材质的方块"],
        ["cae:asurine_catalyst", "这个方块可以在地下的地穴中找到。用红石右键它，它就会向周围生成它对应材质的方块"],
        ["cae:crimsite_catalyst", "这个方块可以在地下的地穴中找到。用红石右键它，它就会向周围生成它对应材质的方块"],
        ["forbidden_arcanus:stellarite_piece", "在Y>320的高空丢出下界之星，使其转变为流星碎片"],
        ["kubejs:fragment_of_patience", "§c *重要事项: 切割处理将会把碎片设置为第一阶段, 所以要确保只切割一次！.* \n §5 步骤一共有七个，每次世界加载时，加工步骤的顺序都是随机的但第一步永远是切割 \n 每个步骤都有 1/1000 的成功机会。\n这里的关键是制造一个超级工厂。"]
    ]
    toltips.forEach(i => {
        tooltip.addAdvanced(i[0], (item, advanced, text) => {
            text.add(1, Text.darkPurple(i[1]))
        })
    });
    tooltip.addAdvanced(/sophisticatedbackpacks:.*backpack/, (item, advanced, text) => {
        if (!tooltip.isShift()) {
            if (item.nbt) {
                text.add(1, "§7皮革:§r " + (item.nbt.leather ? item.nbt.leather : 0) + "§7/§r4§7   (§r+1§7 槽位)")
                text.add(2, "§7丝线:  §r " + (item.nbt.string ? item.nbt.string : 0) + "§7/§r2§7   (§r+1§7 槽位)")
                text.add(3, "§7口袋:§r " + (item.nbt.pocket ? item.nbt.pocket : 0) + "§7/§r2§7   (§r+6§7 槽位)")
                text.add(4, "§7方尖碑:§r " + (item.nbt.obelisk ? item.nbt.obelisk : 0) + "§7/§r1§7   (§r+1§7 升级槽)")
                text.add(5, "§7印刷电路板:§r " + (item.nbt.pcb ? item.nbt.pcb : 0) + "§7/§r2§7   (§r+1§7 升级槽)")
            } else {
                text.add(1, "§7皮革:§r 0§7/§r4§7   (§r+1§7 槽位)")
                text.add(2, "§7丝线:  §r 0§7/§r2§7   (§r+1§7 槽位)")
                text.add(3, "§7口袋:§r 0§7/§r2§7   (§r+6§7 槽位)")
                text.add(4, "§7方尖碑:§r 0§7/§r1§7   (§r+1§7 升级槽)")
                text.add(5, "§7印刷电路板:§r 0§7/§r2§7   (§r+1§7 升级槽)")
            }
        }
    })
    tooltip.addAdvanced("sophisticatedbackpacks:backpack", (item, advanced, text) => { if (!tooltip.isShift()) { text.add(1, "§7Base: §r9§7 槽位, §r1§7 升级槽") } })
    tooltip.addAdvanced("sophisticatedbackpacks:iron_backpack", (item, advanced, text) => { if (!tooltip.isShift()) { text.add(1, "§7Base: §r45§7 槽位, §r1§7 升级槽") } })
    tooltip.addAdvanced("sophisticatedbackpacks:gold_backpack", (item, advanced, text) => { if (!tooltip.isShift()) { text.add(1, "§7Base: §r27§7 槽位, §r0§7 升级槽") } })
    tooltip.addAdvanced("sophisticatedbackpacks:diamond_backpack", (item, advanced, text) => { if (!tooltip.isShift()) { text.add(1, "§7Base: §r36§7 槽位, §r4§7 升级槽") } })
    tooltip.addAdvanced("sophisticatedbackpacks:netherite_backpack", (item, advanced, text) => { if (!tooltip.isShift()) { text.add(1, "§7Base: §r63§7 槽位, §r2§7 升级槽") } })
})
