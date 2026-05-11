
//TWO SUM - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(nums, target) {
  const indexMap = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (indexMap.has(diff)) return [indexMap.get(diff), i];
    indexMap.set(nums[i], i);
  }
  return [];
}
  /**
 * PREP-P STEPS
 * Parameters:
    * input: Array of numbers and a target number
     * output: Array of the indices of the two numbers that add up to the target
 * Result/Output: Display the result of the indices of the two numbers.
    * output a table format for proper visibility.
 * Edge case:
    * A scenario where there are no two numbers that add up to the target.
    * Example:
    * const nums = [1, 2, 3], target = 7; // Output: []
 * Pseudocode: 
 * first , I will create a variable to store the indices of the two numbers that add up to the target
 * create a loop to iterate through the array of numbers
 * for each number, calculate the difference between the target and the current number
 * check if the difference exists in a map (which stores previously seen numbers and their indices)
 * if it exists, return the indices of the current number and the number that matches the difference
 * if it does not exist, add the current number and its index to the map
 * if the loop ends without finding a match, return an empty array
 * 
    * Practical Use: This function can be used in scenarios where you need to find two values in an array that sum up to a specific target, such as in financial calculations or data analysis.     
    * Example:
    * const nums = [2, 7, 11, 15], target = 9; // Output: [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
 */


/* 2. Longest Substring Without Repeating Characters - Given a string s, find the length of the longest substring without repeating characters. */

function lengthOfLongestSubstring(s) {
  const charIndexMap = new Map(); // character -> last index
  let maxLength = 0;
  let start = 0; // start index of the current substring

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      start = charIndexMap.get(char) + 1; // move start to the right of the last occurrence
    }
    charIndexMap.set(char, end); // update the last index of the character
    maxLength = Math.max(maxLength, end - start + 1); // update max length
  }
  return maxLength;
}
/**
 * PREP-P STEPS
 * Parameters:
    * input: A string s
     * output: The length of the longest substring without repeating characters
 * Result/Output: Display the result of the length of the longest substring.
    * output a table format for proper visibility.
 * Edge case:
    * A scenario where the input string is empty or has all unique characters.
    * Example:
    * const s = ""; // Output: 0
    * const s = "abcdef"; // Output: 6
 * Pseudocode: 
 * first , I will create a variable to store the maximum length of the substring
 * create a map to store the last index of each character
 * create two pointers, start and end, to represent the current substring
 * iterate through the string with the end pointer
 * for each character, check if it has been seen before and if its last index is greater than or equal to start
 * if it has been seen, move the start pointer to the right of the last occurrence of the character
 * update the last index of the character in the map
 * calculate the length of the current substring and update maxLength if it's greater
 * return maxLength after iterating through the string
 * Practical Use: This function can be used in scenarios where you need to analyze text data and find unique sequences of characters, such as in password validation or data compression algorithms.     
 * Example:
 * const s = "abcabcbb"; // Output: 3 because the longest substring without repeating characters is "abc"
 */ 


/**  3. Binary Tree Level Order Traversal - Given the root of a binary tree, 
    return the level order traversal of its nodes' values 
    (i.e., from left to right, level by level). */ 

var levelOrder = function(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];

    while (queue.length){
    const levelSize = queue.length;
    const level = [];
    for(let i = 0; i < levelSize; i++){
        const node = queue.shift();
        level.push(node.val);
        if (node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    res.push(level);
}
return res;
};

/**** * PREP-P STEPS
 * Parameters:
    * input: The root of a binary tree
     * output: A 2D array representing the level order traversal of the tree
 * Result/Output: Display the result of the level order traversal.
    * output a table format for proper visibility.
 * Edge case:
    * A scenario where the binary tree is empty.
    * Example:
    * const root = null; // Output: []
 * Pseudocode: 
 * first , I will check if the root is null, if it is, return an empty array
 * create a result array to store the level order traversal
 * create a queue to keep track of nodes to visit, starting with the root
 * while the queue is not empty, do the following:
   - determine the number of nodes at the current level (queue length)
   - create an array to store the values of the current level
   - for each node at the current level, do the following:
     - remove the node from the front of the queue
     - add its value to the current level array
     - if the node has a left child, add it to the back of the queue
     - if the node has a right child, add it to the back of the queue
   - after processing all nodes at the current level, add the level array to the result array
 * return the result array after processing all levels of the tree
 * Practical Use: This function can be used in scenarios where you need to analyze hierarchical data structures, such as organizational charts or file systems, and want to process or display data level by level.     
 * Example:
 * Given a binary tree with root = [3,9,20,null,null,15,7], the output would be [[3],[9,20],[15,7]] because the first level contains 3, the second level contains 9 and 20, and the third level contains 15 and 7.
 */     

/**  4. Validate Binary Search Tree - Given the root of a binary tree, determine if it is a valid binary search tree (BST). */ 
var isValidBST = function(root) {
    function validate(node, min = -Infinity, max = Infinity) {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    return validate(root);
};

/**** * PREP-P STEPS
 * Parameters:
    * input: The root of a binary tree
     * output: A boolean indicating whether the tree is a valid binary search tree
 * Result/Output: Display the result of whether the tree is a valid BST.
    * output a table format for proper visibility.
 * Edge case:
    * A scenario where the binary tree is empty or has only one node.
    * Example:
    * const root = null; // Output: true
    * const root = [1]; // Output: true
 * Pseudocode: 
 * first , I will create a helper function that takes a node and a range (min and max) as parameters
 * if the node is null, return true (an empty tree is a valid BST)
 * if the node's value is less than or equal to min or greater than or equal to max, return false (violates BST properties)
 * recursively validate the left subtree with an updated max value (current node's value) and the right subtree with an updated min value (current node's value)
 * call the helper function with the root node and initial min and max values set to negative and positive infinity, respectively
 * Practical Use: This function can be used in scenarios where you need to verify the integrity of data structures that are supposed to follow specific ordering properties, such as in databases or search algorithms.     
 * Example:
 * Given a binary tree with root = [2,1,3], the output would be true because it satisfies the properties of a binary search tree.
 */


function climbStairs(n) {
    if (n <= 2) return n;
   
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        const temp = b;
        b = a + b;
        a = temp;       
    }
    return b;
}

/**** * PREP-P STEPS
 * Parameters:
    * input: An integer n representing the number of stairs
     * output: An integer representing the number of distinct ways to climb to the top
 * Result/Output: Display the result of the number of distinct ways to climb the stairs.
    * output a table format for proper visibility.
 * Edge case:
    * A scenario where n is 0 or negative.
    * Example:
    * const n = 0; // Output: 1 (there's one way to stay at the bottom)
    * const n = -1; // Output: 0 (no way to climb negative stairs)
 * Pseudocode: 
 * first , I will check if n is less than or equal to 2, if it is, return n (base cases)
 * create two variables a and b to store the number of ways to climb to the previous two steps
 * iterate from 3 to n, calculating the number of ways to climb to the current step as the sum of the ways to climb to the previous two steps
 * update a and b accordingly in each iteration
 * return b after the loop, which will contain the number of ways to climb to the nth step
 * Practical Use: This function can be used in scenarios where you need to calculate combinations or permutations of steps, such as in dynamic programming problems or when analyzing recursive processes.     
 * Example:
 * Given n = 5, the output would be 8 because there are 8 distinct ways to climb to the top (1-1-1-1-1, 1-1-1-2, 1-1-2-1, 1-2-1-1, 2-1-1-1, 1-2-2, 2-1-2, 2-2-1).
 */