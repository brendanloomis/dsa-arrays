// URLify a string O(n)
function urlString(str) {
    let url = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            url += '%20';
        } else {
            url += str[i];
        }
    }
    return url;
}

console.log(urlString('tauhida parveen'));
console.log(urlString('www.thinkful.com /tauh ida parv een'));

// Filtering an array O(n)
function filterArray(arr, num) {
    const filtered = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}
let array = [1, 2, 3, 6, 7, 8, 9, 2, 4];
console.log(filterArray(array, 5));

// Max sum in the array O(n^2)
function maxSum(arr) {
    let maxSum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));

// Merge arrays
function mergeArray(arr1, arr2) {
    let newArr = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] - arr2[index2] > 0) {
            newArr.push(arr2[index2++]);
        } else {
            newArr.push(arr1[index1++]);
        }
    }

    if (index2 < arr2.length) {
        newArr = [...newArr, ...arr2.slice(index2)];
    } else {
        newArr = [...newArr, ...arr1.slice(index1)];
    }

    return newArr;
}

let array1 = [1, 3, 6, 8, 11];
let array2 = [2, 3, 5, 8, 9, 10];
console.log(mergeArray(array1, array2));

// remove characters O(n^2)
function removeCharacters(str, chars) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let found = false;
        for (let j = 0; j < chars.length; j++) {
            if (str[i] === chars[j]) {
                found = true;
            }
        }

        if (!found) {
            result += str[i];
        }
    }
    return result;
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// Products O(n^2)
function products(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }

        result.push(product);
    }
    return result;
}

const prodArray = [1, 3, 9, 4];
console.log(products(prodArray));

// 2D array

// String rotation
function stringRotation(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        let temp = str2.slice(i) + str2.substring(0, i);

        if (str1 === temp) {
            return true;
        }
    }
    return false;
}

console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));