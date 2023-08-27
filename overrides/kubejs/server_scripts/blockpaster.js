onEvent('block.right_click', event => {
    if (event.item.id == "kubejs:warp_fragments"){
        console.log(event.block.id)
    }
})