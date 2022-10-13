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
})