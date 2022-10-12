onEvent('item.registry', event => {
	event.create('filosofal_shard').displayName('Filosofal Shard').rarity(RARITY_UNCOMMON)
})

onEvent('block.registry', event => {
	event.create('star_infused_bedrock').material('rock').hardness(200).displayName('Star Infused Bedrock')
})