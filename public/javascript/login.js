//login
async function loginFormHandler(event) {
  event.preventDefault();
  console.log("clicked");

  //Setting rec'd values to a variable
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  //if both values are present
  if (email && password) {
    //retreive from db
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok && response.redirected){
      window.location.href = response.url;
    }
    else{
      alert('Error: ' + response.statusText);
    }
  }
}

//signup
async function signupFormHandler(event) {
  event.preventDefault();
  console.log("clicked");

  //set rec'd input to variables and getting rid of white space
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  //if all values are present
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok && response.redirected){
      window.location.href = response.url;
    }
    else{
      alert('Error: ' + response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('#signup-button').addEventListener('click', signupFormHandler);
