/* 
  Description ⚔️
    In the following 6 digit number:

    283910
    91 is the greatest sequence of 2 digits.

    In the following 10 digit number:

    1234567890
    67890 is the greatest sequence of 5 digits.

    Complete the solution so that it returns the largest five digit number found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

*/

function solution(digits) {
  let fiveDigitsNumbers = []
  const digitsArray = digits.split('')

  digitsArray.forEach((number, index) => {
    if (index + 5 > digitsArray.length) return
    const fiveDigitNumber = digitsArray.slice(index, index + 5).join('')
    fiveDigitsNumbers = [...fiveDigitsNumbers, fiveDigitNumber]
  })

  return Math.max(...fiveDigitsNumbers)
}

// Test to pass
console.log(solution('1234567890')) // => It should return 67890