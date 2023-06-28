const paisesPorContinente = {
    "americas" : ["EE UU","Colombia","Argentina","Mexico","Brasil"],
    "europa" : ["Francia","España","Austria","Alemania","Italia"],
    "asia" : ["China","Corea del sur","Coreal del norte","India","Japon"],
    "africa" : ["Nigeria","Kenia","Sudafrica", "Marruecos","Egiptio"],
    "oceania" : ["Nueva zelandia","Australia","Fiyi","Samoa","Tonga"],
};  

  const continente = prompt("Ingrese el nombre de un continente: \n americas  \n europa \n asia \n africa \n oceania ");
  

  if (paisesPorContinente.hasOwnProperty(continente)) {
    const paises = paisesPorContinente[continente];
    console.log("Países en ",continente);
    for (let i = 0; i < paises.length; i++) {
      console.log(paises[i]);
    }
  } else {
    console.log("Continente no encontrado.");
  }

  
  
  
  