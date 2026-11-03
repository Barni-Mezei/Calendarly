const validator = require("../validator");

const testCases = [
    {
        input: " 23.6      ",
        tests: [
            // Type checks
            {
                method: validator.isInteger,
                args: [],
                expected: false,
            },
            {
                method: validator.isFloat,
                args: [],
                expected: true,
            },
            {
                method: validator.isNumber,
                args: [],
                expected: true,
            },

            {
                method: validator.hasLength,
                args: [],
                expected: false,
            },


            // Range tests
            {
                method: validator.isInRange,
                args: [23, 24],
                expected: true,
            },
            {
                method: validator.isInRange,
                args: [-1, 1],
                expected: false,
            },
            {
                method: validator.isInRange,
                args: [0, 100],
                expected: true,
            },
        ]
    }
];

// Run test cases
let passedCases = 0;
const totalCases = testCases.length;
for (let i = 0; i  totalCases; i++) {
    const testCase = testCases[i];

    let passedTests = 0;
    for (let test of testCase.tests) {
        let args = [testCase.input];
        args += test.args;
        const result = test.method(...args);
        if (result === test.expected) passedTests++;
    }
    
    if (passedTests) {}
}

for (let userInput of values) {
    console.log(`User in: '${userInput}'`);

    let isInt = validator.isInteger(userInput);
    console.log("- int:\t", isInt);

    let isFloat = validator.isFloat(userInput);
    console.log("- flt:\t", isFloat);

    let isNum = validator.isNumber(userInput);
    console.log("- num:\t", isNum);

    console.log("");
}
