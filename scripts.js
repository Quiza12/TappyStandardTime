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
  'Matt\'s helicoperting distracted her',
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
];

document.getElementById('datetimeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from being submitted normally
  eventDateTime = document.getElementById('datetime').value;
  minutesLate = getMinutesLate();
  tappyArrivalTime = moment(new Date(eventDateTime)).add(minutesLate, 'm');
  reason = getReason();
  logResults();
  generateResult();
});

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