import {getRandomValueFromList} from "./random.js";
import {allValues as titanfall2Options} from "./titanfall-two-values.js";


const valueMap = {};

function randomizeAll() {
    const randomValues = titanfall2Options.map(function(optionSet) {
        return {
            categoryLabel: optionSet.singularLabel,
            categoryName: optionSet.name,
            value: getRandomValueFromList(optionSet.values).name
        };
    });

    for(const val of randomValues) {
        valueMap[val.categoryName] = val.value;
    }
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