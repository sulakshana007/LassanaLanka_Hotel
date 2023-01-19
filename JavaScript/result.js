window.addEventListener('load', () => {
	const params = (new URL(document.location)).searchParams;
	const firstname = params.get('firstname');
	const lastname = params.get('lastname');
	
	
	document.getElementById('result-firstname').innerHTML = firstname;
	document.getElementById('result-lastname').innerHTML = lastname;
	
})