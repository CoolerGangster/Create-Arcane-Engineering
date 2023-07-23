
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
  })