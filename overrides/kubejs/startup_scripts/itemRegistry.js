
onEvent('item.registry.tool_tiers', event => {
    event.add('tool', tier => {
        tier.uses = 250
        tier.repairIngredient = '#forge:ingots/iron'
    })
    event.add('zyzz', tier => {
        tier.uses = -1
        tier.speed = 20.0
        tier.attackDamageBonus = 36.0
        tier.level = 20
        tier.enchantmentValue = 200
        tier.repairIngredient = 'avaritia:zyzzium_ingot'
    })
    event.add('lootbag', tier => {
        tier.speed = 0.0
        tier.uses = -1
        tier.enchantmentValue = 15
        tier.attackDamageBonus = 0
    })
});

onEvent('item.registry', (event) => {
    let mechanism = (name, id, rarity) => {
        
        event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + '构件').rarity(RARITY_COMMON)
        event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly').texture(id + "_mechanism" + "kubejs:item/incomplete_").displayName(name + '构件' + '（未完成）')
    }
    let tool = (name, id, rarity) => {
        
        event.create(id, 'sword').tier('tool').texture("kubejs:item/" + id).displayName(name).rarity(RARITY_COMMON)
    }
    event.create("avaritia:zizz", 'sword').tier('zyzz').displayName("格雷戈之剑").rarity(RARITY_EPIC)
    let seed = (name, id) => {
        
        event.create(id + '_seed').texture("kubejs:item/" + id + "_seed").displayName(name + '种子')
        event.create(id + '_cluster').texture("kubejs:item/" + id + "_cluster").displayName(name + '种子簇')
        event.create('incomplete_' + id, 'create:sequenced_assembly').texture(id + "kubejs:item/incomplete_").displayName(name + '（未完成）')
    }
    event.create('leather_pocket').displayName('皮袋')
    event.create('radiant_coil').glow(true).texture("kubejs:item/radiant_coil").displayName('光辉感应线圈')
    event.create('radiant_sheet').glow(true).texture("kubejs:item/radiant_sheet").displayName('光辉板')
    event.create('petrified_sheet').texture("kubejs:item/petrified_sheet").displayName('石化橡木片')
    event.create('enriched_rubber').texture("kubejs:item/enriched_rubber").displayName('门瑞欧富集橡胶')
    event.create('certus_quartz_seed_cluster').texture("kubejs:item/certus_quartz_cluster").displayName('赛特斯石英簇')
    event.create('incomplete_certus_quartz_cluster', 'create:sequenced_assembly').texture("kubejs:item/incomplete_certus_quartz_cluster").displayName('赛特斯石英簇(未完成)')
    mechanism('动能', 'kinetic')
    event.create('makeshift_kinetic_mechanism').displayName('简易动能构件').tooltip("如果没有门瑞欧，构件就不够坚固，无法制作更多的构件。")
    mechanism('橡胶', 'sealed')
    mechanism('坚固', 'sturdy')
    mechanism('塑料', 'plastic', RARITY_UNCOMMON)
    mechanism('魔源', 'integrational', RARITY_UNCOMMON)
    mechanism('光辉', 'radiant', RARITY_UNCOMMON)
    mechanism('时间', 'time', RARITY_RARE)
    mechanism('超临界', 'supercritical', RARITY_RARE)
    tool('锯子', 'saw')
    seed('石英', 'quartz',)
    tool('螺丝刀', 'screwdriver')

    tool('共振仪', 'resonator')
    event.create('rune_dust').displayName('符文粉末')
    event.create('anthracene').displayName('蒽').tooltip("C₁₄H₁₀")
    event.create('incomplete_anthraquinone').displayName('蒽醌（半成品）').tooltip("下一步: 泡入双色酸液中")
    event.create('anthraquinone').displayName('蒽醌').tooltip("C₁₄H₈O₂")
    event.create('chrom').displayName('铬').tooltip("Cr")
    event.create('powdered_flint').displayName('燧石粉').tooltip("与精炼油混合制成火药")
    event.create('empty_vial').displayName('空瓶')
    //start chapter 4
    let k = '未组装的印刷电路板'
    event.create('incomplete_pcb_blueprint', 'create:sequenced_assembly').displayName('印刷电路板蓝图（半成品）')
    event.create('plastic_board').displayName('塑料板')
    event.create('etched_board').displayName(k).tooltip("下一步: 下一步：在离心分离机内分离出残留物")
    event.create('dryed_board').displayName(k).tooltip("下一步：打包以便印刷蓝图")
    event.create('separated_board').displayName(k).tooltip("下一步：应用焊接层")
    event.create('masked_pcb').displayName(k).tooltip("下一步：在感应炉中烘干")
    event.create('incomplete_masked_pcb', 'create:sequenced_assembly').displayName('未组装的印刷电路板（半成品）')
    event.create('pcb_assembly').displayName('未组装的印刷电路板')
    event.create('incomplete_pcb_assembly', 'create:sequenced_assembly').displayName('印刷电路板蓝组装包（半成品）')
    event.create('pcb_assembly_2').displayName('印刷电路板蓝组装包')
    event.create('incomplete_pcb_assembly_2', 'create:sequenced_assembly').displayName('印刷电路板蓝图组装包（半成品）')
    event.create('legend_pcb').displayName(k).tooltip("下一步：进行镍金处理")
    event.create('incomplete_tested_pcb', 'create:sequenced_assembly').displayName('未组装的印刷电路板（半成品）')
    event.create('untested_pcb').displayName(k).tooltip("下一步：使用钻头进行电器测试")
    event.create('tested_pcb').displayName(k).tooltip("下一步：洗涤电路板")
    event.create('cleaned_pcb').displayName(k).tooltip("下一步：哄干一下")
    event.create('incomplete_calculation_circuit', 'create:sequenced_assembly').displayName(' 运算电路板（半成品）')
    event.create('incomplete_logic_circuit', 'create:sequenced_assembly').displayName(' 逻辑电路板（半成品）')
    event.create('incomplete_engineering_circuit', 'create:sequenced_assembly').displayName(' 工程电路板（半成品）')
    event.create('electricaly_tested').displayName(k).tooltip("下一步：使用钻头进行电器测试")
    event.create('mystery_pcb').displayName(k).tooltip("下一步：用砂纸打磨后观察内部")
    event.create("separated_board_stack").displayName(k)
    event.create("dryed_board_stack").displayName(k)

    //start M2
    event.create('mage_leaf').displayName('魔法绽放树叶')
    event.create('magebloom_sourceberry_smoothie_bowl').displayName('法师之花魔源浆果奶昔碗').food(food => {
        food.hunger(8).saturation(12).effect("ars_nouveau:mana_regen", 300, 2, 1).eaten(ctx => {
            ctx.player.give(Item.of("minecraft:bowl", 1))
        })
    })
    event.create('dirty_bowl').displayName('绽放树叶碗')
    //start m3
    event.create('sourcegem_fragments').displayName('魔源宝石碎片')
    //compat shit
    event.create('incomplete_cogwheel', 'create:sequenced_assembly').displayName('齿轮（半成品）')
    event.create('runic_tablet').displayName('符文石碑').tooltip("这其中有什么奥秘？")
    event.create('alloy_radar').displayName('合金扫描仪').tooltip("右键地面扫描安山岩和闪长岩。这可能会有卡顿！")

    //ch5calcstuff
    event.create('damaged_a').displayName('缺损的 A 印刷电路板组件')
    event.create('damaged_b').displayName('缺损的 B 印刷电路板组件')
    event.create('damaged_c').displayName('缺损的 C 印刷电路板组件')
    event.create('damaged_d').displayName('缺损的 D 印刷电路板组件')
    event.create('damaged_e').displayName('缺损的 E 印刷电路板组件')
    event.create('damaged_f').displayName('缺损的 F 印刷电路板组件')
    event.create('damaged_g').displayName('缺损的 G 印刷电路板组件')
    event.create('a').displayName('A 印刷电路板组件')
    event.create('b').displayName('B 印刷电路板组件')
    event.create('c').displayName('C 印刷电路板组件')
    event.create('d').displayName('D 印刷电路板组件')
    event.create('e').displayName('E 印刷电路板组件')
    event.create('f').displayName('F 印刷电路板组件')
    event.create('g').displayName('G 印刷电路板组件')
    event.create('fragment_of_patience').glow(true).rarity(RARITY_EPIC)
    event.create('finalpcb').displayName('格雷戈印刷电路板组件')
    event.create('menril_shrub').displayName('门瑞欧灌木').tooltip("With the weakening of the Arcane so have the Arcane Trees been weakened. Can you restore this artifact?")
    event.create('rejuvinated_menril_shrub').displayName('恢复活力的门瑞欧灌木').tooltip("Youve restored it, well to some part. To fully restore the Menril Sapling you must continue.")

    //m4
    event.create('cae:time_crystal').displayName('时间晶体碎片')

    function Keystone(id, color) {
        event.create("cae:" + id + "_keystone").texture("kubejs:item/gem").color(0, color).rarity(RARITY_EPIC)
    }
    Keystone("source", 0x9F2B68)
    Keystone("soul", 0x000099)
    Keystone("nature", 0x009933)
    Keystone("dry", 0xffcc00)
    Keystone("ice", 0x00ccff)
    /*let keystones = ["source","soul","nature","dry","ice"]
    keystones.forEach(element => {
        event.create("cae:"+ element[0] + "_keystone").texture("kubejs:items/gem").color(0x9F2B68)
    });
    */
    event.create("avaritia:zyzzium_ingot").texture("kubejs:item/zyzz").rarity(RARITY_EPIC).displayName("Zyzzium ingot")
    event.create("broken_arcane_egg").rarity(RARITY_EPIC).displayName("蛋壳")
    event.create("arcane_unscrambled_egg").rarity(RARITY_EPIC).displayName("溏心蛋").food(food => {
        food.hunger(8).saturation(3).effect("ars_nouveau:mana_regen", 1200, 2, 1).effect('haste', 600, 2, 1).eaten(ctx => { ctx.player.tell(Text.darkPurple("You feel Arcane.")) })
    })
    event.create("source_candy_rock").rarity(RARITY_EPIC).displayName("魔源糖果").food(food => {
        food.hunger(8).saturation(4).effect("ars_nouveau:mana_regen", 2800, 3, 1).effect('strength', 600, 2, 1).eaten(ctx => { ctx.player.tell(Text.darkPurple("You feel Source coarsing through your veins.")) })
    })
    event.create("sushi").rarity(RARITY_EPIC).displayName("寿司").food(food => {
        food.hunger(8).saturation(4).effect("ars_nouveau:mana_regen", 1200, 2, 1).effect('water_breathing', 600, 0, 1).eaten(ctx => { ctx.player.tell(Text.yellow("You feel Cool.")) })
    })
    event.create("magical_ice").rarity(RARITY_EPIC).displayName("魔冰").food(food => {
        food.hunger(8).saturation(4).effect("ars_nouveau:mana_regen", 1200, 2, 1).effect('minecraft:speed', 600, 2, 1).eaten(ctx => { ctx.player.tell(Text.blue("You feel Iced Out.")) })
    })
    event.create("arcane_omelett_sheet").rarity(RARITY_EPIC).displayName("奥术煎蛋片").food(food => {
        food.hunger(20).saturation(12).effect("ars_nouveau:mana_regen", 2400, 3, 1).effect('instant_health', 600, 2, 1).eaten(ctx => { ctx.player.tell(Text.gold("You feel Godlike.")) })
    })
    //C5    
    event.create('cae:stem_cell').displayName("干细胞").texture("kubejs:item/stem_cell").rarity(RARITY_EPIC).food(food => {
        food
            .hunger(6)
            .saturation(6)//This value does not directly translate to saturation points gained
            //The real value can be assumed to be:
            //min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
            .effect('instant_health', 600, 0, 1)
            .effect('water_breathing', 600, 0, 1)
            .removeEffect('poison')
            .alwaysEdible()//Like golden apples
            .fastToEat()//Like dried kelp
            .meat()//Dogs are willing to eat it
            .eaten(ctx => {//runs code upon consumption
                ctx.player.tell(Text.darkGreen('你感觉充满活力！'))
                //If you want to modify this code then you need to restart the game.
                //However, if you make this code call a global startup function
                //and place the function *outside* of an event handler
                //then you may use the command:
                //  /kubejs reload startup_scripts
                //to reload the function instantly.
                //See example below
            })
    })

    //sum chapter 2 stuff
    event.create("redstone_seed").displayName("玫瑰石英种子")
    event.create("redstone_cluster").displayName("玫瑰石英簇")
    event.create("lootbag_create_andesite").displayName("工程师箱").rarity(RARITY_RARE).unstackable()
    event.create("lootbag_arcane_1").displayName("奖励袋").rarity(RARITY_UNCOMMON).unstackable()
    event.create("lootbag_arcane_2").displayName("史诗奖励袋").rarity(RARITY_RARE).unstackable()
    event.create("lootbag_arcane_3").displayName("传说奖励袋").rarity(RARITY_EPIC).unstackable()
    event.create("lootbag_poggers").displayName("奇迹奖励袋").rarity(RARITY_EPIC).unstackable()
    event.create("lootbag_create_brass").displayName("史诗工程师箱").rarity(RARITY_EPIC).unstackable()
});