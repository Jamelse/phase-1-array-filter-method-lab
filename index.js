const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driver, string){
  return driver.filter(function(ja){
    return ja.toLowerCase().indexOf(string.toLowerCase())!== -1
  });
}
function fuzzyMatch(driver, string){
  return driver.filter(function (ja){
    return ja.startsWith(string);
  })
}
let driver = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];
function matchName(array, string){
  return array.filter(function(ja){
  return ja.name.toLowerCase() === string.toLowerCase()
});
  

}