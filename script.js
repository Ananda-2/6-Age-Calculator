const calculate = document.getElementById("calculate");
const DOB = document.getElementById("date");

calculate.addEventListener("click", calculateAge);

DOB.max = new Date().toISOString().split("T")[0];       // ******************************** to prevent date after today **************

var year, month, day;

function calculateAge() {
  const dob = document.getElementById("date").value;
//   dob.max = new Date().toISOString().split("T")[0];
    // dob.datepicker({maxDate:new Date()}) ;
  if (dob === "") {
    alert("enter your date of birth first");
  } else {
    const today = new Date();

    var y1 = today.getFullYear();
    var m1 = today.getMonth();
    var d1 = today.getDate();
    var y2 = parseInt(dob.substr(0, 4));
    var m2 = parseInt(dob.substr(5, 2));
    var d2 = parseInt(dob.substr(8, 2));

    if (d1 > d2) {
      day = d1 - d2;
    } else {
      day = 30 + d1 - d2;
      m1--;
    }

    if (m1 > m2) {
      month = m1 - m2;
    } else {
      month = 12 + m1 - m2;
      y1--;
    }
    year = y1 - y2;
    let displayAge = document.createElement("p");
    displayAge.innerHTML = `you are <span>${year}</span> years , <span>${month}</span> months and <span>${day}</span> days old `;
    displayAge.classList.add("displayAgeClass");
    document.querySelector(".container").appendChild(displayAge);
  }


}
