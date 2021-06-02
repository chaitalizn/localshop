async function newFormHandler(event) {
  event.preventDefault();

  const company_name = document.querySelector('input[id="company-name"]').value;
  const address = document.querySelector('input[id="address"]').value;
  const phone = document.querySelector('input[id="phone"]').value;
  const company_email = document.querySelector('input[id="company-email"]').value;
  const website = document.querySelector('input[id="website"]').value;
  const about = document.querySelector('input[id="about"]').value;
  const industry = document.querySelector('input[id="industry"]').value;



  const response = await fetch(`/api/company`, {
    method: 'POST',
    body: JSON.stringify({
      company_name,
      address
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.company-info-form').addEventListener('submit', newFormHandler);
