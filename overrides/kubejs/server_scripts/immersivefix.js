global.blortnite = 0;
onEvent('level.tick', event => {

        if (global.blortnite != 0){global.blortnite--}
    else{
        global.blortnite = 500;
        let omgatnite = 0;
        event.level.getEntities('@e[type=immersive_weathering:falling_layer]').forEach(Orb => {
            omgatnite++
        })
        if (omgatnite >= 10
){ event.level.getEntities('@e[type=immersive_weathering:falling_layer]').forEach(Orb => {
                Orb.remove()
            })
        }
    

}
})
