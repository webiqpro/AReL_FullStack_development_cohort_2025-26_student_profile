
ecma script 6
data types:
 1. integers => numbers (2), float(7.029), long (6.253525253) let number = 1 
2. string => characters "+254----"
3.tupple in Python/ Object in Javascript => let userDetails = {
    "name": "kevin"
    "phone_number": "+2547930287987"
    "email":"kevinleparwa@gmail.com"
} 
// access a name from this object 
// in js
userDetails.name = "kevin"
userDetails.phone_number => "+254793028797"
// python to 
userDetails['name'] => kevin
userDetails['email']

4. null or undefined 
 4.1 null => empty data type
     let name(xsus9w9w9w) ="Deng" // variable declaration => (give a memory in your machine) and assignment
        let name = null
 4.2 undefined 
    let name:number | undefined  = undefined 
5. boolean => yes/no: True/ False
6. Arrays in javascript and in python dictionary
  var studentList = []
    6.1 Arrays of objects 
        [
    {
    "name":"kevin",
    "email":"kevi@gmail.com"
    },
        {
    "name":"Deng",
    "email":"deng@gmail.com"
    }, 
        {
    "name":"Ngong",
    "email":"ngong@gmail.com"
    }
        ] 2kbs
    6.2 Arrays of integers [1, 2, 3,4]
    6.3 Array of strings ["Kevin", "Deng", "Ngong"]
    

     
// Object Oriented Programming => classes
// functional Oriented Programming => functions
// Modularation => having different modules of your program in javascript every module lives inside a folder and that has one entry point




function submitFormData() {
        console.log("submitFormData called");
        var contactus = []
        // This function is no longer needed as form submission is handled by the event listener
        const form = document.getElementById('form1');
        // Get form field values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        console.log(email);
        // Validate fields
        if (name == "" || email == "" || message == "") {
            alert('Please fill in all fields before submitting the form.');
            return;
        }
        // Show success message
        alert('Your message has been sent successfully!');
        form.reset();
    }



