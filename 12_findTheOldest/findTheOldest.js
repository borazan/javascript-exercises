const findTheOldest = (arr) => {
  return arr.reduce((oldest, person) => {
    if (
      person.yearOfDeath - person.yearOfBirth >
      oldest.yearOfDeath - oldest.yearOfBirth
    ) {
      return person;
    } else return oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
