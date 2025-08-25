function convertCelsiusToKelvin(temp)
{let newTemp = temp + 273.15;

return newTemp;
}




function convertCelsiusToFahrenheit(temp)

{let newTemp = (temp * 9/5) + 32;

return newTemp;
}




function convertKelvinToCelsius(temp)
{let newTemp = temp - 273.15;

return newTemp;
}





function convertKelvinToFahrenheit(temp)
{let newTemp = (temp - 273.15) * 9/5 + 32;

return newTemp;
}





function convertFahrenheitToCelsius(temp)
{let newTemp = (temp - 32) * 5/9;

return newTemp;
}





function convertFahrenheitToKelvin(temp)
{let newTemp = (temp - 32) * 5/9 + 273.15;

return newTemp;
}






// Celsius examples
console.log("25°C to Kelvin:", convertCelsiusToKelvin(25)); 
// Expected: 298.15

console.log("25°C to Fahrenheit:", convertCelsiusToFahrenheit(25)); 
// Expected: 77

// Kelvin examples
console.log("300K to Celsius:", convertKelvinToCelsius(300)); 
// Expected: 26.85

console.log("300K to Fahrenheit:", convertKelvinToFahrenheit(300)); 
// Expected: 80.33 (approx)

// Fahrenheit examples
console.log("77°F to Celsius:", convertFahrenheitToCelsius(77)); 
// Expected: 25

console.log("77°F to Kelvin:", convertFahrenheitToKelvin(77)); 
// Expected: 298.15