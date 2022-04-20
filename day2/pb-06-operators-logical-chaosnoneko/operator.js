// Declare two variables: isDogBetter with the value of true, and isCatBetter with the value of false.
var isDogBetter = true;
var isCatBetter = false;
// Check the result of:
// a) isDogBetter AND isCatBetter.
console.log(isDogBetter && isCatBetter);
// b) isDogBetter OR isCatBetter.
console.log(isDogBetter || isCatBetter);
// c) NOT (isDogBetter AND isCatBetter).
console.log(! isDogBetter && isCatBetter)
// Declare three more variables atoms, sandGrains, starsInSky. Give these variables number values.
var atoms = 1;
var sandGrains = 2;
var startsInSky = 3;
//Check the result of whether:
// a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
console.log(atoms > startsInSky && sandGrains);
// b) atoms is NOT equal to sandGrains.
console.log(atoms != sandGrains)
// c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
console.log((startsInSky < sandGrains) || (startsInSky > atoms));
// d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
console.log((atoms == startsInSky) || (atoms != sandGrains));
// e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
console.log((atoms>=10) && (sandGrains <=10));
// f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
console.log((atoms*startsInSky < 100 ) || (atoms*sandGrains > 100));
// BONUS: In your own words, explain the logic of each result in a comment after the result.
// the logic behind is that we need to be more careful with the instructions so we won't make a mistake