'use strict'

const a = [10,1,4,8,1,5,3,2,9]

console.log(bubble(a))
console.log(a)
console.log(bubble2(a))

function bubble (Arr) {
  let arr = [].concat(Arr)
  let median
  let count = 0
  for (let outer = arr.length - 1; outer >= 1; outer--){
    for (let inner = 0; inner < outer; inner++) {
      count++
      if (arr[inner] > arr[inner + 1]) {
        median = arr[inner]
        arr[inner] = arr[inner + 1]
        arr[inner + 1] = median
      }
    }
  }
  return {sort: arr, count}
}

function bubble2 (Arr) {
  let arr = [].concat(Arr)
  let n = arr.length - 1
  let count = 0
  let temp
  let exchange
  for (let j = n - 1; j >= 1; j--) {
    exchange = false
    for (let i = 0; i <= j; i++) {
      count++
      if (arr[i] > arr[i + 1]) {
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        if (!exchange) exchange = true
      }
    }
    if (!exchange) break
  }
  return {sort: arr, count}
}
