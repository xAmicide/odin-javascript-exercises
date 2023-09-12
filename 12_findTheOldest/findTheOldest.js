const findTheOldest = function (arr) {
  let age = arr.reduce((oldest, person) => {
    const oldestAge = getAge(oldest);
    const personAge = getAge(person);
    return oldestAge < personAge ? person : oldest;
  });
  return age;
};

function getAge(person) {
  if (!person.yearOfDeath) {
    let year = new Date();
    year = year.getFullYear();
    return year - person.yearOfBirth;
  } else {
    return person.yearOfDeath - person.yearOfBirth;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
