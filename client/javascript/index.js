let locationInfo = document.getElementById('userInput');
let button = document.getElementById('submit');
let closestStoreDiv = document.getElementById('closestStore')

button.onclick = () => {
  let locationParam = locationInfo.value.split(" ").join('+');
  fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + locationParam +'&key=AIzaSyDy99yamlo6hMVjYfIC5IVNuomaitOMFPg', {
    method: "POST"
  }).then(response => {
    return response.json();
    }
  ).then(body => {
    fetch('/nearestStore', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(body.results[0].geometry.location)
    }).then(response => {
      return response.json();
    }
  ).then(returnedStuff => console.log(returnedStuff))
  }).catch(err => console.log('error in API call'));
}
