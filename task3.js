let Name = prompt("Please enter your name:");
console.log( Name , typeof Name);
let year = true;
let promp;
while (year){
    promp =Number(prompt("Enter your birth year"))
    if (isNaN(promp) || promp <2010)
    alert("Birthdate is not valid")
    else year = false;
}
let age =2024- promp;
console.log("Birth year: "+promp)
console.log("Age: "  +age);









