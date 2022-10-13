onEvent('recipes', e => {
    //shaped
    e.shaped('mysticalagriculture:infusion_altar', [
        'ABA',
        'BCB',
        'DDD'
    ], {
        'A': 'eidolon:arcane_gold_ingot',
        'B': 'minecraft:red_carpet',
        'C': 'turtlemancy:nether_star_of_forgiveness',
        'D': 'kubejs:star_infused_bedrock'
    })
    e.shaped('wizard-staff:wizard_staff', [
        'ABA',
        'CDC',
        ' D '
    ], {
        'A': 'minecraft:diamond',
        'B': 'minecraft:nether_star',
        'C': 'minecraft:iron_ingot',
        'D': 'minecraft:stick'
    })

    //mystical
    e.custom({
        "type": "mysticalagriculture:infusion",
        "input": { "item": "mysticalagriculture:prosperity_seed_base" },
        "ingredients": [
            { "item": "astralsorcery:marble_raw" },
            { "item": "mysticalagriculture:prudentium_essence" },
            { "item": "astralsorcery:marble_raw" },
            { "item": "mysticalagriculture:prudentium_essence" },
            { "item": "astralsorcery:marble_raw" },
            { "item": "mysticalagriculture:prudentium_essence" },
            { "item": "astralsorcery:marble_raw" },
            { "item": "mysticalagriculture:prudentium_essence" }
        ],
        "result": { "item": "mysticalagriculture:marble_seeds" }
    })
})