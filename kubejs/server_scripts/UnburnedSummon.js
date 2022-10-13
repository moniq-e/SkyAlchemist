onEvent("block.right_click", e => {
    const { block, item, world } = e

    if (block.id == 'minecraft:sand' && item.id == 'pyromancer:fractal_cucumber') {
        world.server.runCommandSilent(`/execute in ${world.getDimension()} run fill ${block.x} ${block.y} ${block.z} ${block.x} ${block.y} ${block.z} minecraft:air replace ${block.id}`)
        world.server.runCommandSilent(`/execute in ${world.getDimension()} run particle minecraft:block ${block.id} ${block.x} ${block.y} ${block.z} 0 0 0 0.1 20`)
        item.count--
        world.server.runCommandSilent(`/execute in ${world.getDimension()} run summon pyromancer:unburned ${block.x} ${block.y + 3} ${block.z}`)
    }
})