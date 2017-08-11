
let apiURL = "http://jsonplaceholder.typicode.com/users?=";
let select = document.querySelector('select');
let button = document.querySelector('button');
let container = document.querySelector('.container');

button.addEventListener("click", function(){
    fetch(apiURL).then(function(response) {
        response.json().then(dataOptions);
      }
    )
});

function dataOptions(data) {
  for (var i = 0; i < data.length; i++) {
// By setting the id equal to the select option value, I can sort by id === the index and it will be the same thing as selecting the id
    if (data[i].id === select.selectedIndex) {
// created div(s) element for data to populate in when pulled
      let div = document.createElement('div');
// defined needed variables
      let id = data[i].id;
      let name = data[i].name;
      let email = data[i].email;
      let phone = data[i].phone;
// innerHTML allows me to print the fields in text that I want, inside the div(s)
      div.innerHTML =`<p>Employee ID: ${id}</p>
                      <p>Name: ${name}</p>
                      <p>Email: ${email}</p>
                      <p>Phone: ${phone}</p>`;
// appending the created div(s) to the container section
      container.appendChild(div);
    }
  }
}
