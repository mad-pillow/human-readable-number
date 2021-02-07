module.exports = function toReadable(number) {
    let words = [];
    let t,
        h = 0;
    let numbers = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number == 0) {
        words.push("zero");
    }
    if (number > 99) {
        h = parseInt(number / 100);
        words.push(numbers[h] + " hundred");
    }
    t = number % 100;
    if (t != 0) {
        if (t >= 20) {
            words.push(tens[parseInt(t / 10) - 2]);
            if (numbers[t % 10] != 0) {
                words.push(numbers[t % 10]);
            }
        }
        if (t < 20) {
            words.push(numbers[t]);
        }
    }
    let string = words.join(" ");
    return string;
};
