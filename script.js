// Quick Question #1

// What does the following code return?

// new Set([1,1,2,2,3,4])

// ANSWER: {1, 2, 3, 4}

//------------------------------------------------------------------

// Quick Question #2

// What does the following code return?

// [...new Set("referee")].join("")

// ANSWER: "ref"

//------------------------------------------------------------------

// Quick Question #3

// What does the Map m look like after unning the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// ANSWER:
// 0: {Array(3) => true}
// 1: {Array(3) => false}

//------------------------------------------------------------------

// hasDuplicate //

//turn array data into a set, removing duplicates and compare to arr
const hasDuplicate = arr => { 
    return new Set(arr).size !== arr.length;
};

//------------------------------------------------------------------

// vowelCount //

function vowelCount(str) {
    const vowelMap = new Map();
    const vowels = new Set("aeiou");
    
    for(let letter of str) {
        if (vowels.has(letter)) {
            const currentVowelCount = vowelMap.get(letter) || 0;
            vowelMap.set(letter, currentVowelCount + 1);
        }
    }
    return vowelMap;
}