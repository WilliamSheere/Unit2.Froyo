function countFroyoFlavors(input) {
	const flavors = input.split(",");

	const flavorCount = {};

	for (const flavor of flavors) {
		const trimmedFlavor = flavor.trim();

		if (flavorCount[trimmedFlavor]) {
			flavorCount[trimmedFlavor]++;
		} else {
			flavorCount[trimmedFlavor] = 1;
		}
	}
	return flavorCount;
}

const userInput = prompt("Enter a list of comma-separated froyo flavors:");

if (userInput) {
	const flavorCounts = countFroyoFlavors(userInput);
	console.table(flavorCounts);
}
