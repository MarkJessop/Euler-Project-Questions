/*	Euler problem 3
*	URL: http://projecteuler.net/problem=3
*
*	The prime factors of 13195 are 5, 7, 13 and 29.
*
*	What is the largest prime factor of the number 600851475143 ?
*/




function euler_3() {
	var highestNum = 0;
	var factorNum = 600851475143;	//	Number to find the largest prime factor of
	var index = 2;
	
	while (factorNum > index){
		if (factorNum % index == 0)	{
			factorNum = factorNum / index;
			
		}
		else
			index++;
		
	}
	return index;
}