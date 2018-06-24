/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
  let temp = arr2.map( item => item );
  if (arr1.length != temp.length) return false;
  return (temp.sort((a, b) => a - b).every((item, i) => item == arr1[i])); 
}

export default haveSameItems;
