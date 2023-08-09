
global.patience = 5;
onEvent('recipes', event => {
    let alreadygotten = []
    function randomrecipe(I,n,N,id,d,h){
        if(!alreadygotten.includes(d)){
        if (d == 0){event.recipes.create.filling(Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h+1}/${global.patience}\"}'}}`).withNBT(N),[Fluid.of("minecraft:water"),Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h}/${global.patience}\"}'}}`).withNBT(n)]).id(id)}
        if (d == 1){event.recipes.create.sandpaperPolishing(Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h+1}/${global.patience}\"}'}}`).withNBT(N),Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h}/${global.patience}\"}'}}`).withNBT(n)).id(id)}
        if (d == 2){event.recipes.create.pressing(Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h+1}/${global.patience}\"}'}}`).withNBT(N),Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h}/${global.patience}\"}'}}`).withNBT(n)).id(id)}
        if (d == 3){event.recipes.create.splashing(Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h+1}/${global.patience}\"}'}}`).withNBT(N),Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h}/${global.patience}\"}'}}`).withNBT(n)).id(id)}
        if (d == 4){event.recipes.create.milling(Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h+1}/${global.patience}\"}'}}`).withNBT(N),Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h}/${global.patience}\"}'}}`).withNBT(n)).id(id)}
        if (d == 5){event.recipes.create.emptying([Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h+1}/${global.patience}\"}'}}`).withNBT(N),Fluid.of("minecraft:water")],Item.of(I,`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${h}/${global.patience}\"}'}}`).withNBT(n)).id(id)}
        alreadygotten.push(d)
        }
        else{randomrecipe(I,n,N,id,Math.floor(Math.random()*6),h)}
    }
    event.recipes.create.cutting(Item.of('kubejs:fragment_of_patience',`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${1}/${global.patience}\"}'}}`).withNBT('\{stage:1\}'),Item.of('kubejs:fragment_of_patience').withNBT('\{stage: \}'))
    event.recipes.create.deploying([Item.of("kubejs:lootbag_poggers").withChance(1/1000),Item.of('kubejs:fragment_of_patience'),Item.of('create:chocolate_glazed_berries',1).withChance(1/16),Item.of('minecraft:barrel', "{RepairCost:0,display:{Name:'{\"text\":\"Barrel Of Patience\"}'}}").enchant('minecraft:looting',2).withChance(1/2)],[Item.of('kubejs:fragment_of_patience',`{display:{Name:'{\"text\":\"Fragment Of Patience, §6Stage:${global.patience}/${global.patience}\"}'}}`).withNBT('\{stage:5\}'),"minecraft:iron_ingot"])
    for (let i = 1; i < global.patience; i++) {
        randomrecipe("kubejs:fragment_of_patience",`\{stage:${i}\}`,`{\stage:${i+1}\}`,"cae:test_of_fortnite_"+i,Math.floor(Math.random()*6),i)
        
        
    }
})

