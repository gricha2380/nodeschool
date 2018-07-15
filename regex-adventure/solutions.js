
// LITERALLY
// module.exports = function (string) {
//     return /LITERALLY/.test(string);
// }

// ANCHOR START
// module.exports = function (string) {
//     return /^LITERALLY/.test(string);
// }

// ANCHOR END
// module.exports = function (string) {
//     return /BANANAS$/.test(string);
// }

// CHARACTER CLASS
// module.exports = function (str) {
//     return /^[aeiou0-9]/.test(str);
// }


// NEGATED CHARACTER CLASS
// module.exports = function (str) {
//     return /^[^0-9][^A-Z]/.test(str)
// }

// the first character is not a digit
// and the second character is not a capital letter.

// META
// Export a function that takes a string argument and returns whether the string
// ends with a literal `.` (dot).
// module.exports = function (str) {
//     return /[.]$/.test(str)
// }

// QUANTIFIER
// Export a function that takes a filename string as an argument and returns
// whether the entire filename is a sequence of one or more digits followed by
// `.jpg` or `.jpeg`.
module.exports = function (str) {
    return /[0-9]+[.jpe?g]+/.test(str);
}


// SPLIT

// CAPTURE

// CAPTURE BREAKWORD

// ALTERATION

// QUANTIFIED GROUP

// QUOTES

// BLINK