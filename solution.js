const reverseString = str => {
    if( str.length <= 1 ) return str[0];

    let result = reverseString( str.slice(1) )
    result += str[0]
    return result;
}


const string = "hello world";
console.log( reverseString(string) ); // dlrow olleh



// function reverseArrayRecursion(arr) {
//     if (arr.length <= 1) return [arr[0]];
//     const result = reverseArrayRecursion(arr.slice(1));
//     result.push(arr[0]);
//     return result;
// }
// console.log(reverseArrayRecursion([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]