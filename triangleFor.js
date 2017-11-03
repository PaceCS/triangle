// triangleFor takes an input n and logs to the console a one-sided triangle of hashmarks w/ a height of n

function triangleFor(n) {
    // row will hold the string to be printed on the row
    let row = '#';

    // Fill in the for loop below with the correct conditions
    for (let counter =/*Put initial condition here*/; counter < /*Put final condition here*/; counter += 1) {
        console.log(row);
        row += '#';
    }

}


triangleFor(5);



















// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
const N = 4;
triangleFor(N);
printme('Testing...');
printme(`\t did you print the proper number of lines?\t ${out.length == N} `);
let val = true;
for (let i = 0; i < N; i += 1) {
    let row = '#';
    for (let j = 0; j < i; j += 1){
        row += '#';
    }
    let tVal = out[i] == row;
    val = val && tVal;
}
printme(`\t did you print a correct triangle?\t ${val}`);
