var details = new Array();

window.addEventListener('load',()=>{
	
	const params = (new URL (document.location)).searchParams;
	const firstname = params.get('firstname');
	const lastname = params.get('lastname');
	const email= params.get('email');
	const citizen= params.get('citizen');
	const gender= params.get('gender');
	const mobile= params.get('mobile');
	
	
    details=[firstname,lastname,email,citizen,gender,mobile,true];
	
	
	
	document.getElementById('result-firstname').innerHTML = firstname;
	document.getElementById('result-lastname').innerHTML = lastname;
	document.getElementById('result-email').innerHTML = email;
	document.getElementById('result-citizen').innerHTML = citizen;
	document.getElementById('result-gender').innerHTML = gender;
	document.getElementById('result-mobile').innerHTML = mobile;
	
	
	
})




function submit2()
{
	var email="mailto:sulakshana.20210142@gmail.com"
	          
	
	if(confirm("Are you sure?")){
		window.location.href=email;
	}else{
		alert("You will not get an email!")
	}
}




