/**
 * Options taken from in-game. Typed out by hand
 */

export const PRIMARY_WEAPONS = {
	name: "primaryWeapons",
	label: "Primary Weapons",
	singularLabel: "Primary Weapon",
	values: [
		{
			name: "R-201",
			subCategory: "Assault Rifle",
		},
		{
			name: "R-101",
			subCategory: "Assault Rifle",
		},
		{
			name: "Hemlok",
			subCategory: "Assault Rifle",
		},
		{
			name: "G2",
			subCategory: "Assault Rifle",
		},
		{
			name: "Flatline",
			subCategory: "Assault Rifle",
		},
		{
			name: "CAR",
			subCategory: "Submachine Gun",
		},
		{
			name: "Alternator",
			subCategory: "Submachine Gun",
		},
		{
			name: "Volt",
			subCategory: "Submachine Gun",
		},
		{
			name: "R-97",
			subCategory: "Submachine Gun",
		},
		{
			name: "Spitfire",
			subCategory: "LMG",
		},
		{
			name: "L-STAR",
			subCategory: "LMG",
		},
		{
			name: "Devotion",
			subCategory: "LMG",
		},
		{
			name: "Kraber",
			subCategory: "Sniper",
		},
		{
			name: "Double Take",
			subCategory: "Sniper",
		},
		{
			name: "Longbow (DMR)",
			subCategory: "Sniper",
		},
		{
			name: "EVA-8",
			subCategory: "Shotgun",
		},
		{
			name: "Mastiff",
			subCategory: "Shotgun",
		},
		{
			name: "SMR",
			subCategory: "Grenadier",
		},
		{
			name: "EPG",
			subCategory: "Grenadier",
		},
		{
			name: "Softball",
			subCategory: "Grenadier",
		},
		{
			name: "Cold War",
			subCategory: "Grenadier",
		},
		{
			name: "Wingman Elite",
			subCategory: "Pistol",
		},
		{
			name: "Mozambique",
			subCategory: "Pistol",
		},
	],
};

export const ANTI_TITAN_WEAPONS = {
	name: "antiTitanWeapons",
	label: "Anti Titan Weapons",
	singularLabel: "Anti Titan Weapon",
	values: [
		{ name: "Charge Rifle" },
		{ name: "MGL" },
		{ name: "Thunderbolt" },
		{ name: "Archer" },
	],
};

export const PISTOLS = {
	name: "pistols",
	label: "Pistols",
	singularLabel: "Pistol",
	values: [{ name: "RE-45" }, { name: "P2016" }, { name: "Wingman" }],
};

export const ORDNANCES = {
	name: "ordnances",
	label: "Ordnances",
	singularLabel: "Ordnance",
	values: [
		{ name: "Gravity Star" },
		{ name: "Arc Grenade" },
		{ name: "Satchel" },
		{ name: "Firestar" },
		{ name: "Frag Grenade" },
		{ name: "Electric Smoke Grenade" },
	],
};

export const TACTICALS = {
	name: "tacticals",
	label: "Tacticals",
	singularLabel: "Tactical",
	values: [
		{ name: "Cloak" },
		{ name: "Pulse Blade" },
		{ name: "Grapple" },
		{ name: "Stim" },
		{ name: "A-Wall" },
		{ name: "Phase Shift" },
		{ name: "Holo Pilot" },
	],
};

export const KIT1 = {
	name: "kit1",
	label: "Kit 1",
	singularLabel: "Kit 1",
	values: [
		{ name: "Power Cell" },
		{ name: "Fast Regen" },
		{ name: "Ordnance Expert" },
		{ name: "Phase Embark" },
	],
};

export const KIT2 = {
	name: "kit2",
	label: "Kit 2",
	singularLabel: "Kit 2",
	values: [
		{ name: "Kill Report" },
		{ name: "Wallhang" },
		{ name: "Hover" },
		{ name: "Low Profile" },
		{ name: "Titan Hunter" },
	],
};

export const BOOSTS = {
	name: "boosts",
	label: "Boosts",
	singularLabel: "Boost",
	values: [
		{ name: "Amped Weapons" },
		{ name: "Ticks" },
		{ name: "Pilot Sentry" },
		{ name: "Map Hack" },
		{ name: "Battery Back-up" },
		{ name: "Radar Jammer" },
		{ name: "Titan Sentry" },
		{ name: "Smart Pistol" },
		{ name: "Phase Rewind" },
		{ name: "Hard Cover" },
		{ name: "Holo Pilot Nova" },
		{ name: "Dice Roll" },
	],
};

export const TITANS = {
	name: "titans",
	label: "Titans",
	singularLabel: "Titan",
	values: [
		{ name: "Ion" },
		{ name: "Scorch" },
		{ name: "Northstar" },
		{ name: "Ronin" },
		{ name: "Tone" },
		{ name: "Legion" },
		{ name: "Monarch" },
	],
};

export const ALL_VALUES = [
	PRIMARY_WEAPONS,
	ANTI_TITAN_WEAPONS,
	PISTOLS,
	TACTICALS,
	ORDNANCES,
	KIT1,
	KIT2,
	BOOSTS,
	TITANS,
];
