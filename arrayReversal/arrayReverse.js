// function for validation
function validation(){
	var temp=document.getElementById('arrayL3').value;
	if(temp==0 ){	
		alert("Array length has to be more than 0");
	}
	else{
		if(temp==null || isNaN(temp)==true){
	    alert("Please enter a number");
		}
		else{
			var temp2=document.getElementById('arrayV3').value;
			temp3=temp2.split(",");

		   if (temp3.length>temp){
				alert("reduce the value punk");
			}
			else{
					
					var temp4 = arrayReverse(temp3);
					document.getElementById('output').value = temp4;
			}

		}
	}


}




// function for checking the array reversal
function arrayReverse(inputArray){
	var tempStore,outputArray=[],counter=0;
	for(i=inputArray.length-1;i>=0;i--){
	   temp= inputArray[i];
	   outputArray[counter]=temp;
	   counter++;
	}
	return outputArray;
}

