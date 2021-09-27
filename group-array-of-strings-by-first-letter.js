// https://www.jschallenger.com/javascript-arrays/javascript-group-array-strings-first-letter/challenge?id=613f1d9fcfe31c2db0496299
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const beef = ['beef', 'Alf', 'Alice', 'Ben', 'memes', 'cremes', 'teams', 'seems', 'deems'];

function myFunction(strs) {
  let dic = {};

  const indexes = strs.map((str) => str[0].toLowerCase());
  const indexSet = new Set(indexes);
  //console.log(indexes);

  for (let index of indexSet) {
    // console.log(index);
    dic[index] = [];
  }
  // console.log(Object.keys(dic));
  for (const str of strs) {
    let strl = str[0].toLowerCase();
    dic[strl].push(str);
  }

  console.log(dic);
}

myFunction(beef);
