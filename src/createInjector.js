const opts = {
  open: '{{',
  close: '}}',
  last: '$'
}

const findPlaceholdersRegExp = new RegExp(`${opts.open}(.*?)${opts.close}`, 'g')

/**
 * Gets from a given slice of the valuesMap the value at the given key
 *
 * @param {Object|Array} valuesMapSlice - slice of the values map
 * @param {string} key - Key where to look for a value in the values map slice
 * @returns {any} - Value of the values map slice at the given key
 */
function getValueByKey (valuesMapSlice, key) {
  return key === opts.last && Array.isArray(valuesMapSlice)
    ? valuesMapSlice.at(-1)
    : valuesMapSlice[key]
}

/**
 * Replaces placeholders by values from given values map into given string
 *
 * @param {string} keyPath - Dot seperated keypath of the value in valuesMap
 * @param {Object|Array} valuesMap - values map
 * @returns {string} - Value from valuesMap found at the given keyPath
 */
function getValueByKeyPath (keyPath, valuesMap) {
  return keyPath.split('.').reduce(getValueByKey, valuesMap)
}

/**
 * Replaces placeholders by values from given values map into given string
 *
 * @param {string} str - String in which replace placeholders
 * @param {Object|Array} valuesMap - values map
 * @returns {string} - String in which placeholders have been replaced by values
 */
function injectValuesToString (str, valuesMap) {
  return str.replace(findPlaceholdersRegExp, (placeholder, keyPath) => {
    return getValueByKeyPath(keyPath, valuesMap) || placeholder
  })
}

export default injectValuesToString
