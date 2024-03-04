function convertToRoman(num) {
    //dictionary to held key/val pairs
    const numerals = {
        1 : "I",
        4 : "IV",
        5 : "V",
        9 : "IX",
        10 : "X",
        40 : "XL",
        50 : "L",
        90 : "XC",
        100 : "C",
        400 : "CD",
        500 : "D",
        900 : "CM",
        1000 : "M"
    };
    let infNumerals = [];
    let result;

    //infer dictionary and grab corresponding
    for ([key, val] of Object.entries(numerals)) {
        console.log(val);
        console.log(key);
        if (key == num) {
            result = val;
            console.log(val);
        }
    }

   }
   
   convertToRoman(1);