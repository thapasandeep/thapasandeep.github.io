
// alert("I am looking at alert message");

function showAlert() {
    // alert("This alert box was called with the onload event Sandeep Thapa");
    console.log( "Sandeep Thapa");
}

function saveData() {
    var lname = document.getElementById("lname").value;
    var fname = document.getElementById("fname").value;
    console.log(lname);
    console.log(fname);
}
const btn = document.getElementById("submitButton")
// document.getElementById("submitButton")
if (btn) {
    btn.addEventListener("click",function() {
        console.log("Submit button is clicked");  
    });
} else {
    console.log("Something is not Working");
}
// .addEventListener("click", function() {
// {this.classList.add("blue-button");
//     console.log("Submit button is clicked");
// });

// const input = document.querySelector("submitButton");
const log = document.getElementById("submitButton");

log.addEventListener("input", updateValue);

function updateValue(e) {
//   log.textContent = e.target.value;
    console.log("roger");
}
 
function expirationMonth() {
    var month = document.getElementById("expirationMonth").value;
    console.log("monthChanged");
}

function show_month(obj) {
    console.log("monthChanged");
    // document.getElementById('expirationMonth').selectedIndex = obj.selectedIndex;
    var month = document.getElementById("expirationMonth").value;
    console.log(month);
}

function makePayment() {
    console.log("payment")
}