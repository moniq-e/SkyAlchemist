onEvent("jei.hide.items", event => {
    if (global["HIDE_UNIFIED_ITEMS"]) {
        try {
            for (let tag of global["unifytags"]) {
                let ingr = Ingredient.of("#" + tag)
                if (ingr) {
                    let stacks = ingr.getStacks().toArray()
                    let tItem = global["tagitems"][tag]
                    for (let s of stacks) {
                        if (s.getId() != tItem) event.hide(s.getId())
                    }
                }
            }
        } catch (err) {
            console.error("Failure to hide unified items in JEI. Press F3+T to reload client and retry")
        }
    }
})

let removed = [
    'pickletweaks:charcoal_piece',
    'mysticalagradditions:inferium_apple',
    'mysticalagradditions:prudentium_apple',
    'mysticalagradditions:tertium_apple',
    'mysticalagradditions:imperium_apple',
    'mysticalagradditions:supremium_apple',
    'mysticalagradditions:insanium_apple',
    'mysticalagriculture:inferium_helmet',
    'mysticalagriculture:inferium_chestplate',
    'mysticalagriculture:inferium_leggings',
    'mysticalagriculture:inferium_boots',
    'mysticalagriculture:prudentium_helmet',
    'mysticalagriculture:prudentium_chestplate',
    'mysticalagriculture:prudentium_leggings',
    'mysticalagriculture:prudentium_boots',
    'mysticalagriculture:tertium_helmet',
    'mysticalagriculture:tertium_chestplate',
    'mysticalagriculture:tertium_leggings',
    'mysticalagriculture:tertium_boots',
    'mysticalagriculture:imperium_helmet',
    'mysticalagriculture:imperium_chestplate',
    'mysticalagriculture:imperium_leggings',
    'mysticalagriculture:imperium_boots',
    'mysticalagriculture:supremium_helmet',
    'mysticalagriculture:supremium_chestplate',
    'mysticalagriculture:supremium_leggings',
    'mysticalagriculture:supremium_boots',
    'cobblefordays:tier_1',
    'cobblefordays:tier_2',
    'cobblefordays:tier_3',
    'cobblefordays:tier_5',
    'mysticalagriculture:inferium_sword',
    'mysticalagriculture:prudentium_sword',
    'mysticalagriculture:tertium_sword',
    'mysticalagriculture:imperium_sword',
    'mysticalagriculture:supremium_sword'
]

onEvent("jei.hide.items", e => {
    removed.forEach(item => {
        e.hide(item)
    })
})