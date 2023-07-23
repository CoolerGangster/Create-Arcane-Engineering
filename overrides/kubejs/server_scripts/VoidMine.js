
onEvent('recipes', event => {
    const biomes = [
        ['byg:has_structure/jungle_temple']
    ]

    const VoidMine = [
        ['minecraft:raw_gold','"Aurum Vein"',600,5,20,300,'forge:is_dry','forge:is_overworld','forge:is_nether',512,"aurum"], // orestoneable
        ['minecraft:raw_iron','"Ferrum Vein"',1000,10,40,250,'forge:is_jungle','forge:is_overworld','forge:is_rare',256,"ferrum"], // orestoneable
        ['minecraft:raw_copper','"Cuprum Vein"',800,8,60,200,'forge:is_mountain','forge:is_overworld','forge:is_rare',160,"cuprum"], // orestoneable
        ['thermal:raw_tin','"Stannum Vein"',1002,7,30,250,'forge:is_jungle','forge:is_overworld','forge:is_rare',256,"stannum"],
        ['thermal:raw_lead','"Plumbum Vein"',810,12,60,400,'forge:is_jungle','forge:is_overworld','forge:is_rare',256,"plumbum"],
        ['thermal:raw_silver','"Argentum Vein"',500,5,20,600,'forge:is_mountain','forge:is_overworld','forge:is_end',512,"argentum"],
        ['thermal:raw_nickel','"Nickel Vein"',1001,9,35,250,'forge:is_jungle','forge:is_overworld','forge:is_rare',256,"nickel"],
        ['create:raw_zinc','"Zinc Vein"',1003,9,35,250,'forge:is_jungle','forge:is_overworld','forge:is_rare',256,"zinc"], // orestoneable
        [[Item.of('minecraft:diamond').withChance(0.20),Item.of('minecraft:coal')],'"Carbon Vein"',500,5,20,600,'forge:is_mountain','forge:is_overworld','forge:is_end',512,"carbon"]
        
    ]  
    function BiomeRecource(Out,Text,Weight,Size1,Size2,Time,B1,B2,Dim,Stress,id)  {
    event.recipes.createoreexcavation.drilling(Out,'{"text":' + Text + '}', Weight, Time).drill('createoreexcavation:netherite_drill').fluid('minecraft:lava').veinSize(Size1,Size2).biomeWhitelist(B1).stress(Stress).id(id+"_rare");
    event.recipes.createoreexcavation.drilling(Out,'{"text":' + Text + '}', Weight * 0.05, Time * 2).drill(['createoreexcavation:diamond_drill', 'createoreexcavation:netherite_drill']).alwaysFinite().veinSize(Size1 * 0.3, Size2 * 0.3).biomeWhitelist(B2).stress(Stress * 2).id(id+"_mid");
    event.recipes.createoreexcavation.drilling(Out,'{"text":' + Text + '}', Weight * 0.4, Time * 4).alwaysFinite().veinSize(Size1 * 0.18, Size2 * 0.18).biomeWhitelist(Dim).stress(Stress * 3).id(id+"_epic");
    }
    VoidMine.forEach(element => {
        BiomeRecource(element[0],element[1],element[2],element[3],element[4],element[5],element[6],element[7],element[8],element[9],element[10])
        
    });
})
