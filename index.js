const restrictedWords = require("./restrictedWords.json");//if can require
exports.restrictedWords = restrictedWords;
exports.isForbiddenName = (name) => restrictedWords.findIndex(name) >= 0