/*onEvent('item.right_click', event =>{
    let item = event.item
    if (item.id != "kubejs:track_tool"){return}
    item.setNbt('{Mode: 1,Range: 1,x: 1,z: 1}')
    function updatenbt(mode,range){
        
        item.nbt.putInt("Mode",mode)
        item.nbt.putInt("Range",range)

        event.server.tell(event.item.nbt.toString())
        
    }       
    updatenbt(0,0,{x:10000,y:10000,z:1000000})

    if(event.player.mainHandItem())

})*/