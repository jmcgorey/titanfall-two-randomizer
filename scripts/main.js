import {getRandomValueFromList} from "./random.js";
import {
    PRIMARY_WEAPONS,
    ANTI_TITAN_WEAPONS,
    PISTOLS,
    ORDNANCES,
    TACTICALS,
    KIT1,
    KIT2,
    BOOSTS,
    TITANS,
    ALL_VALUES
} from "./titanfall-two-values.js";


const valueMap = {};

function randomizeAll() {
    for(const category of ALL_VALUES) {
        getRandomValueFromCategory(category);
    }
}

function getRandomValueFromCategory(category) {
    valueMap[category.name] = getRandomValueFromList(category.values).name;
    return valueMap[category.name];
}

/**
 * Updates the UI with the current state of the value map
 */
function updateUi() {
    document.getElementById('tactical').innerText = valueMap[ 'tacticals'];
    document.getElementById('ordnance').innerText = valueMap[ 'ordnances'];
    document.getElementById('primaryWeapon').innerText = valueMap[ 'primaryWeapons'];
    document.getElementById('antiTitanWeapon').innerText = valueMap[ 'antiTitanWeapons'];
    document.getElementById('pistol').innerText = valueMap[ 'pistols'];
    document.getElementById('kit1').innerText = valueMap[ 'kit1'];
    document.getElementById('kit2').innerText = valueMap[ 'kit2'];
    document.getElementById('boost').innerText = valueMap[ 'boosts'];
    document.getElementById('titan').innerText = valueMap[ 'titans'];
}

/**
 * Rerolls the category corresponding to the button that was clicked and
 * updates the UI with the new value(s).
 * 
 * @param {Event} event The click event from the clicked button
 */
function handleRerollClick(event) {
    const category = event.target.dataset.category;
    rerollCategory(category);
    updateUi();
}

/**
 * Re-rolls the spcified category.  If 'all' is passed in, all
 * categories are re-rolled.
 * 
 * @param {String} categoryString The name of the category to re-roll
 */
function rerollCategory(categoryString) {
    if (categoryString === 'tacticals') {
        getRandomValueFromCategory(TACTICALS);
    } else if (categoryString === 'ordnances') {
        getRandomValueFromCategory(ORDNANCES);
    } else if (categoryString === 'primaryWeapons') {
        getRandomValueFromCategory(PRIMARY_WEAPONS);
    } else if (categoryString === 'antiTitanWeapons') {
        getRandomValueFromCategory(ANTI_TITAN_WEAPONS);
    } else if (categoryString === 'pistols') {
        getRandomValueFromCategory(PISTOLS);
    } else if (categoryString === 'kit1') {
        getRandomValueFromCategory(KIT1);
    } else if (categoryString === 'kit2') {
        getRandomValueFromCategory(KIT2);
    } else if (categoryString === 'boosts') {
        getRandomValueFromCategory(BOOSTS);
    } else if (categoryString === 'titans') {
        getRandomValueFromCategory(TITANS);
    } else if (categoryString === 'all') {
        randomizeAll();
    }
}

/**
 * Sets up the initial state of the randomizer and sets up any
 * needed event handlers.
 */
function init() {
    document.getElementById('rerollTacticalBtn').onclick = handleRerollClick;
    document.getElementById('rerollOrdnanceBtn').onclick = handleRerollClick;
    document.getElementById('rerollPrimaryWeaponBtn').onclick = handleRerollClick;
    document.getElementById('rerollAntiTitanWeaponBtn').onclick = handleRerollClick;
    document.getElementById('rerollPistolBtn').onclick = handleRerollClick;
    document.getElementById('rerollKit1Btn').onclick = handleRerollClick;
    document.getElementById('rerollKit2Btn').onclick = handleRerollClick;
    document.getElementById('rerollBoostBtn').onclick = handleRerollClick;
    document.getElementById('rerollTitanBtn').onclick = handleRerollClick;
    document.getElementById('rerollAllBtn').onclick = handleRerollClick;

    randomizeAll();
    updateUi();
}

init();