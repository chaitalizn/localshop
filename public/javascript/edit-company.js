async function newFormHandler(event) {
  event.preventDefault();

  const company_name = document.querySelector('input[name="company-name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const company_email = document.querySelector('input[name="company-email"]').value;
  const website = document.querySelector('input[name="website"]').value;
  const about = document.querySelector('textarea[name="about"]').value;
  const industry_id = document.querySelector('select[name="industry"]').value;
  
  const response = await fetch(`/api/company/user`, {
    method: 'PUT',
    body: JSON.stringify({
      company_name,
      address,
      phone,
      company_email,
      website,
      about,
      industry_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/searchAll');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.company-info-form').addEventListener('submit', newFormHandler);