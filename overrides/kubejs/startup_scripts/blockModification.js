
  onEvent('block.modification', event => {
    event.modify('ae2:sky_stone', block => {
      block.destroySpeed = 4
      block.hasCollision = true
      block.explosionResistance = 1
    })
    event.modify('cae:portal_core', block => {
      block.destroySpeed = -1
      block.hasCollision = true
      block.explosionResistance = -1
    })
    event.modify('cae:veridium_catalyst', block =>{
      block.destroySpeed = -1
    })
    event.modify('cae:asurine_catalyst', block =>{
      block.destroySpeed = -1
    })
    event.modify('cae:ochrum_catalyst', block =>{
      block.destroySpeed = -1
    })
    event.modify('cae:crimsite_catalyst', block =>{
      block.destroySpeed = -1
    })
    event.modify('waystones:waystone', block =>{
      block.destroySpeed = 90
    })
    event.modify('waystones:mossy_waystone', block =>{
      block.destroySpeed = 90
    })
    event.modify('waystones:sandy_waystone', block =>{
      block.destroySpeed = 90
    })
  })