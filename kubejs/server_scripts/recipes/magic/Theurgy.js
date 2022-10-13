onEvent('recipes', event => {
    //purification
    event.custom({
        "type": "theurgy:purification",
        "ingredient": {
            "item": "mana-and-artifice:vinteum_ore"
        },
        "essentia": [
            {
                "item": "theurgy:terra_essentia",
                "count": 10
            }
        ],
        "result": {
            "item": "mana-and-artifice:vinteum_dust",
            "count": 2
        }
    })
    event.custom({
        "type": "theurgy:purification",
        "ingredient": {
            "item": "astralsorcery:starmetal_ore"
        },
        "essentia": [
            {
                "item": "theurgy:terra_essentia",
                "count": 10
            }
        ],
        "result": {
            "item": "astralsorcery:starmetal_ingot",
            "count": 2
        }
    })
    event.custom({
        "type": "theurgy:replication",
        "ingredient": {
            "item": "minecraft:cod"
        },
        "essentia": [
            {
                "item": "theurgy:aqua_essentia",
                "count": 10
            }
        ],
        "result": {
            "item": "minecraft:cod",
            "count": 2
        }
    })
    event.custom({
        "type": "theurgy:replication",
        "ingredient": {
            "item": "minecraft:salmon"
        },
        "essentia": [
            {
                "item": "theurgy:aqua_essentia",
                "count": 10
            }
        ],
        "result": {
            "item": "minecraft:salmon",
            "count": 2
        }
    })
    event.custom({
        "type": "theurgy:replication",
        "ingredient": {
            "item": "minecraft:tropical_fish"
        },
        "essentia": [
            {
                "item": "theurgy:aqua_essentia",
                "count": 10
            }
        ],
        "result": {
            "item": "minecraft:tropical_fish",
            "count": 2
        }
    })

})