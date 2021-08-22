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

function updateUi() {
    document.getElementById('tactical').innerText = valueMap[ 'tacticals'];
    document.getElementById('ordinance').innerText = valueMap[ 'ordnances'];
    document.getElementById('primaryWeapon').innerText = valueMap[ 'primaryWeapons'];
    document.getElementById('antiTitanWeapon').innerText = valueMap[ 'antiTitanWeapons'];
    document.getElementById('pistol').innerText = valueMap[ 'pistols'];
    document.getElementById('kit1').innerText = valueMap[ 'kit1'];
    document.getElementById('kit2').innerText = valueMap[ 'kit2'];
    document.getElementById('boost').innerText = valueMap[ 'boosts'];
    document.getElementById('titan').innerText = valueMap[ 'titans'];
}

function handleReloadClick() {
    randomizeAll();
    updateUi();
}

function init() {
    document.getElementById('reloadButton').onclick = handleReloadClick;

    randomizeAll();
    updateUi();
}

init();