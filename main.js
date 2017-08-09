
let box = document.getElementsByTagName("td");
let url = "http://jsonplaceholder.typicode.com/users";
let search = document.getElementById("search");

fetch(url)
.then(function(response){
  return response.json(buttonClick);
})
.then(function(data){
  console.log(data);
})

function buttonClick() {
  for (let i = 0; i < data.length; i++) {
    if (search === data[i].id){
      let url = `http://jsonplaceholder.typicode.com/${search}`;

      let name = document.createElement("p");
      name.innerHTML = `Name: ${data[i].name}`;
      box.appendChild(name);

      let email = document.querySelector("p");
      email.innerHTML = `Email: ${data[i].email}`;
      box.appendChild(email);

      let phone = document.createElement("tel");
      phone.innerHTML = `Phone Number: ${data[i].phone}`;
      box.appendChild(phone);
    } else {
      alert("That is not the name of an employee, please try again.")
    }
  }
}











// function employee(data){
//   // for (let i = 0; i < data.length; i++) {
//     // if (search.data[i].id < data.length){
//       let name = document.createElement("p");
//       name.innerHTML = `Name: ${data.name}`;
//       box.appendChild(name);
//
//       let email = document.querySelector("p");
//       email.innerHTML = `Email: ${data.email}`;
//       box.appendChild(email);
//
//       let phone = document.createElement("tel");
//       phone.innerHTML = `Phone Number: ${data.phone}`;
//       box.appendChild(phone);
//     // }
//   // }
// }









// document.getElementById("search")
// .addEventListener("keyup", function(event) {
// event.preventDefault();
// if (event.keyCode === 13) {
//   document.getElementById("search").click();
// }
// });
// ______________________________________________________________________

// function recipePuppy(){
// console.log("Posting request to Recipe Puppy API...");
// fetch("http://www.recipepuppy.com/api/?q=omelet", {
//   method: "post",
//   mode: 'no-cors'
// })
//   .then(function(response){
//     return response.json();
//   })
//   .catch(function(err) {
//     console.log("Fetch Error :-S", err);
//   });
// }

// const options = {
//   method: "post",
//   mode: 'no-cors'
// }
