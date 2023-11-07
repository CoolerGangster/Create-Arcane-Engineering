onEvent('recipes', event => {
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": "thermal:sulfur_dust"
        },
        "block_in": {
            "blocks": ["minecraft:water"],
            "state": {
                "level": 0
            }
        },
        "post": [
            {
                "type": "place",
                "block": "kubejs:sulfuric_acid"
            }
            ]

    })
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": "kubejs:chrom"
        },
        "block_in": {
            "blocks": ["minecraft:water"],
            "state": {
                "level": 0
            }
        },
        "post": [
            {
                "type": "place",
                "block": "kubejs:dichromic_acid"
            }
            ]

    })
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": "kubejs:anthracene"
        },
        "block_in": {
            "blocks": ["kubejs:sulfuric_acid"],
            "state": {
                "level": 0
            }
        },
        "post": [
            {
                
                "type": "place",
                "block": "air",
                "contextual": {
                    "type": "chance",
                    "chance": 0.1
                }
            },
            {
                "type": "drop_item",
                "item": "kubejs:incomplete_anthraquinone",
            }
            ]

    })
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": "kubejs:incomplete_anthraquinone"
        },
        "block_in": {
            "blocks": ["kubejs:dichromic_acid"],
            "state": {
                "level": 0
            }
        },
        "post": [
            {
                
                "type": "place",
                "block": "air",
                "contextual": {
                    "type": "chance",
                    "chance": 0.10
                }
            },
            {
                "type": "drop_item",
                "item": "kubejs:anthraquinone",
            }
            ]

    })
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": "gunpowder"
        },
        "block_in": {
            "blocks": ["infernalexp:glow_fire"],
        },
        "post": [
            {
                "type": "drop_item",
                "item": "glowstone_dust",
            }
            ]

    })

})
