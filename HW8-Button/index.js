const firstButton = document.getElementById("firstButton")
const secondButton = document.getElementById("secondButton")

firstButton.addEventListener("click",function(){buttonClicked(0);});
secondButton.addEventListener("click",function(){buttonClicked(1);});

var audio = new Audio("explodingPlanet.mp3")
let counter = 1;

let planetName, hazard, firstObservedDate, hazardStatus
let data
let apiURL = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Ys2vLUm8ayFkz9NFGKrnuSp2c756WdaIwSbleWG6"

let funfact=document.getElementById("funFact")

//https://stackoverflow.com/questions/9422974/createelement-with-id

//https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/
async function loadData(url){
    const response = await fetch(url)
    data = await response.json()
    console.log("data: ", data)
}

loadData(apiURL)

function buttonClicked(buttonPressed) {
    let randomVal = Math.floor(Math.random()*2);
    if (buttonPressed == randomVal) {
        console.log("Positive effect!");
        if (data){
            const randInteger = Math.floor(Math.random() * 20);
            planetName = data.near_earth_objects[randInteger].name_limited
            hazard = data.near_earth_objects[randInteger].is_potentially_hazardous_asteroid
            firstObservedDate = data.near_earth_objects[randInteger].orbital_data.first_observation_date
            console.log("name: ", planetName, "; hazard: ", hazard, "; 1st obs date: ", firstObservedDate)

            if (hazard==false){
                hazardStatus=" is NOT hazardous "
            }else if (hazard==true){
                hazardStatus=" IS hazardous "
            }

            funfact.innerHTML= "Did you know: "+planetName.toString() + hazardStatus.toString() + "and was first observed on "+firstObservedDate.toString()
        }
    } else {
        if (counter <= 5) {
            console.log(counter);
            let planetToDestroy = document.getElementById("planet"+counter);
            planetToDestroy.style.animation = "planetFall 10s";
            planetToDestroy.style.opacity = 0;
            audio.play();
            console.log("Negative effect!");
            counter += 1;
        }   
    }
}
