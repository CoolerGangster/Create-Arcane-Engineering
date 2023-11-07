onEvent('recipes',event =>{
   let removalObj = {
        Mixers : ["copper","railway","brass"],
        Shafts: ["birch","oak","spruce","jungle","acacia","dark_oak","crimson","warped","glass","brass"]
   }
        removalObj.Mixers.forEach(mixer => {
  
                event.remove({output:`createcasing:${mixer}_mixer`})
                event.smithing(`createcasing:${mixer}_mixer`,"create:mechanical_mixer",`create:${mixer}_casing`)

        })
        
        removalObj.Shafts.forEach(mixer => {
  
            event.remove({output:`createcasing:${mixer}_shaft`})

    })
    event.remove({id:`createcasing:crafting/mixer/industrial_iron`})
    event.smithing("createcasing:industrial_iron_mixer","create:mechanical_mixer","create:industrial_iron_block")
    let cool = {
        
        Press: ["brass","copper","railway"],
        Depots: ["brass","copper","railway"]
    }
       // "industrial_iron"
    cool.Depots.forEach(Depot => {
        event.shapeless(`createcasing:${Depot}_depot`,["create:andesite_alloy",`create:${Depot}_casing`])
    
    })
    event.shapeless(`createcasing:industrial_iron_depot`,["create:andesite_alloy",`create:industrial_iron_block`])
    cool.Press.forEach(Press => {
        event.remove({id:`createcasing:crafting/press/${Press}`})

        event.smithing(`createcasing:${Press}_press`,`create:mechanical_press`,"create:" +Press+ `_casing`)
    })
    event.remove({id:`createcasing:crafting/press/industrial_iron`})

    event.smithing(`createcasing:industrial_iron_press`,`create:mechanical_press`,"create:" +"industrial_iron"+ `_block`)
})