var details = new Array();

window.addEventListener('load',()=>{
	
	const params = (new URL (document.location)).searchParams;
	const name = params.get('name');
	const email= params.get('email');
	const phone= params.get('phone');	
	const feedback_type= params.get('feedback_type');
	const message= params.get('message');
	
	
	
    details=[name,email,phone,feedback_type,message,true];
	
	
	
	document.getElementById('result-username').innerHTML = name;
	document.getElementById('result-email').innerHTML = email;
	document.getElementById('result-queryabout').innerHTML = feedback_type;
	document.getElementById('result-mobile').innerHTML = phone;
	document.getElementById('result-details').innerHTML = message;
	
	
	
})




function submit2()
{
	var email="mailto:sulakshana.20210142@gmail.com"
	          
	
	if(confirm("Are you sure?")){
		window.location.href=email;
	}else{
		alert("Query will not be sent!")
	}
}




