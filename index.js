'use scrict'

let numberOfDogs = 3; 

function updateDogNumber(){
    numberOfDogs = document.getElementById("dogQuantity").value; 
    console.log(numberOfDogs); 
}

function getDogImages(){
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then( response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('you done messed up!')); 
}




function watchForm(){
    $('form').submit( function(event){
        updateDogNumber(); 
        event.preventDefault(); 
        getDogImages(); 
    });
}

$(function (){
    console.log('app loaded! waiting for submit');
    watchForm(); 
})