//Returns all of the necessary fields, via object, from the form to update a new company
function setUpdateCompanyObject(){
  const company_name = document.querySelector('input[name="company-name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const company_email = document.querySelector('input[name="company-email"]').value;
  const website = document.querySelector('input[name="website"]').value;
  const about = document.querySelector('textarea[name="about"]').value;
  const industry_id = document.querySelector('select[name="industry"]').value;

  return {company_name, address, phone, company_email, website, about, industry_id};
}

//Returns all of the necessary fields, via object, from the form to update new hours
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

async function updateFormHandler(event) {
  event.preventDefault();
  
  //Await the response to update a company
  const response = await fetch(`/api/company/user`, {
    method: 'PUT',
    body: JSON.stringify(setUpdateCompanyObject()),
    headers: {'Content-Type': 'application/json'}
  });

  //Await the response to create update hours
  const responseHours = await fetch(`/api/hours`, {
    method: 'PUT',
    body: JSON.stringify(setNewHoursObject()),
    headers: {'Content-Type': 'application/json'}
  });

  //If both updates are successful then bring us to the search results.
  if (response.ok && responseHours.ok) {
    document.location.replace(`/searchAll`);
  } 
  else {
    alert(response.statusText + responseHours.statusText /*+ responseProduct.statusText*/);
  }
}

document.querySelector('.company-info-form').addEventListener('submit', updateFormHandler);

//Function to assign a default industry selection based on the current companies industry
async function assignIndustry(){

  const companyResponse = await fetch('/api/company/single');
  const companyData = await companyResponse.json();

  //Find the option in the section menu that matches the id of the company industry
  var option = document.querySelector(`option[value='${companyData.industry.id}']`);
  option.selected = true;
}

//Assign the company industry on edit company page loading
assignIndustry();
