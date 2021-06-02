async function newFormHandler(event) {
  event.preventDefault();

  console.log('this is working');
  const company_name = document.querySelector('input[name="company-name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const company_email = document.querySelector('input[name="company-email"]').value;
  const website = document.querySelector('input[name="website"]').value;
  const about = document.querySelector('textarea[name="about"]').value;
  const industry_id = document.querySelector('select[name="industry"]').value;
  const user_id = 1

  const response = await fetch(`/api/company`, {
    method: 'POST',
    body: JSON.stringify({
      company_name,
      address,
      phone,
      company_email,
      website,
      about,
      industry_id,
      user_id

    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  );

  const responseTwo = await response.json()

  console.log(responseTwo);
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.company-info-form').addEventListener('submit', newFormHandler);
