/**
 * Imperative & Declarative for Functional programming.
 * 
 * Imperative (命令式): 我們指導電腦如何做，而不是告訴電腦我們要什麼。
 * 
 * Declarative (聲明式): 函式提供一個表達式，告訴程式我要的是什麼。可擴展性強。
 * 
 * 
 * Reference:
 *  - https://en.wikipedia.org/wiki/Functional_reactive_programming
 *  - https://www.jianshu.com/p/5355f526185f
 */


{
  // Imperative approach (命令式)
  // In the imperative approach, we're using a loop to iterate over the array and conditionally add elements to a new array. 
  // This approach involves more code and is more prone to errors since we need to manage the loop variable, the index, and the new array. 
  // It's also less expressive, making it harder to understand the intent of the code.
  const numbers = [1, 2, 3, 4, 5];

  // Imperative filtering
  const filteredNumbers: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 2) {
      filteredNumbers.push(numbers[i]);
    }
  }

  console.log(filteredNumbers); // Output: [3, 4, 5]


  // Declarative approach (聲明式)
  // In the declarative approach, we're using the filter method to create a new array based on a filtering condition. 
  // This approach is more concise, expressive, and easier to understand. 
  // It's also less prone to errors since we're using a built-in method that handles the iteration and the new array creation for us. 
  // This is an example of functional programming because we're using a higher-order function (filter) to transform an array in a declarative way, without modifying the original array or relying on mutable state.
  const numbers2 = [1, 2, 3, 4, 5];

  // Declarative filtering
  const filteredNumbers2 = numbers2.filter(number => number > 2);

  console.log(filteredNumbers2); // Output: [3, 4, 5]
}
