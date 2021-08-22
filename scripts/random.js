/**
 * Retrieves a random value from the input list.
 * 
 * @param {List} inList The list to retrieve a random value from
 * @returns A random value from the list. Undefined if the list is empty or null
 */
 export function getRandomValueFromList(inList) {
    if (!inList || !inList.length) return undefined;

    const len = inList.length;
    const randomIndex = Math.floor(Math.random() * len);
    return inList[randomIndex];
}