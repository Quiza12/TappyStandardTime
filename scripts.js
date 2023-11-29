var minutesLate;
const reasons = 
[
  "she was doing her makeup, got stressed out about it, and had to redo it.", 
  "Tysie.", 
  "Love Island was getting heated.",
  "she couldn't quite curl one section of hair on the back of her head.",
  "she was daydreaming about Josh Kennedy."
];

document.getElementById('datetimeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from being submitted normally
  var datetime = document.getElementById('datetime').value;
  console.log('Event date/time: ' + datetime);
  generateResult();
});

function generateResult() {
  minutesLate = getMinutesLate();
  reason = getReason();
  document.getElementById("results").textContent="Tappy will be " + minutesLate + " minutes late because " + reason;
}
    
function getMinutesLate() {
  return Math.floor(Math.random() * (150 - 5 + 1)) + 5;
}

function getReason() {
  return reasons[Math.floor(Math.random() * reasons.length)];
}