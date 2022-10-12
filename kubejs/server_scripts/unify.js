// Whether or not to unify items in inventory
global["INVENTORY_UNIFY"] = false
// Whether or not to unify items in world
global["ITEM_UNIFY"] = false
// Whether or not to unify recipes
global["RECIPE_UNIFY"] = true
// Whether or not to hide not-first materials in jei (requires secondary script)
global["HIDE_UNIFIED_ITEMS"] = true
// Whether or not to disable non-priority ore-gen
global["UNIFY_ORE_GEN"] = true

// Mod priorities
global["unifypriorities"] = [
    "silentgems"
]

// Add oredictionary tags here to unify (or use javascript to generate it!)
var tags = [
    "forge:plates/iron",
    "forge:gears/iron"
]

// Easier way to add multiple tags (feel free to add empty extra tags, this will ignore them)
var tagGen = [
    "gold=gears,plates",
    "diamond=gears,plates",
    "copper=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "tin=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "aluminum=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "lead=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "silver=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "nickel=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "bronze=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "steel=storage_blocks,ingots,nuggets,dusts",
    "platinum=storage_blocks,ingots,nuggets,dusts,ores",
    "uranium=storage_blocks,ingots,nuggets,dusts,ores",
    "iridium=storage_blocks,ingots,nuggets,dusts,ores",
    "zinc=storage_blocks,ingots,nuggets,dusts,ores",
    "osmium=ingots,ores",
    "sulfur=dusts,ores"
]
for (let line of tagGen) {
    let data = line.split("=")
    for (let type of data[1].split(",")) {
        tags.push("forge:" + type + "/" + data[0])
    }
}

// Replace input and output of recipes (and iterate over tags!)
onEvent("recipes", event => {
    // Iterate over tags (they should be loaded)
    var tagitems = new Map()
    tagLoop:
    for (let tag of tags) {
        let ingr = Ingredient.of("#"+tag)
        if (ingr) {
            let stacks = ingr.getStacks().toArray()
            for (let mod of global["unifypriorities"]) {
                for (let stack of stacks) {
                    if (stack.getMod() == mod) {
                        tagitems[tag] = stack.getId()
                        continue tagLoop
                    }
                }
            }
            if (stacks.length > 0) tagitems[tag] = stacks[0].getId()
        }
    }
    // Update tags
    global["unifytags"] = tags
    global["tagitems"] = tagitems
    
    // Unify the rest
    if (global["RECIPE_UNIFY"]) {
        for (let tag of global["unifytags"]) {
            let ingr = Ingredient.of("#"+tag)
            if (ingr) {
                let stacks = ingr.getStacks().toArray()
                let oItem = global["tagitems"][tag]
                for (let tItem of stacks) {
                    event.replaceInput({}, tItem.getId(), "#"+tag)
                    event.replaceOutput({}, tItem.getId(), oItem)
                }
            }
        }
    }
})