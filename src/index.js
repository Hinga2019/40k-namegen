// src/index.js

// Define factions and their respective official names and name parts
const factions = {
    "space-marines": {
        officialNames: [
            "Roboute Guilliman", "Leman Russ", "Sanguinius", "Vulkan",
            "Corvus Corax", "Rogal Dorn", "Ferrus Manus", "Lion El'Jonson"
        ],
        prefixes: ["Dominus", "Justicar", "Arcturus", "Kaelor", "Thalric"],
        suffixes: ["Aegis", "Bladeborn", "Valor", "Sternveil", "Gravion"],
        titles: ["the Valiant", "the Unyielding", "the Righteous", "of the 9th Legion"],
    },
    imperium: {
        officialNames: [
            "Saint Celestine", "Inquisitor Coteaz", "Lord Castellan Ursarkar E. Creed",
            "Sebastian Thor"
        ],
        prefixes: ["High Lord", "Canoness", "Arch-Confessor", "Cardinal", "Marshal"],
        suffixes: ["Vorne", "Luminis", "Lothar", "Requiel", "Cestus"],
        titles: ["of Terra", "the Pious", "the Shieldbearer", "of the Holy Light"],
    },
    chaos: {
        officialNames: [
            "Abaddon the Despoiler", "Khârn the Betrayer", "Fabius Bile",
            "Typhus, Herald of Nurgle", "Lucius the Eternal"
        ],
        prefixes: ["Malcharion", "Dravik", "Nixor", "Vexaroth", "Kor'vaal"],
        suffixes: ["Bloodclaw", "Soulflayer", "Whispered Doom", "Shadowbrand"],
        titles: ["the Despoiler", "the Unbound", "the Herald of Chaos", "of the Warp"],
    },
    eldar: {
        officialNames: [
            "Eldrad Ulthran", "Yriel of Iyanden", "Jain Zar", "Asurmen"
        ],
        prefixes: ["Aranyl", "Valinar", "Iyshara", "Myrithyn", "Elarion"],
        suffixes: ["Moonshade", "Brightspire", "Stormsong", "Nightblade", "Starweaver"],
        titles: ["the Seer", "the Eternal", "of Iyanden", "the Shadowdancer"],
    },
    orks: {
        officialNames: [
            "Ghazghkull Mag Uruk Thraka", "Makari", "Boss Snikrot"
        ],
        prefixes: ["Gorkzkrag", "Krumpwatt", "Snagga", "Kroggath", "Grinznikk"],
        suffixes: ["Smashfang", "Grimbasha", "Thundaklaw", "Ironteef", "Wargrin"],
        titles: ["the Warlord", "Da Biggest Boss", "the Smashiest", "of the Green Tide"],
    },
    necrons: {
        officialNames: [
            "Szarekh, The Silent King", "Imotekh the Stormlord",
            "Orikan the Diviner", "Trazyn the Infinite"
        ],
        prefixes: ["Xerathis", "Kalthos", "Zar'khan", "Dynast Vorikarn", "Kharosek"],
        suffixes: ["the Eternal", "Voidkeeper", "Chronomancer", "Starshaper", "Doombringer"],
        titles: ["the Infinite", "of the Void", "the Timeless", "the Shaper of Stars"],
    },
};

/**
 * Generate a random grimdark name.
 * @param {string} faction - The faction to generate the name for (e.g., "space-marines", "chaos").
 * @param {boolean} official - Whether to return an official name (default: false).
 * @returns {string} - The generated or official name.
 */
function generateName(faction = "space-marines", official = false) {
    const factionData = factions[faction];

    if (!factionData) {
        throw new Error(`Faction "${faction}" not found. Available factions: ${Object.keys(factions).join(", ")}`);
    }

    if (official) {
        return randomElement(factionData.officialNames);
    }

    const prefix = randomElement(factionData.prefixes);
    const suffix = randomElement(factionData.suffixes);
    const title = randomElement(factionData.titles);

    return `${prefix} ${suffix}, ${title}`;
}

/**
* Helper function to get a random element from an array.
* @param {Array} array - Array to pick from.
* @returns {*} - Random element.
*/
function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Export functions for external use
module.exports = { generateName };

// Example usage (for local testing)
if (require.main === module) {
    console.log("Random Space Marine Name:", generateName("space-marines"));
    console.log("Official Chaos Name:", generateName("chaos", true));
}
