
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyA06HQTznLOuPFHlJ5uT5rz670eRCn7BEc",
    authDomain: "hyundailandingdata.firebaseapp.com",
    databaseURL: "https://hyundailandingdata.firebaseio.com",
    projectId: "hyundailandingdata",
    storageBucket: "hyundailandingdata.appspot.com",
    messagingSenderId: "1094770020846",
    appId: "1:1094770020846:web:c21574d772f97cb653beff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var LeadData = firebase.database().ref("Data");

// Listen for a submit
document.getElementById("dataform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
 var Name = document.getElementById('Name').value;
 var Phone = document.getElementById('Phone').value;
 var Email = document.getElementById('Email').value;
 var Model = document.getElementById('Model').value;
 var City = document.getElementById('City').value;
 
  
  console.log(Name,Phone, Email,Model,City);

  saveData(Name, Phone, Email,Model,City);

  document.getElementById("dataform").reset();

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },5000);

  // Clear form
  document.getElementById('dataform').reset();

}


// Save infos to Firebase
function saveData(Name, Phone, Email,Model,City) {
  var newLeadData = LeadData.push();

  newLeadData.set({
    Name: Name,
    Phone: Phone,
    Email: Email,
    Model: Model,
    City: City,
   
  });
}  