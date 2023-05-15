var x;
var planetNamesList = getColumn("Planets of our Solar System", "Planet");
var lengthOfDayList = getColumn("Planets of our Solar System", "Length of day");
var sunDistanceList = getColumn("Planets of our Solar System", "Distance from sun");
var orbitalPeriodList = getColumn("Planets of our Solar System", "Orbital period");
var moonNumberList = getColumn("Planets of our Solar System", "Number of moons");
//all the varibles
var filteredPlanetNamesList = [];
var filteredLengthOfDayList = [];
var filteredSunDistanceList = [];
var filteredOrbitalPeriodList = [];
var filteredMoonNumberList = [];
//this function sets the data in the filtered lists to that of the planet that the user chose when called
function filter() {
  filteredPlanetNamesList = [];
  filteredLengthOfDayList = [];
  filteredSunDistanceList = [];
  filteredOrbitalPeriodList = [];
  filteredMoonNumberList = [];
  for (var i = 0; i < planetNamesList.length; i++) {
    if (planetNamesList[i] == getText("planetChoices")) {
      appendItem(filteredPlanetNamesList, planetNamesList[i]);
      appendItem(filteredLengthOfDayList, lengthOfDayList[i]);
      appendItem(filteredSunDistanceList, sunDistanceList[i]);
      appendItem(filteredOrbitalPeriodList, orbitalPeriodList[i]);
      appendItem(filteredMoonNumberList, moonNumberList[i]);
    }
  }
}
//this function updates the screen everytime a user chooses a planet
function updateScreen() {
  setText("planetName", filteredPlanetNamesList[0]);
  setText("LengthOfDayText", "length of day: " + filteredLengthOfDayList[0]);
  setText("#ofMoons", "number of moons: " + filteredMoonNumberList[0]);
  setText("sunDistance", "sun distance: " + filteredSunDistanceList[0]);
  setText("orbitalPeriod", "orbital period: " + filteredOrbitalPeriodList[0]);
}
onEvent("planetChoices", "change", function( ) {
  setScreen("InfoScreen");
  filter();
  updateScreen();
});
onEvent("nextScreenButton", "click", function( ) {
  setScreen("choiceScreen");
});
onEvent("BackButton", "click", function( ) {
  setScreen("choiceScreen");
});
onEvent("homeButton", "click", function( ) {
  setScreen("homeScreen");
});
