animalContainer = document.getElementById("animal-container")
input = document.querySelector("input")
  async function getAnimal(){
    fetchAnimal = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    fetchZooAnimal = await fetchAnimal.json()
    addAnimal(fetchZooAnimal)
    
}
/*async function getAnimalArray(){
    fetchAnimalArray = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    fetchZooAnimalArray = await fetchAnimalArray.json()
    addAnimalArray(fetchZooAnimalArray)
    
}

function addAnimalArray(animalsArray){
  
    animalsArray.forEach((animalElArray) => {
        animalArray = document.createElement("animalArray")
        //  count = 0
//   currentAnimal = animals[count]
//   newAnimal = currentAnimal.name
//   console.log(newAnimal)
   
        
    animalArray.innerHTML = `
    <div class="body-container">
    <h1>RANDOM ANIMAL</h1>
    <div class = img-container>
    <img src="${animalElArray.image_link}" alt="" srcset="">
    </div>
    <div class="name-container"> ${animalElArray.name}</div>
    </div> 
   <div class="footer-container">
   <p class= "latin-name"><p>Latin Name: ${animalElArray.latin_name}</p></p>
   <p class="animal-type"><p>Animal Type: ${animalElArray.animal_type} </p></p>
   </div>
    `
  
    animalContainer.appendChild(animalArray);
 })

}*/
function addAnimal(animals){
  
     animals.forEach((animalEl) => {
        animal = document.createElement("animal")
        //  count = 0
//   currentAnimal = animals[count]
//   newAnimal = currentAnimal.name
//   console.log(newAnimal)
   
        
    animal.innerHTML = `
    <div class="body-container">
    <h1>RANDOM ANIMAL</h1>
    <div class = img-container>
    <img src="${animalEl.image_link}" alt="" srcset="">
    </div>
    <div class="name-container"> ${animalEl.name}</div>
    </div> 
   <div class="footer-container">
   <p class= "latin-name"><p>Latin Name: ${animalEl.latin_name}</p></p>
   <p class="animal-type"><p>Animal Type: ${animalEl.animal_type} </p></p>
   </div>
    `
  
    animalContainer.appendChild(animal);
 })

}
function searchName(){
 
    const input = document.getElementById("input");
   
    const animalContainer = document.getElementById("animal-container");
    const inputValue = input.value.toUpperCase();
    console.log(inputValue)
    const animalList = animalContainer.querySelectorAll("animal");
    // console.log(usersList)
    for(let i=0; i < animalList.length; i++){
        const usernameSpanTag = animalList[i].querySelector(".name-container")
        console.log(usernameSpanTag)
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase()
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
        console.log(isMatch)
        if(isMatch){
            animalList[i].style.display ="block"
        } else{
            animalList[i].style.display ="none"
        }
    }
  
    }

    

getAnimal()