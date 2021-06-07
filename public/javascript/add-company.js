//Returns all of the necessary fields, via object, from the form to create a new company
function setNewCompanyObject(){
  const company_name = document.querySelector('input[name="company-name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const company_email = document.querySelector('input[name="company-email"]').value;
  const website = document.querySelector('input[name="website"]').value;
  const about = document.querySelector('textarea[name="about"]').value;
  const industry_id = document.querySelector('select[name="industry"]').value;

  return {company_name, address, phone, company_email, website, about, industry_id};
}

//Returns all of the necessary fields, via object, from the form to create new hours
function setNewHoursObject(){
  const mon = document.querySelector("#mon").value.trim();
  const tues = document.querySelector("#tues").value.trim();
  const wed = document.querySelector("#wed").value.trim();
  const thurs = document.querySelector("#thurs").value.trim();
  const fri = document.querySelector("#fri").value.trim();
  const sat = document.querySelector("#sat").value.trim();
  const sun = document.querySelector("#sun").value.trim();

  return {mon, tues, wed, thurs, fri, sat, sun};
}

//Called when the save button is clicked
async function newFormHandler(event) {
  event.preventDefault();

  //Await the response to create a company
  const response = await fetch(`/api/company`, {
    method: 'POST',
    body: JSON.stringify(setNewCompanyObject()),
    headers: {'Content-Type': 'application/json'}
  });

  //Await the response to create new hours
  const responseHours = await fetch(`/api/hours`, {
    method: 'POST',
    body: JSON.stringify(setNewHoursObject()),
    headers: {'Content-Type': 'application/json'}
  });

  //if both create responses are ok then reload the page to show update dashboard
  if (response.ok && responseHours.ok) {
    document.location.reload();
  } 
  else {
    alert(response.statusText + responseHours.statusText);
  }
}

document.querySelector('.company-info-form').addEventListener('submit', newFormHandler);
