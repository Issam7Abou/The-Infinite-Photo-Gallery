//storing html elements in js variables
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

//variable to store the api data
let photoArray = [];

// Variables for Unsplash API
const count = 10;
const apiKey = '2EpJIA2Yj6aUHkIAblKaxxIZo6PA3JFdlaBrHkuOOGM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//this functions will set the attributes for the <a> and <img> tags.
function setAttribute(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//function to create links "<a>" and photos "<img>" and use DOM 
function displayPhotos() {
  //Runs the function for every object in the photoArray
  photoArray.forEach((photo) => {
  //this will create an <a> tag to open Unsplash site
  const item = document.createElement('a');
  setAttribute(item, {
    href: photo.links.html,
    target: '_blank'
  });
  //this will create an <img> tag to display the actual photo
  const img = document.createElement('img');
  setAttribute(img, {
    src: photo.urls.regular,
    alt: photo.alt_description,
    title: photo.alt_description
  })
  //and this will put <img> inside <a> and then will put both inside image-container
  item.appendChild(img);
  imageContainer.appendChild(item);
});
}

// this async function will get tge data from the api server
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    displayPhotos();
  } catch (error) {
    
  }
}

//To call the api function
getPhotos();