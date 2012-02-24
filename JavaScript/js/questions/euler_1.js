
function euler_1()	{
	var num;
	var sum = 0;
	for (num=1; num < 1000; num++)	{
		if (num%3 == 0  || num%5 == 0)
			sum+=num;
	}
	return sum;
}

