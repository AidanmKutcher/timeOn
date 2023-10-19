//import { auth, db } from './config/firebaseConfig';


/* When the user hovers on the dropdown,
toggle between hiding and showing the dropdown content */ 
function dropdownOptions() {
    document.getElementById("parent").classList.toggle("show");
} 

// Close the dropdown menu if the user hovers outside of it
var dropdown = document.getElementById("parent");
dropdown.addEventListener("mouseenter", function () {
    dropdown.classList.add("show");
});

dropdown.addEventListener("mouseleave", function () {
    dropdown.classList.remove("show");
}); 
function setAdmin() {
    event.preventDefault(); //I have absolutely no clue why this makes it work
    document.getElementById("dropbtn").innerHTML = "Admin";
}

function setEmployee() {
    event.preventDefault(); //I have absolutely no clue why this makes it work
    document.getElementById("dropbtn").innerHTML = "Employee";
} 

function handleFormSubmit() {
    
    var form = document.getElementById("myForm");
    var requiredElement = document.getElementById("dropbtn");
    event.preventDefault();

    if (requiredElement.innerHTML !== "Admin" && requiredElement.innerHTML !== "Employee" ) {
      //document.getElementById("typeError").style.display = "inline-block";
      return false;
    }
    else if(requiredElement.innerHTML == "Admin"){
        document.getElementById("myForm").action = "registerAdmin.html";
        form.submit();
        return true;
    }
    else if(requiredElement.innerHTML == "Employee"){
        document.getElementById("myForm").action = "registerEmployee.html";
        form.submit();
        return true;
    }
}

function backToLogin() {
        var form = document.getElementById("myForm");
        document.getElementById("myForm").action = "index.html";
        form.submit();
        return true;
}

form.addEventListener("submit", function (event) {
    var requiredElement = document.getElementById("dropbtn");
    event.preventDefault();

    if (requiredElement.innerHTML !== "Admin") {
      event.preventDefault();

      alert("Please provide the required content in the button.");
    }
  });

function changePage() {
    if(document.getElementById("dropbtn").innerHTML == "Admin")
    {
        document.getElementById("myForm").action = "";
        document.getElementById("myForm").submit();
    }else if(document.getElementById("dropbtn").innerHTML == "Employee")
    {
        document.getElementById("myForm").action = "";
        document.getElementById("myForm").submit();
    }else
    {
        document.getElementById("typeError").classList.add("show");
    }
}