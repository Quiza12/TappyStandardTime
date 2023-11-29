// document.querySelector("#datetime").valueAsDate = new Date();
var minutesLate;
var eventDateTime;
var reason;
const reasons = 
[
  'she was doing her makeup, got stressed out about it, and had to redo it', 
  'of Tysie', 
  'Love Island was getting heated',
  'she couldn\'t quite curl one section of hair on the back of her head',
  'she was daydreaming about Josh Kennedy',
  'she was eating sweeties',
  'she is South African',
  'the makeup on one eye is darker than the other',
  'of Ed',
  'she was doing mini New York Times crosswords on her little book',
  'she was daydreaming about bedtime',
  'Matt\'s studio distracted her',
  'she couldn\'t quite find the right arrangement of songs to get dressed to',
  'she listened to Taylor Swift\'s \'All Too Well (Taylor\'s Version) too many times',
  'Matty Healy started singing about chocolate',
  'she couldn\'t find her phone',
  'she couldn\'t find her keys',
  'she couldn\'t wrestle her brush into her handbag',
  'she was eating the white chocolate off of red liquorice balls',
  'her hate of the Gecko blinded her',
  'she was lacking Vitamin B12 thanks to her vegetarianism',
  'of Tysie photos',
  'of Tysie videos',
  'of Tookie (either of them)',
  'she was making up new Orkinisms like \'Wonkle\' and \'Tingle wingle\'',
  'she was overthinking times a million',
  'she was picking at her face',
  'she was on Depop',
  'she is the daughter of Chloe Orkin',
  'she left everything to the last minute',
  'she forgot the event was today',
  'she is just Taryn',
  'she can\t find that one pair of black pants to wear'
];

document.getElementById('datetimeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from being submitted normally
  clearErrors();
  var formValue = document.getElementById('datetime').value;
  if (validDate(formValue)) {
    eventDateTime = formValue;
    minutesLate = getMinutesLate();
    tappyArrivalTime = moment(new Date(eventDateTime)).add(minutesLate, 'm');
    reason = getReason();
    logResults();
    generateResult();
  } else {
    console.log('Not a valid date/time');
    dateInError();
  }
});

function validDate(date) {
  return !isNaN(Date.parse(date));
}

function clearErrors() {
  document.getElementById("datetime").style["border-color"] = "black";
}

function dateInError() {
  document.getElementById("datetime").style["border-color"] = "red";
}

function logResults() {
  console.log('Event date/time: ' + eventDateTime);
  console.log('Tappy arrival time: ' + tappyArrivalTime.format("yyyy-MM-DDThh:mm"));
}

function generateResult() {
  document.getElementById('results').textContent = 'Tappy will arrive at ' + tappyArrivalTime.format("hh:mm a") + ' on ' + tappyArrivalTime.format("DD/MM/yyyy") + ', ' + minutesLate + ' minutes late, because ' + reason + '.';
}
    
function getMinutesLate() {
  return Math.floor(Math.random() * (150 - 5 + 1)) + 5;
}

function getReason() {
  return reasons[Math.floor(Math.random() * reasons.length)];
}