// // Define the Crowley Tarot cards and their names
// const cards = [
//     { name: "The Fool", value: "0" },
//     { name: "The Magician", value: "1" },
//     { name: "The High Priestess", value: "2" },
//     // Add more cards to the array
//   ];
  
//   // Shuffle the card array
//   cards.sort(() => Math.random() - 0.5);
  
//   // Assign random card names to each span element
// const cargarCartas = () => {
//     let mazo = 16;
//     let tirada = [];

//     for(let i = 0; i < tirada.length; i++ ){

//         document.getElementById(`card-name-${i}`).textContent = cards[i].name;

//         }

// }

//   document.getElementById("card-name-0").textContent = cards[0].name;
//   document.getElementById("card-name-1").textContent = cards[1].name;
//   document.getElementById("card-name-2").textContent = cards[2].name;
//   document.getElementById("card-name-0").textContent = cards[0].name;
//   document.getElementById("card-name-1").textContent = cards[1].name;
//   document.getElementById("card-name-2").textContent = cards[2].name;
  
//   // Add more code to populate the remaining cards in the Celtic Cross spread

//   const constPruebaFetch = () => {


//   fetch("https://tarotapi.dev/api/v1/cards/random?n=10")
//   .then(function (response) {
//     console.log(response.json());
//     return response.json();
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle what went wrong
//   });

// }

// constPruebaFetch();



const  dataCartas = () => {
        fetch('https://tarotapi.dev/api/v1/cards')
        .then(response => response.json())
        .then(cardsData => {
            // console.log(cardsData.cards)
            // Loop through the cards array and console.log each card's data
            // for (let i = 0; i < cardsData.cards.length; i++) {
            // console.log(cardsData.cards[i].name_short);
            // console.log(cardsData.cards[i].value_int);
            // console.log(cardsData.cards[i].meaning_up);
            // And so on...
            // }
            asignarCartas(cardsData.cards);
        })
        .catch(error => console.error('Error: ', error));
}
    

const asignarCartas = (cartas = []) => {
    console.log(cartas);
    
    let randomCheck = [];
        
    for(let i = 0; i < 4; i++ ){
        const randomIndex = getRandomNumber(randomCheck);
        document.getElementById(`card-name-${i}`).textContent = cartas[randomIndex].name;
        document.getElementById(`img-${i}`).setAttribute('src', `https://tarotsmith.com/images/crowley-thoth/${formatImgIndex(cartas[randomIndex].value_int)}.jpg`);
        randomCheck.push(randomIndex);
    }
}

const formatImgIndex = (numero) => {
    
    if(numero <= 9)
        {
            console.log("0" + numero);
            return "0" + numero;
        }
    return numero;
}

const getRandomNumber = (pastRandoms = []) => {

    let random = Math.floor(Math.random() * 22);
    if(pastRandoms.includes(random)){
        random = getRandomNumber(pastRandoms);
    }
    return random;

}

dataCartas()
