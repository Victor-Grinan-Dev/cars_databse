//alert("coño!!!")

//dummy database
const database = []

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

// DOM reading
let licence = document.querySelector("#licence").value;
let maker = document.querySelector("#maker").value;
let model = document.querySelector("#model").value;
let owner = document.querySelector("#owner").value;
let price = document.querySelector("#price").value;
let color = document.querySelector("#color").value;
let addBtn = document.querySelector("#add");
let databaseTable = document.querySelector("#database");
let resetBtn = document.querySelector("#reset");
databaseTable.innerHTML = finalHtmlQuote;

//functions
const enterValues = (event) => {
    event.preventDefault();
    const newCar = new Car(licence, maker, model, owner, price, color);
    database.push(newCar);
    console.log(database);
}
const tableHeader = `<tr><td>licence</td><td>maker</td><td>model</td><td>owner</td><td>price</td><td>color</td></tr>`

database.forEach(element => {
    let finalHtmlQuote;
    finalHtmlQuote += `<tr><td>${element.licence}</td><td>${element.maker}</td><td>${element.model}</td><td>${element.owner}</td><td>${element.price}</td><td>${element.color}<td></tr>`;
    console.log(finalHtmlQuote)
});

databaseTable.innerHTML = finalHtmlQuote;

const reset = (event) => {
    event.preventDefault();
    licence = document.querySelector("#licence").value = "";
    maker = document.querySelector("#maker").value = "";
    model = document.querySelector("#model").value = "";
    owner = document.querySelector("#owner").value = "";
    price = document.querySelector("#price").value = "";
    color = document.querySelector("#color").value = "";
}

//evente listeners
addBtn.addEventListener("click", enterValues);
resetBtn.addEventListener("click", reset);

//overrun html default values just for the test
licence = document.querySelector("#licence").value = "";
maker = document.querySelector("#maker").value = "";
model = document.querySelector("#model").value = "";
owner = document.querySelector("#owner").value = "";
price = document.querySelector("#price").value = "";
color = document.querySelector("#color").value = "";

const searchResult = document.querySelector("#searchResult")//(<p>) where the result of the search displays 
const search = () => {
    const searching = document.querySelector("#searchInput").value
    console.log(searching)
    //search from dummy database

    database.forEach((car) => {
        if (car.licence === searching){
            searchResult.innerText = "car.owner";
            searchResult.classList.remove("invisible");
        }else{
            searchResult.innerText = "no match found";
            searchResult.classList.remove("invisible");
        }
    });  
}

const searching = document.querySelector("#searchInput").value
const searchBtn = document.querySelector("#searchBtn").addEventListener("click", search)

