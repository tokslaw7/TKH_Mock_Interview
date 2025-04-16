
const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
  ]
  
  //Task: Use .filter() to get an array of inventors born between 1500 and 1599.
  /**
 * PREP-P STEPS
 * Parameters:
    * input: Array of inventor
    * output: Array of the filtered list of inventors
 * Result/Output: Display the result of filtered list of results.
    * output a table format for proper visibility.
 * Edge case:
    * A scenario where we are trying to determine the oldest persson in a group home /elderly.
    * Example:
    * const inventors =[{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    *                    {first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }  
    * ]
 * Pseudocode: 
 * first , I will create a variable the list of inventors
 * create a conditional statement to check/verify certain parameters
 * 1. to check the year an inventor lived between year 1500 and less
 * check if year live is > 1500 or < =1599 
 * if conditions are met , i will display the result of the filtered list in the stored varaible i will be using.
 * 
 * Practical Use:
 */

  const filteredInventors = inventors.filter(function (inventors){
    if(inventors.year > 1500 && inventors.year<=1599){
        return true;
    }
  });
  console.log(filteredInventors);