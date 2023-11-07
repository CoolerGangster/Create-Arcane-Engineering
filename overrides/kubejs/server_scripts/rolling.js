onEvent('recipes', event => {
  event.custom({
      type:"createaddition:rolling",
      input: {
          item: "minecraft:paper"
      },
      result: {
          item: "createaddition:straw",
          count: 1
      }
  }),
  event.custom({
    type:"createaddition:rolling",
    input: {
        item: "pneumaticcraft:plastic"
    },
    result: {
        item: "createaddition:straw",
        count: 16
    }
  })
})
