let blockaray = []

let andesite = "Andesite: "
let pneumatic = "Pneumatic: "
let arcane = "Arcane: "
let machine = "machine: "
let integrated = "integrated: "
/*
onEvent('block.right_click', event => {
    if (event.item.id == "kubejs:warp_fragments"){
        blockaray.push(event.block.id)
    }
    if (event.item.id == "kubejs:fragment_of_patience"){
        blockaray.join("")  

        console.log(blockaray)

        blockaray.forEach(b => {
            if (b.includes('create') && !andesite.includes(b)){
                andesite += " "
                andesite += `${b}`
            }else if(b.includes("pneumatic") && !pneumatic.includes(b)){
                pneumatic += " "
                pneumatic += `${b}`
            }else if(b.includes("ars_nouveau") && !arcane.includes(b)){
                arcane += " "
                arcane += `${b}`
            }else if(b.includes("machine") && !machine.includes(b)){
                machine += " "
                machine += `${b}`
            }else if(b.includes("integrated") && !integrated.includes(b)){
                integrated += " "
                integrated += `${b}`
            }
        })

        console.log(andesite)
        console.log(pneumatic)
        console.log(arcane)
        console.log(machine)
        console.log(integrated)
    }
})*/
onEvent('block.right_click', event => {
    if(event.item.id == "kubejs:petrified_sheet"&& event.player.isCreativeMode()){
    let x = event.block.x
    let y = event.block.y
    let z = event.block.z
    let playerdim = event.level.dimension.toString()

    event.server.runCommandSilent(`execute in ${playerdim} run data merge block ${x} ${y} ${z} {LootTable:"cae:arcaneweak"}`)
        }
})