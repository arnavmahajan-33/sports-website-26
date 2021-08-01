var firebaseConfig = {
  apiKey: "AIzaSyD0Z04oZveDjtS3L0itxzENdIgY_mhjEv0",
  authDomain: "wimbledonresults.firebaseapp.com",
  databaseURL: "https://wimbledonresults-default-rtdb.firebaseio.com",
  projectId: "wimbledonresults",
  storageBucket: "wimbledonresults.appspot.com",
  messagingSenderId: "357498735767",
  appId: "1:357498735767:web:ea88612e676017cfaa6dd2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('datavalue').addEventListener('submit', submitForm);
function submitForm(e) {
  e.preventDefault();
  var year = getInputVal('year');
  readResults(year);
}
function getInputVal(id) {
  return document.getElementById(id).value;
}

function readResults(year) {

  var results = firebase.database().ref(year);
  results.on('value', (data) => {
    var ranks = data.val();
    var finalranks = ranks.toString().split(',');
    document.getElementById("result1").innerHTML = "<br > 1." + finalranks[1];
    document.getElementById("result2").innerHTML = "<br > 2." + finalranks[2];
  })
}