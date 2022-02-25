//alert("coño!!!")

// car object
class Car {
    constructor(licence, maker, model, owner, price, color) {
        this.licence = licence,
        this.maker = maker,
        this.model = model,
        this.owner = owner,
        this.price = price,
        this.color = color;
    }
}

//dummy database
const database = []

const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0
];

const cars = [
    ["Toyota", "Altima"], ["Honda", "Accord"], ["Chevrolet", "Malibu"], ["Honda", "Civic"], ["Toyota", "Corolla"], ["Ford", "Focus"], ["Ford", "Explorer"], ["Chevrolet", "Impala"]
]

const names = [
    "Robert", "Julia", "Maria", "Joseph", "Mark", "Karla"
]

const lastNames = [
    "Roberts", "Smith", "Jhonson", "Williams", "Brown", "Jones"
]

const colors = [
    "red", "grey", "silver", "black", "white", "orange", "green", "blue", "yellow", "golden"
]

//Declarations
let finalHtmlQuote = `<tr><td>licence</td><td>maker</td><td>model</td><td>owner</td><td>price</td><td>color</td></tr>`;


// DOM reading
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const searchResult = document.querySelector("#searchResult");

let licence = document.querySelector("#licence").value;
let maker = document.querySelector("#maker").value;
let model = document.querySelector("#model").value;
let owner = document.querySelector("#owner").value;
let price = document.querySelector("#price").value;
let color = document.querySelector("#color").value;

const addBtn = document.querySelector("#add");
const fillBtn = document.querySelector("#fill");
const resetBtn = document.querySelector("#reset");

const databaseTable = document.querySelector("#database");
databaseTable.innerHTML = finalHtmlQuote;

//functions
const randomIndex = (array) => Math.floor(Math.random() * (array.length));

const randomPrice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)    
}

const pickThree = (array) => {
    let result = "";      
    for (let i = 0; i < 3; i++){
        result += array[randomIndex(array)];
    }
    return result;
}

const licenceGen = () => {
    const chars = pickThree(letters);
    const digits = pickThree(nums);
    return `${chars}-${digits}`
};

const peopleGen = () => {
    const fName = names[randomIndex(names)];
    const lName = lastNames[randomIndex(lastNames)]; 
    return `${fName} ${lName}`;
}

const createDummyData = () => {
    let maker;
    let model;
    [maker, model] = cars[randomIndex(cars)];
    const licence = licenceGen();
    const owner = peopleGen();
    const price = randomPrice(500, 2000);
    const color = colors[randomIndex(colors)]
    const newCar = new Car(licence, maker, model, owner, price, color);
    populateDatabase(newCar);
}

const populateDatabase = (object) => {
    database.push(object);
}
 
const displayDatabaseHTML = () => {
    //reset database table html
    databaseTable.innerHTML = ""
    finalHtmlQuote = `<tr><td>licence</td><td>maker</td><td>model</td><td>owner</td><td>price</td><td>color</td></tr>`;

    //repopulate database table html
    database.forEach((element) => {
        finalHtmlQuote += `<tr><td>${element.licence}</td><td>${element.maker}</td><td>${element.model}</td><td>${element.owner}</td><td>${element.price}€</td><td>${element.color}<td></tr>`
    });

    databaseTable.innerHTML = finalHtmlQuote;

    return finalHtmlQuote;
}

const actualReset = () => {
    licence = document.querySelector("#licence").value = "";
    maker = document.querySelector("#maker").value = "";
    model = document.querySelector("#model").value = "";
    owner = document.querySelector("#owner").value = "";
    price = document.querySelector("#price").value = "";
    color = document.querySelector("#color").value = "";
}

const enterValues = (event) => {
    event.preventDefault();
    const newCar = new Car(licence, maker, model, owner, price, color);
    populateDatabase(newCar)
    displayDatabaseHTML();
    actualReset();
}

const reset = (event) => {
    event.preventDefault();
    actualReset()
}

//START ACTION
//get some data in the table ready
const fillDummyData = () =>{
    for (let i = 0; i < 3; i++){
        createDummyData();   
    };
    displayDatabaseHTML()
}

const searchInDatabase = () => {
    if (database.length > 0){
        for (let i = 0; i < database.length; i++){
            console.log(searchInput.value, database[i].licence)
            console.log(searchInput.value == database[i].licence)
            if (searchInput.value == database[i].licence){
                searchResult.textContent = `this car belongs to ${database[i].owner}`;
            } else {
                searchResult.textContent = "Data not found"
            }
        }
    } else {
        searchResult.textContent = "Database empty"
    }
    searchResult.classList.remove("invisible");
}

//evente listeners
fillBtn.addEventListener("click", fillDummyData);
addBtn.addEventListener("click", enterValues);
resetBtn.addEventListener("click", reset);
searchBtn.addEventListener("click", searchInDatabase);

