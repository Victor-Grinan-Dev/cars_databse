let formInput = document.querySelector("#inputData");
let resultTable = document.querySelector(".result");

class Car {
  constructor(licence, maker, model, owner, price, color) {
    this.licence = licence;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}
const carArray = [
  { licence: "", maker: "", model: "", owner: "", price: "", color: "" },
];

const addCar = (event) => {
  event.preventDefault();
  let licence = document.querySelector("#licence").value;
  let maker = document.querySelector("#maker").value;
  let model = document.querySelector("#model").value;
  let owner = document.querySelector("#owner").value;
  let price = Number(document.querySelector("#price").value);
  let color = document.querySelector("#color").value;

  let newCar = new Car(licence, maker, model, owner, price, color);

  carArray.push(newCar);
  console.table(carArray);
  console.log("form was submitted", licence, maker, model, owner, price, color);
  makeTable();
};

const makeTable = () => {
  let result = "<table border=1 >";
  result += "<tr>";
  for (const key in carArray[0]) {
    result += "<th>" + key + "</th>";
  }
  result += "</tr>";
  for (let i = 1; i < carArray.length; i++) {
    result += "<tr>";
    for (const key in carArray[i]) {
      result += "<td>" + carArray[i][key] + "</td>";
    }
    result += "</tr>";
  }
  result += "</table>";
  resultTable.innerHTML = result;
  console.log(result);
};

makeTable();

formInput.addEventListener("submit", addCar);