function login() {
  console.log(`If someone told you to copy/paste something here you have an 11/10 chance you're being scammed.`)
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": username,
    "password": password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:2400/login", requestOptions)
    .then(response => { 
      response.text(); 
      window.location = 'https://localhost:2400/profile' 
    })
    .then(result => console.log(result))
    .catch(error => { console.log('error', error); window.location = 'http://localhost:2400/profile' });
}