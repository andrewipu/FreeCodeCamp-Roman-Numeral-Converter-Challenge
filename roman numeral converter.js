function convertToRoman(num) {
    const numerals = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };
    //Save inferred numerals
    let infNumerals = [];
    
    //Save Roman Numerals 
    let romanNumerals = [];

    for (let key of Object.keys(numerals).sort((a, b) => b - a)) {
        //convert key to integer
        let value = parseInt(key);
        while (num >= value) {
            infNumerals.push(numerals[key]);
            num -= value;
        }
    }

    //Concatenate and return the numerals as a string
    romanNumerals = infNumerals.join('');
    return romanNumerals;

}

convertToRoman(4);