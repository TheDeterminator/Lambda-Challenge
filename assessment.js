/*
Work through the problems in this file.  As you work through each problem periodically run: npm test
Your function name and the string must match the instructions exactly otherwise the tests will fail.
After writing your function uncomment the matching function reference at the bottom of the file.
*/

// 1. Write a function called helloWorld that returns the string 'Hello World!'.

function helloWorld() {
    return 'Hello World!';
}

/*
2. Write a function called lambdaSchool that has a single parameter called num.
     num will be a positive integer.
     If num is divisible by 3 return the string 'Lambda'
     If num is divisible by 5 return the string 'School'
     If num is divisible by 3 AND 5 return the string 'Lambda School' (notice the space)
     If num is NOT divisible by 3 or 5 then return num.

     Example:
             lambdaSchool(15); // returns 'Lambda School'
             lambdaSchool(8); // returns 8
*/

function lambdaSchool(num) {
    if ((num % 3) === 0 && (num % 5) === 0) {
	return 'Lambda School';
    } else if (num % 3 === 0) {
	return 'Lambda';
    } else if (num % 5 === 0) {
	return 'School';
    } else {
	return num;
    }
}

/*
3. Write a function called longestString that has a single parameter called strs.
     strs will be an array of strings.
     Return the longest string that is in strs.
     If there is a tie for the longest string then return the one that occurs first.

     Example:
             longestString(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
             longestString(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
*/

function longestString(strs) {
        let longest = strs[0];
    for (let i=0; i<strs.length-1; i++) {
	if (strs[i].length < strs[i+1].length && strs[i].length !== strs[i+1].length) {
	    longest = strs[i+1];
	};
    }
	return longest;
}

/*
4. Write a function called computeUserAverageAge that has a single parameter called users
     users is an array of user objects.
     Each user object has a property called age that is a number.
     Compute the average age of all user objects in the users array.
     Round off the decimals if needed and return the number.

     Example:
             const users = [{
               name: 'Brendan Eich',
               age: 56,
             }, {
               name: 'Linus Torvalds',
               age: 48,
             }, {
               name: 'Margaret Hamilton',
               age: 81,
             }];
             computeUserAverageAge(users); // returns 62 (This number is rounded up from 61.6666)
*/

function computeUserAverageAge(users) {
    let ages = [];
    let avg;
    users.forEach(element => {
	    ages.push(element.age);
	});
    avg = Math.round(ages.reduce((a,b) => a+b)/ ages.length);
    return avg;
}

module.exports = {
 helloWorld,
 lambdaSchool,
 longestString,
 computeUserAverageAge
};

/*A note to the Lambda School, I did not see runction references that needed to be uncommented
  at the bootom of this file, as indicated in the directions. Perhaps that was left over from a previous version of this challenge? - Alec Jordan */