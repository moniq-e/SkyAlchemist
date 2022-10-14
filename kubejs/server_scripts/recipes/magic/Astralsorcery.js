function btrans(e, output, input, starlight, display) {
    e.custom({
        "type": "astralsorcery:block_transmutation",
        "input": [
            {
                "block": input,
                "display": {
                    "item": input,
                    "count": 1
                }
            }
        ],
        "output": {
            "block": output
        },
        "display": {
            "item": (display ? display : output),
            "count": 1
        },
        "starlight": starlight
    })
}

onEvent('recipes', e => {
    //infusion
    e.custom({
        "type": "astralsorcery:infuser",
        "fluidInput": "astralsorcery:liquid_starlight",
        "input": {
            "item": "minecraft:bedrock"
        },
        "output": {
            "item": "kubejs:star_infused_bedrock",
            "count": 1
        },
        "consumptionChance": 0.30,
        "duration": 400,
        "consumeMultipleFluids": true,
        "acceptChaliceInput": true,
        "copyNBTToOutputs": false
    })

    //transmutation
    btrans(e, "minecraft:sand", "minecraft:cobblestone_slab", 200)
    btrans(e, "minecraft:gravel", "minecraft:cobblestone", 200)
    btrans(e, "minecraft:iron_ore", "eidolon:smooth_stone_tiles", 400)
    btrans(e, "minecraft:dirt", "minecraft:oak_planks", 150)
    btrans(e, "minecraft:diamond_ore", "morecharcoal:sugarcane_charcoal_block", 800)
    btrans(e, "minecraft:andesite", "minecraft:stone", 400)
    btrans(e, "astralsorcery:rock_crystal_ore", "minecraft:glass", 400)
    btrans(e, "minecraft:granite", "minecraft:andesite", 400)
    btrans(e, "astralsorcery:aquamarine_sand_ore", "minecraft:terracotta", 400)
    btrans(e, "minecraft:diorite", "minecraft:granite", 400)
    btrans(e, "minecraft:blackstone", "minecraft:nether_bricks", 400)
    btrans(e, "astralsorcery:marble_raw", "minecraft:polished_basalt", 200)
    btrans(e, "minecraft:water", "minecraft:oak_leaves", 400)
    btrans(e, "eidolon:lead_ore", "minecraft:chiseled_stone_bricks", 400)
    btrans(e, "minecraft:white_wool", "minecraft:grass_block", 200)
    btrans(e, "mana-and-artifice:vinteum_ore", "eidolon:smooth_stone_bricks", 400)
    btrans(e, "occultism:copper_ore", "minecraft:polished_granite", 400)
    btrans(e, "occultism:silver_ore", "minecraft:polished_diorite", 400)
    btrans(e, "minecraft:gold_ore", "minecraft:hay_block", 400)
    btrans(e, "occultism:candle_white", "eidolon:candle", 400)
    btrans(e, "pyromancer:cinnabar_ore", "minecraft:crimson_nylium", 400)
    btrans(e, "minecraft:sea_lantern", "minecraft:quartz_block", 400)
    btrans(e, "minecraft:cocoa", "minecraft:nether_wart", 400)
    btrans(e, "minecraft:seagrass", "minecraft:grass", 400)
    btrans(e, "minecraft:kelp", "minecraft:seagrass", 400)
    btrans(e, "minecraft:oak_sapling", "minecraft:tall_grass", 200)
    btrans(e, "mysticalagriculture:infusion_pedestal", "kubejs:star_infused_bedrock", 400)
    btrans(e, "minecraft:coal_ore", "minecraft:oak_log", 400)
})