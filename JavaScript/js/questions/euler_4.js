/*	Problem 4
*	http://projecteuler.net/problem=4
*
*	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
*	
*	Find the largest palindrome made from the product of two 3-digit numbers.
*
*/
function euler_4()	{
	var num1 = 100;
		var num2 = 100;
	var tempNum, digit;	//	used to check for palindrome
	var product = 0;
	var reverse = 0;
	var found = 0;
	
	while (num1 <= 999) {
		while (num2 <= 999) {
			
			//	Reverse Number if tempNum is divisible by 11
			product = num1 * num2;
			tempNum = product;
			if (tempNum % 11 == 0)	{
				while (tempNum > 0)	{
					digit = tempNum % 10;
					reverse = reverse*10 + digit;
					tempNum = Math.floor(tempNum / 10);
			
				}
				//	Check for palindrome
				if (product == reverse && product != 0)	{
					if (found < product)
						found = product;
				}
			}	
			
			
			num2++;
			reverse = 0;
		}
		num1++;
		num2= 100;
	}
	
	return found;
	
}




