//Hi team, I referred to the lesson content a lot for this section and just wanted to be transparent about it here.  (just tech news)
async function loginFormHandler(event) {
  event.preventDefault();

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
//sign up
async function signupFormHandler(event) {
  event.preventDefault();

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

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);