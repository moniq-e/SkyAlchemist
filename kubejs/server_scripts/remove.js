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
    'mysticalagriculture:supremium_sword',
    //changed
    'cobblefordays:tier_4',
    'mysticalagriculture:infusion_altar',
    'mysticalagriculture:infusion_pedestal',
    'wizard-staff:wizard_staff'
]

onEvent('recipes', e => {
    removed.forEach(item => {
        e.remove({ output: item })
    })
})