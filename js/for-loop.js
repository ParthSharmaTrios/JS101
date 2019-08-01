for(let i = 1; i<=500; i++){
	
	if(i%2!=0){
		console.log(i)
	}    
	
}

// sum of all even and odd numbers from 1-1000

let evenSum=0
let oddSum=0
let evenProduct = 1
let oddProduct = 1

for(let i=1 ;i <=100; i++){
	
	if(i%2==0){
		evenSum = evenSum+i
		evenProduct = evenProduct*i
	}
	
	else {
		oddSum = oddSum+i
		oddProduct = oddProduct*i
	}
	
	
}


	console.log("Sum of even number -" +evenSum)
	console.log("Sum of odd number -" +oddSum)
	console.log("Sum of all number -" + (evenSum+oddSum))
	console.log("Product of evennumber = " + evenProduct)
	console.log("Product of odd number = " + oddProduct)