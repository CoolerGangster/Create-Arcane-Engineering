let activated = false

let deleteditems = []
global.minutestodeath = 20 * 60 * 10 // the number on the right dictates the amount of minutes! right now its 10

const activeconstant = 800
global.activelycounter = activeconstant;
let minAgeinTicks = 20 * 10 // the number on the right dictates the amount of seconds!
let timeallowedinticks = 20 * 10
let passageitem = "minecraft:diamond"
let deathsubtractor = 1
function sectomin(sec){

    return sec;
}

onEvent('level.tick', event => {
    if(!activated) return
    function ReloadChest(){
        event.server.runCommandSilent(`execute in cae:clearlag run fill -6 61 -14 14 81 8 air`)
        event.server.runCommandSilent(`execute in cae:clearlag run setblock -2 64 -7 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"cae:chest",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
        event.server.runCommandSilent(`execute in cae:clearlag run setblock -2 63 -7 minecraft:redstone_block`)
        event.server.runCommandSilent(`execute in cae:clearlag run fill -2 64 -7 -2 63 -7 air`)
    }
    function SetChest(eitem){
        if(event.level.dimension == "cae:clearlag"){ 
            
        event.level.getBlock(0,73,-2).mergeEntityData(eitem)}
    }
    if (global.minutestodeath > 0){return}else{
        ReloadChest()
    let Kaunt = 0;
    event.level.getEntities('@e[type=item]').forEach(item => {
        if(item.fullNBT.getInt("Age") >= minAgeinTicks){
            
            let id = item.fullNBT.getCompound("Item").getString("id")
            let count = item.fullNBT.getCompound("Item").getInt("Count")
            Kaunt += count;
            //SetChest(Item.of(id,count))

            let bool = false
            for (let index = 0; index < deleteditems.length; index++) {
                    if (deleteditems[index] != null){
                    if (deleteditems[index].id === id){
                        if(deleteditems[index].count + count <= 64){deleteditems[index].count += count;bool = true;}
                    }
                }
            }
            if(!bool){deleteditems.push(Item.of(id,count));}
            item.remove()
            
    }
    
    })
    if(Kaunt > 0){
    event.server.tell(Text.gold(Kaunt + " Items that are older than "+Math.floor(minAgeinTicks/20)+" seconds have been moved to be destroyed!"));
    event.server.tell(Text.darkGreen(`You can save these items by rightclicking with a ${Item.of(passageitem)}, you have ${Math.floor(activeconstant/20)} seconds!`))}
    let dumbshit = '{Inventory:{Items:['
    let slot = 1;
    deleteditems.forEach(G =>{
        if(slot == 0){
            dumbshit += '{Slot:'+ slot + ', id:"'+G.id+'", Count:'+G.count+'}'
        }
        if(slot < deleteditems.length){

            dumbshit += '{Slot:'+ slot + ', id:"'+G.id+'", Count:'+G.count+'},'
        }
        if (slot == deleteditems.length){
            
            dumbshit += '{Slot:'+ slot + ', id:"'+G.id+'", Count:'+G.count+'}'
        }
        slot++;
    })

    dumbshit += ']}}'
    //event.server.tell(dumbshit)
    SetChest(dumbshit)
    global.minutestodeath = 20 * 60 * 5
    global.activelycounter = activeconstant;
    deleteditems = []
    }
})
onEvent('level.tick',event => {
    if(!activated) return
    if(event.level.dimension == 'cae:clearlag'){
        event.level.getEntities('@e[type=player]').forEach(player =>{
            if (global.activelycounter < -1 * timeallowedinticks && player.level.dimension == "cae:clearlag"){
                event.server.runCommandSilent(`effect give ${player.name.text} minecraft:slow_falling 50 100 true`)
                event.server.runCommandSilent(`effect give ${player.name.text} minecraft:absorption 100 100 true`)
                event.server.runCommandSilent(`execute in minecraft:overworld run tp ${player.name.text} 0 100 0`)
                event.server.runCommandSilent(`execute in minecraft:overworld run tp ${player.name.text} 0 100 0`)
                event.player.tell("The Enigmatic Essence of a Dimension filled with nothingness, made you transmute space and time, as to where you ended up in the overworld!")
            }
            
        })
    global.minutestodeath -= deathsubtractor;
    if (global.minutestodeath == 20 * 60 * 2){event.server.tell(Text.darkRed("Items on the ground will be cleared in 2 Minutes!"))}
    if (global.minutestodeath == 20 * 60){event.server.tell(Text.darkRed("Items on the ground will be cleared in 1 Minute!"))}
    if (global.minutestodeath == 20 * 30){event.server.tell(Text.darkRed("Items on the ground will be cleared in 30 Seconds!"))}}
})

if(global.activelycounter>0){
onEvent('item.right_click',event =>{
    if(!activated) return
    if(event.level.dimension != "cae:clearlag" && !(global.activelycounter < -1 * timeallowedinticks)){
    if(event.item.id == passageitem){
        let flooredx = Math.floor(event.player.x)
        let flooredy = Math.floor(event.player.y)
        let flooredz = Math.floor(event.player.z)
        let dimension = event.level.dimension
        
        event.player.setStatusMessage(Text.darkRed(`You have ${Math.floor(timeallowedinticks/20)} seconds left!`))
        event.server.runCommandSilent(`execute in cae:clearlag run tp ${event.player.name.text} 3 67 -4`)
        event.server.runCommandSilent(`gamemode adventure ${event.player.name.text}`)
        event.server.scheduleInTicks(timeallowedinticks, c=>{
            c.server.runCommandSilent(`execute in ${dimension} run tp ${event.player.name.text} ${flooredx} ${flooredy} ${flooredz}`)
            c.server.runCommandSilent(`execute in ${dimension} run tp ${event.player.name.text} ${flooredx} ${flooredy} ${flooredz}`)
            c.server.runCommandSilent(`gamemode survival ${event.player.name.text}`)
        })
    }
}
    
})
onEvent('level.tick',event => {
    if(!activated) return
    if(event.level.dimension != 'minecraft:overworld'){return}
    else{
    global.activelycounter--;}
})
}