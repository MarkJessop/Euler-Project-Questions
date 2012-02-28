/*	Problem 5
*	http://projecteuler.net/problem=5
*
*	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
*
*	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*
*	Pseudocode
*		x at 20
*			loop through 1-20
*				x mod loop number = 0
*				return x
*			End loop
*			If not found add 20
*
*/
function euler_5()	{
	var num1 = 0;
	var found = false;
	var index = 3;	//	does not need to start at 1 or 2 because every multiple of 20 is divisible by those numbers
	
	
	while (found == false) {
		num1 += 20;
		while (num1 % index == 0 && index <=20)	{
			if (index == 20)
				found = true;
			index++;
		}
		index = 3;
	}
	return num1;
}




