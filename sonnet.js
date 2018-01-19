/* Take the contents of the sonnet div and place it in a variable. */
let poem = document.getElementById("sonnet").innerHTML;

/* Find and output the starting position of the word "orphans". */
console.log(poem.indexOf("orphans"));
console.log(poem.search("orphans"));

/* Output the number of characters in the sonnet. */
console.log(poem.length);

/* Replace the first occurance of the string "winter" with "yuletide". */
console.log(poem.replace("winter", "yuletide"));
document.body.innerHTML = document.body.innerHTML.replace('winter', 'yuletide');

/* Replace all occurances of the string "the" with "a large".  */

document.body.innerHTML = document.body.innerHTML.replace(/the/g, "a large");
console.log(poem.replace(/the/g, "a large"));
