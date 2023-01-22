function fibonacci(num) {
  // type your code here
  let num1 = 0
  let num2 = 1
  // let num3 = num1 + num2
  // let num4 = num2 + num3
  let series = [num1, num2]

  for (let i = 2; i < num + 1; i++) {
    series.push(num1 + num2)
    num1 = num2
    num2 = series[i]
  }


  return series[num]

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 6765");
  console.log("=>", fibonacci(20));

  console.log("");

  console.log("Expecting: 377");
  console.log("=>", fibonacci(14));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Return the nth element of the fibonacci series

// Initialize variables for two numbers in the series