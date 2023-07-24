function capitalize(string) {;
	let stringOut = "";
	string.split(/[ \_]/).forEach(substring =>{
		substring = substring.charAt(0).toUpperCase()+substring.slice(1);
		stringOut = stringOut + substring + " ";
	});
	return stringOut;
};

onEvent('client.generate_assets', event => {
	let rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)

	Ingredient.of(/sophisticatedbackpacks:.*_upgrade/).stacks.forEach(item => rename(item, capitalize (Item.of(item).id.replace("sophisticatedbackpacks:", "").replace("_upgrade", "") + " Slate")))

    rename("sophisticatedbackpacks:iron_backpack", "Radiant Backpack")
	rename("sophisticatedbackpacks:gold_backpack", "Brass Backpack")
	rename("sophisticatedbackpacks:diamond_backpack", "Cyberbackpack Mk 2")
	rename("sophisticatedbackpacks:netherite_backpack", "Cyberbackpack Mk 1")
})
