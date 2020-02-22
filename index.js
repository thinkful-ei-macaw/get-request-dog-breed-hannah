
function getDogBreedImage(){
  fetch(`https://dog.ceo/api/breed/${breedUserInput()}/images/random`)
  .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Breed not found.'));
}

function breedUserInput(){
  return $('.breed-input').val();
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogBreedImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});