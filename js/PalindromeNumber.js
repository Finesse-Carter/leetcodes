/*Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.*/

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    if(x<0){
        return false 
    }
    let c = 0
    let org = x
    while(x>0){
        c= (x % 10) + (c*10)
        x=Math.floor(x/10)
    }    
        return c === org
    };
        
        
            var isPalindrome = function(x) {
      var a = x.toString()
    var b = Number(a.split('').reverse().join(''))
    console.log(b);
    if(x===b){
       return true
       }   else {
           return false
       }
    };