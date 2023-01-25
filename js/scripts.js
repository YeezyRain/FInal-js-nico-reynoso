let vacationCalc = document.getElementById('vacationCalc')

vacationCalc.addEventListener('submit', calcExpenses)

function getValues() {
  let destiny = document.getElementById('destiny').value,
      budget = document.getElementById('budget').value,
      transport = document.getElementById('transport').value,
      acomodation = document.getElementById('acomodation').value,
      food = document.getElementById('food').value

  return { destiny, budget, acomodation, transport, food }    
}

function calcExpenses(e) {
  e.preventDefault();
  
  const  { destiny, budget, acomodation, transport,  food } = getValues()

  let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food)
  let balance = budget - expenses

  UI(destiny, budget, balance)
}

function UI(destiny, budget, balance) {
  let result = document.getElementById('result')
  let dataPrint = document.createElement('div')
  
   dataPrint.innerHTML += `
    <div class="container-data row">
      <div class="col s4">
        <h6>${destiny}</h6>
      </div>
      <div class="col s4">
        <h6>${budget}</h6>
      </div>
      <div class="col s4">
        <h6 id="balance"><strong>${balance}</strong></h6> 
      </div>
    </div>
  `
  result.appendChild(dataPrint) 

  reset()
}

function reset() {
  document.getElementById('vacationCalc').reset()
}

function balanceColours() {

  const { balance} = getValues()


    if(balance < 0) {
      document.getElementById('balance').classList.add('red')
    }
    else if(balance > 0) {
      document.getElementById('balance').classList.add('green')
    }
}

// Js y fetch ejemplos!

const cars = `
[
    {
        "modelo": "ford mustang",
        "Produccion": 2010,
        "Km": 12000
    },

    {
        "modelo": "honda accord",
        "Produccion": 2021,
        "Km": 4500
    },

    {
        "modelo": "volkswagen Golf",
        "Produccion": 2016,
        "Km": 45000
    }
    
]
`;

console.log (typeof cars);

const jsonData = JSON.parse(cars);
console.log(typeof jsonData);

const carrosNuevos = jsonData.filter(
    (carro) => carro.produccion > 2010 && carro.km < 30000
);

const newCars = JSON.stringify(carrosNuevos);
console.log(typeof newCars);

const fs = require ('fs');

const carrosNuevo = {
    modelo: 'mini cooper',
    produccion: 2022,
    km: 500
}

const newCar = JSON.stringify (carrosNuevo); 

fs.writeFile('cars,json', newCar, (error)=>{
    if(error) throw error;
    console.log('informacion recibida');  
})

// fetch

const url = ('https://pokeapi.co/api/v2/pokemon/1/')

fetch(url)
.then(response => response.json)
.then(data => {

  let element = document.getElementById('elem')
  element.innerHTML = `
  <p>${data.name}</p>
  <p>${data.order}</p>
  <img src='${data.sprites.front_default}'/>
  `; 
 
  console.log(data)
}) 
.catch(err=>console.log(err))