searchBtn = document.querySelector(".fa-search")
 nameContainer = document.querySelector(".name-container")
 input = document.querySelector("input")
 console.log(input)
async function getAnimal(){
    fetchAnimal = await fetch ("https://zoo-animal-api.herokuapp.com/animals/rand")
    fetchZooAnimal = await fetchAnimal.json()
    nameContainer.innerHTML = `<p class= "name"> ${fetchZooAnimal.name} </P>` 
   imgContainer = document.querySelector(".img-container").innerHTML =`.<img src="${fetchZooAnimal.image_link}" alt="" srcset="">`
 latinName = document.querySelector(".latin-name").innerHTML = `<p>Latin Name: ${fetchZooAnimal.latin_name}</p>`
 animalType = document.querySelector(".animal-type").innerHTML =`<p>Animal Type: ${fetchZooAnimal.animal_type} </p>`


}

getAnimal()
function searchName(){
    getAnimal()
    inputValue = input.value;
    Container = document.querySelector(".name-container")
        
     for (let i = 0; i < Container.length; i++) {
        nameEl = Container[i].fetchZooAnimal.name

        nameTagValue= nameTag.innerText
        console.log(nameEl)
        
    }
}
