// Set datetime to midday of current day.
var now = moment().startOf('day').add(12, 'hours').toDate(); 
var localTime = new Date(now.getTime() - now.getTimezoneOffset() * 60 * 1000);
document.querySelector("#datetime").value = localTime.toISOString().slice(0,16);

var minutesLate;
var eventDateTime;
var reason;
var prevReason;
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
  'she was doing mini New York Times crosswords on her little book',
  'she was daydreaming about bedtime',
  'Matt\'s general being distracted her',
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
  'she was making up new Orkinisms like \'Wonkle\' and \'Badongle\'',
  'she was overthinking times a million',
  'she was picking at her face',
  'she was on Depop',
  'she is the daughter of Chloe Orkin',
  'she left everything to the last minute',
  'she forgot the event was today',
  'she is just Taryn',
  'she can\t find that one pair of black pants to wear',
  'she was too busy taking a bath',
  'she was biting Matt',
  'she was getting a soy dirty chai',
  'she was zooming around in her Crocs, trying to crack the land-speed record',
  'she was too busy taking her second bath of the day',
  'Matt\'s Violent Soho music had given her three successive heart attacks',
  'she was making Matt use mouthwash in a way that looked suspiciously like water-boarding',
  'she bolted her acai bowl and was feeling sick',
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
  document.getElementById("datetime").classList.remove("is-invalid");
}

function dateInError() {
  document.getElementById("datetime").classList.add("is-invalid");
}

function logResults() {
  console.log('Event date/time: ' + eventDateTime);
  console.log('Tappy arrival time: ' + tappyArrivalTime.format("yyyy-MM-DDThh:mm"));
}

function generateResult() {
  document.getElementById('results').textContent = 'Tappy will arrive at ' + tappyArrivalTime.format("hh:mm a") + ' on ' + tappyArrivalTime.format("DD/MM/yyyy") + ', ' + minutesLate + ' minutes late, because ' + reason + '.';
}
    
function getMinutesLate() {
  //150mins max, 5mins min
  return Math.floor(Math.random() * (150 - 5 + 1)) + 5;
}

function getReason() {
  var index = getRandomReason();
  while (index == prevReason) {
    index = getRandomReason();
  }
  prevReason = index;
  return reasons[index];
}

function getRandomReason() {
  return Math.floor(Math.random() * reasons.length);;
}