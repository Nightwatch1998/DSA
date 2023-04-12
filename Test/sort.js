const {quickSort} = require("../Sort/quickSort")
const {mergeSort} = require("../Sort/mergeSort")
const {shellSort} = require("../Sort/shellSort")
const {bucketSort} = require("../Sort/bucketSort")
const {heapSort} = require("../Sort/heapSort")
const {countingSort} = require("../Sort/countingSort")

console.time("dish")
let arr = [49,9,32,50,39,5,20,20,37,14,5,34,21,19]

let res = countingSort(arr)
// let res = mergeSort(arr)
console.log(res)
console.timeEnd("dish")