let locationInfo = document.getElementById('userInput');
let button = document.getElementById('submit');
let closestStoreDiv = document.getElementById('closestStore');
let closestStoreAddressDiv = document.getElementById('closestStoreAddress');
let closestStoreCityDiv = document.getElementById('closestStoreCity');
let closestStoreStateDiv = document.getElementById('closestStoreState');

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
    }).then(finalData => {
      closestStoreDiv.innerHTML = finalData.store[0];
      closestStoreAddressDiv.innerHTML = finalData.store[2];
      closestStoreCityDiv.innerHTML = finalData.store[3];
      closestStoreStateDiv.innerHTML = finalData.store[4];
    })
  }).catch(err => console.log('error in API call'));
}
