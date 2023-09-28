// const myname=document.getElementById("name1");
// const myEmail=document.getElementById("email");
// const myMessage=document.getElementById("textArea");
// const submit=document.getElementById("submit");
// const result=document.getElementById("result");
// const inp=document.querySelectorAll("test");
const matches = document.querySelector(".HomeSection__us__btn");
console.log(matches)
matches.addEventListener("mouseover",function(){
    matches.style.backgroundColor = "blue"; })
matches.addEventListener("mouseout",function(){
    matches.style.backgroundColor = "#FF247B"; })
    //////////////////////////////////////////
    const matches2 = document.querySelector(".TeamSection__container__card");
    matches2.addEventListener("mouseover",function(){
        matches2.style.backgroundColor = "blue"; })
    matches2.addEventListener("mouseout",function(){
        matches2.style.backgroundColor = "#22282a"; })
//////////////////////
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
    submitButton.textContent = "Thank you";
});

    ///////////////////
    const names = document.querySelector("#name1");
    const myEmail=document.getElementById("email");
    const submit = document.querySelector("#submit");
const Data=[];
submit.addEventListener("click",function(){
    const names1 = names.value;
       const Email1 = myEmail.value;

Data.push(names1);
Data.push(Email1);
submit.textContent = "Thank you";

alert(Data);
console.log("Heloo")
const ListOfNames = document.getElementById("result");
const childElement = document.createElement("li").innerHTML;
ListOfNames.appendChild(childElement).textContent="ghjygyj"
   
console.log(Data)

})//////////////////////////

const form=document.getElementById("submit");
function submitForm(event){

   //Preventing page refresh
   event.preventDefault();
}

//Calling a function during form submission.
// form.addEventListener('submit', submitForm);
// fun();
// function fun(){
// return false;
// }
// stopLink("click");
// function stopLink(event) {
//     event.preventDefault();
//   }
 
// function displayData(){
//         result.innerHTML = "";
    
//         Data.forEach(function(user) {
//             const listItem = document.createElement("li");
//             listItem.textContent = `name: ${names}`;
//             result.appendChild(listItem);
//         });
//     }
//         // Data.appendChild(names1);
// console.log(Data);
// myname.value = "";
// console.log("heloo")

// })
// myEmail.value = "";
// myMessage.value = "";

// function displayData(){
//     result.innerHTML = "";

//     Data.forEach(function(user) {
//         const listItem = document.createElement("li");
//         listItem.textContent = `name: ${names}`;
//         result.appendChild(listItem);
//     });
// }
// function displayData(){


//     result.innerHTML ;

//     Data.forEach(function(user) {
//         const listItem = document.createElement("li");
//         listItem.textContent = 'name: ${user.name}';
//         result.appendChild(listItem);
//       });
//     }




// element.addEventListener("click", myFunction);



// submit.addEventListener(onclick,function(){
//     myname = myname.value;
//  myEmail=myEmail.value;
//  myMessage=myMessage.value;
// Data.push({myname,myemail,myMessage})
// displayData();
// myname.value = "";
// myEmail.value = "";
// myMessage.value = "";
// })
// function displayData(){
//     result.innerHTML ;

//     userData.forEach(function(user) {
//         const listItem = document.createElement("li");
//         listItem.textContent = 'name: ${user.name} email: ${user.email} message: ${user.message}';
//         result.appendChild(listItem);
//       });
//     }
//     const card=document.getElementByClassName("TeamSection__container__card");
//     card.addEventListener("mouseover",myfun());
//       function myfun(){
//         document.getElementById("contactSection__form").style.backgroundColor = "blue";
//     } 
//       document.getElementById("contactSection__form").style.backgroundColor = "blue";
    

console.log("hiiii");


