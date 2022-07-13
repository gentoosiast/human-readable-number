module.exports = function toReadable(number) {
    const lookupTable = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const result = [];

    if (number >= 100) {
        const hundreds = Math.trunc(number / 100);
        result.push(`${lookupTable[hundreds]} hundred`);
        number -= hundreds * 100;
    }
    if (number >= 10 && number in lookupTable) {
        result.push(lookupTable[number]);
    } else if (number >= 10) {
        const tens = Math.trunc(number / 10) * 10;
        const ones = number % 10;
        result.push(`${lookupTable[tens]} ${lookupTable[ones]}`);
    } else if (number !== 0 || result.length === 0) {
        result.push(lookupTable[number]);
    }
    return result.join(" ");
};
