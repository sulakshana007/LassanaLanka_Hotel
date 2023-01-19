function submit1(myFormRef){
	
	
	
	let fname=myFormRef.firstname.value;
	
	if(fname==""){
		alert("Name must be filled out");
		return false;
	}

	
	
	let f2name=myFormRef.lastname.value;
	
	if(f2name==""){
		alert("Last name must be filled out");
		return false;
	}
	
	
	
	
	let f1name=myFormRef.email.value;
	
	if(f1name==""){
		alert("Email must be filled out");
		return false;
		
	}
	
	

	
	return (true)
	
	
}
