//Initialize firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAM4ZAS3HC3sNyR4X63ptFdoLcVRtZLIBk",
  authDomain: "portfolio-3dea4.firebaseapp.com",
  databaseURL: "https://portfolio-3dea4-default-rtdb.firebaseio.com",
  projectId: "portfolio-3dea4",
  storageBucket: "portfolio-3dea4.appspot.com",
  messagingSenderId: "957354991334",
  appId: "1:957354991334:web:5c5b078fdaf7753ce9e527",
  measurementId: "G-SLYV07K0G5"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  // var company = getInputVal('company');
  var email = getInputVal('email');
  var project = getInputVal('project');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, project, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, project, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    project: project,
    message: message
  });
}

// --------------------------------------------------------

let swiperTestimonial = new Swiper(".testimonial_container", {
  cssMode: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {},
});

document.getElementById("btnradio2").addEventListener("click", education);
document.getElementById("btnradio1").addEventListener("click", experience);

function education() {
  document.getElementById("timeline").innerHTML = `<ul class="timelineul">
  <li class="timeline-item">
    <div class="timeline-content">
      <h1><span class="fw-bold">Bachelor of Technology (B.Tech)</span><br><span class="" style="font-size:15px">in Computer Science and Engineering</span></h1>
      
      <p class="text-muted">Rajiv Gandhi Proudyogiki Vishwavidyalaya <br> June 2019 – May 2023 (Expected)</p>
      
    </div>
  </li>
  <li class="timeline-item">
    <div class="timeline-content">
      <h1><span class="fw-bold">12th Grade</span> | CBSE<br><span class="" style="font-size:15px">Science Stream</span></h1>
      <p class="text-muted">MITHI GOBINDRAM PUBLIC SCHOOL <br> Apr 2018 – Mar 2019</p>
      
    </div>
  </li>
  <li class="timeline-item">
    <div class="timeline-content">
      <h1><span class="fw-bold">10th Grade</span> | CBSE<br></h1>
      <p class="text-muted">MITHI GOBINDRAM PUBLIC SCHOOL <br> Apr 2016 – Mar 2017</p>
      
    </div>
  </li>
</ul>`;
}

function experience() {
  document.getElementById(
    "timeline"
  ).innerHTML = `        <ul class="timelineul">
  <li class="timeline-item">
    <div class="timeline-content">
      <h1><span class="fw-bold">MERAEMI</span> | Java Development Intern</h1>
      
      <p class="text-muted">Feb 2022 - Apr 2022</p>
      <!-- <ul class="text-muted description">
        <li>Developed version-2.1 of MeraEMI-messaging-service API.</li>
        <li>Optimized code and restructured the project.</li>
      </ul> -->
    </div>
  </li>
  <li class="timeline-item">
    <div class="timeline-content">
      <h1><span class="fw-bold">HELLOSKILLS</span> | Web Development Trainee</h1>
      <p class="text-muted">Nov 2021 – Feb 2022</p>
      <!-- <ul class="text-muted description">
        <li>Developed HelloSkills Career Assessment Portal (web application).</li>
        <li>Resulted in a 20% increase in overall website traffic.</li>
      </ul> -->
    </div>
  </li>
  <li class="timeline-item">
    <div class="timeline-content">
      <h1><span class="fw-bold">THE KABADIWALA</span> | Software Engineer Intern</h1>
      <p class="text-muted">Aug 2021 – Nov 2021</p>
      <!-- <ul class="text-muted description">
        <li>Designed and added a ”Pickup Session section” that contained 6 inner pages,
          one of which required integrating Google maps API to keep track of pickup
          session activities using a timeline and to know the vehicle’s current location.</li>
        
      </ul> -->
    </div>
  </li>
</ul>`;
}
