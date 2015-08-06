$(document).ready(function() {
    $("#outputArea").hide();
    var count =0;
    $("#generate").click(function(){
         $("#outputArea").show();
         var num = $("#inputValue").val();
         if (num=="" || num== null){
            alert("Please Enter a Number");
	        count=0;
         }
         else{
	         if(count==0){
	         count=1;
             var num = parseInt(num); 
             var i = 0;
             $("#outputArea").append('<table style="border: 1px solid black;'); 
                for(i=1;i<=10;i++) {
                     $("#outputArea").append("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
                }
             $("#outputArea").append('</table>');
	        }
	         else{
		      alert("Already displayed the Multiplication Table please run again")
	        }
         }
    });
});