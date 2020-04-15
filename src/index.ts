const eightStrings:string[] = [
   "viii",
   "eight",
   "вісім",
   "ocho",
];

const isEight = (value: number|string): boolean => {
  if (value == 8) return true;
  return(typeof value === 'string' && eightStrings.indexOf(value.toLowerCase())!==-1); 
}

module.exports = isEight;
