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
	return response.json().then(function(data){
		return data.results[0]});
}

function updateProfile(data){
	updateFullName(data);
	updateUsername(data);
	updateUserInfo(data);
	updatePrifileImg(data);
}

function printError(error){
	console.log(error);
}


function updateFullName(data){
	var firstName = data.name.first;
	var lastName = data.name.last;
	fullName.innerHTML = `${firstName} ${lastName}`;
}

function updateUsername(data){
	var newUsename = data.login.username;
	username.innerHTML = newUsename;
}

function updateUserInfo(data){
	var newEmail = data.email;
	var newCity = data.location.city;
	email.innerHTML = newEmail;
	city.innerHTML = newCity;
}

function updatePrifileImg(data){
	var newImage = data.picture.medium;
	avatar.src = newImage;
}