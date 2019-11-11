function printNumber(n){
	if(n <= 0){ 
		return n;
    }else{
		n--;
		console.log(n);
		printNumber(n);
	}
}

printNumber(10);