var eightStrings = [
   "viii",
   "eight",
   "вісім",
   "ocho",
];

var inArray = function(value, array) {
   return array.indexOf(value) > -1;
}

var eight = function(value) {
   return (value == 8) || ((typeof value === "string") && inArray(value.toLowerCase(), eightStrings));
}

module.exports = eight;
