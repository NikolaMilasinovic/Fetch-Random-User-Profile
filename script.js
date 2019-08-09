var url = 'https://randomuser.me/api/';
var btn = document.querySelector('#btn');
var fullName = document.getElementById('fullname');
var username = document.getElementById('username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');
var avatar = document.querySelector('#avatar');

btn.addEventListener('click', function(){
	// alert('Hi');
	fetch(url)
		.then(handleErrors)
		.then(parseJSON)
		.then(updateProfile)
		.catch(printError);
})


function handleErrors (response){
  if(!response.ok) {
    throw Error(response.status);
  }
  return response;
}

function parseJSON(response){
	return response.json();
}

function updateProfile(response){
	updateFullName(response);
	updateUsername(response);
	updateUserInfo(response);
	updatePrifileImg(response);
}

function printError(error){
	console.log(error);
}


function updateFullName(response){
	var firstName = response.results[0].name.first;
	var lastName = response.results[0].name.last;
	fullName.innerHTML = `${firstName} ${lastName}`;
}

function updateUsername(response){
	var newUsename = response.results[0].login.username;
	username.innerHTML = newUsename;
}

function updateUserInfo(response){
	var newEmail = response.results[0].email;
	var newCity = response.results[0].location.city;
	email.innerHTML = newEmail;
	city.innerHTML = newCity;
}

function updatePrifileImg(response){
	var newImage = response.results[0].picture.medium;
	avatar.src = newImage;
}