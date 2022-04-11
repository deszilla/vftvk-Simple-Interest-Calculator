function compute()
{
	var principal = document.getElementById("principal").value;
	if (principal == "" || principal <= 0){
		alert("Please enter a positive number in amount")
	} else{
		
		var rate = document.getElementById("rate").value;
		var years = document.getElementById("years").value;
		var interest = principal * years * rate /100;
		var year = new Date().getFullYear()+parseInt(years);
		
		let element = document.getElementById("result");
		
		element.innerHTML = 
		"<br><br>If you deposit <mark>" + principal +
		"</mark><br>at an interest rate of <mark>" + rate + "%</mark>" +
		"<br>You will receive an amount of <mark>" + interest +
		",</mark><br>in the year <mark>" + year + "</mark>";
	
		/* using <mark> to highlight numbers */
	}
	
	document.getElementById("principal").focus(); /* focus the amount element after calling compute() */
}

function update_rate()
{
	
	let element = document.getElementById("rate_val")
	let rate = document.getElementById("rate").value
	
	element.innerHTML = rate + "%"

}	