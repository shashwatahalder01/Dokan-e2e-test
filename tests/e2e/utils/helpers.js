


module.exports = {
// replace '_' to space & capitalize first letter of string
replaceAndCapitalize: (string) => string.replace('dokan','vendor').replace('_',' ').replace(/^\w{1}/, letter => letter.toUpperCase()),

// replace '_' to space & capitalize first letter of each word
replaceAndCapitalizeEachWord: (string) => string.replace('_',' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
getRandomArbitrary: (min, max) => Math.random() * (max - min) + min,

}

