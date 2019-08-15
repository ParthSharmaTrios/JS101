console.log("I am learning JS Fujnctions")



function greeting(user_name,day){
	
	alert("welcome "+ user_name +"! today is "+ day)
}

//greeting("John","Wed")


function checkEvenOdd(num){
	
	if(num%2==0){
		console.log(num +" is an even number")
	}
	else{
		console.log(num +" is an odd number")

	}
	
}

checkEvenOdd(2)
checkEvenOdd(20)
checkEvenOdd(39)
checkEvenOdd(1)
checkEvenOdd(50)



function sum(num1,num2,num3){
	
	//console.log(num1+num2+num3)
	let total = num1+num2+num3
	
	//return total
	
	checkEvenOdd(total)
	
}

//let total_sum = sum(10,20,50)
sum(10,20,50)

//checkEvenOdd(total_sum)

//alert("The result returned from my function is "+ total_sum)

function tempToCel(){}
function tempToFar(){}