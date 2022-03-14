const palindromes = function (str) {
  let filtered = Array.from(str.toLowerCase())
    .filter((char) => char != " " && char != "." && char != "," && char != "!")
    .join("");
  let reverse = filtered.split("").reverse().join("");
  console.log(reverse);
  console.log(filtered);
  return reverse == filtered;
};

// Do not edit below this line
module.exports = palindromes;
