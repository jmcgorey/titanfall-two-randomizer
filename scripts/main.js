import {getRandomValueFromList} from "./random.js";
import {titanfall2Options} from "./titanfall-two-values.js";

const randomValues = titanfall2Options.map(function(optionSet) {
    return {
        category: optionSet.singularLabel,
        value: getRandomValueFromList(optionSet.values).name
    };
});

console.log('Random Values: ');
randomValues.forEach(val => console.log(val));