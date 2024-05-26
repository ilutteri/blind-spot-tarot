
const  getDataCartas = () => {
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
        let src = `https://tarotsmith.com/images/crowley-thoth/${formatImgIndex(cartas[randomIndex].value_int)}.jpg`;

        // document.getElementById(`card-name-${i}`).textContent = cartas[randomIndex].name;
       // document.getElementById(`img-${i}`).setAttribute('src', src);
        setSrcByClass(`img-${i}`, src );
        setTextByClass(`card-name-${i}`, cartas[randomIndex].name );
        setTextByClass(`card-text-${i}`, cartas[randomIndex].desc )
        randomCheck.push(randomIndex);
    }
}

const formatImgIndex = (numero) => {
    
    if(numero <= 9)
        {
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

const setTextByClass = (className, text) => {
    let elems = document.querySelectorAll("." + className);
  for( let i = 0; i < elems.length; i++ ){
    elems[i].textContent = text; // src must be a full adress
   // or, if you want to set a relative adress...
   // elems[i].setAttribute('src', src);
  }

}


const setSrcByClass = (className, src) => {
 
  let elems = document.querySelectorAll("." + className);
  for( let i = 0; i < elems.length; i++ ){
    elems[i].src = src; // src must be a full adress
   // or, if you want to set a relative adress...
   // elems[i].setAttribute('src', src);
  }
}

const flipCardsRandomly = () =>{

    document.querySelectorAll('.random-flip').forEach(img => {
        if (Math.random() > 0.5) {
            console.log("entro")
            img.classList.add('flip');
        }
    });
};


const clickImgEvent = () => {

    document.querySelectorAll('.clickableImage').forEach(function(image) {
                image.addEventListener('click', function() {
                    const targetId = this.getAttribute('data-target');
                    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
                });
            });


}

const scrollToSpread = () => {
    document.getElementById('spread').scrollIntoView({ behavior: 'smooth' });
}



getDataCartas()
clickImgEvent()
// flipCardsRandomly()


