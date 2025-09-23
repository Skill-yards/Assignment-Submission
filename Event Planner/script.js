let updateDisplay = function() {
  
  const eventName = document.getElementById("eventName").value.trim();
  const eventDate = document.getElementById("eventDate").value;
  const eventTime = document.getElementById("eventTime").value;
  const eventLoc = document.getElementById("eventLocation").value.trim();
  const attend = document.getElementById("Attendees").value.trim();
  const display = document.getElementById("display");
  const heading = document.getElementById("heading");

  display.innerHTML = ""; 

  
  if (!eventName || !eventDate || !eventTime || !eventLoc || !attend) {
    display.textContent = "Please fill all fields.";
    heading.innerHTML = `<strong>No Upcoming Events</strong>`;
    return;
  }

  
  heading.innerHTML = `<strong>Upcoming Events</strong>`;
  display.innerHTML = `
    <div>
      Event Name: ${eventName} <br>
      Event Date: ${eventDate} <br>
      Event Time: ${eventTime} <br>
      Event Location: ${eventLoc} <br>
      Attendees: ${attend.split(',').map(x => x.trim()).join(', ')}
    </div>
  `;
};


document.getElementById("eventForm").addEventListener("submit", function(e) {
  e.preventDefault();
  updateDisplay();
});
