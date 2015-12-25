//Напишете JavaScript програма, която по даден array да показва най-
//често срещания символ.
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
var frequency = {};
var max = 0; 
var result;  
	for(var v in array) {
        frequency[array[v]]=(frequency[array[v]] || 0)+1;
        if(frequency[array[v]] > max) { 
                max = frequency[array[v]];
                result = array[v];         
        }
	}
	
	console.log(max, result);


