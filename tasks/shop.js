console.clear();

const valiuta = "EUR";
const items = [
  {
    name: "Bananas",
    price: 2,
    inStock: 10,
  },

  {
    name: "Agurkas",
    price: 3,
    inStock: 10,
  },

  {
    name: "Pomidoras",
    price: 1.57,
    inStock: 30,
  },
  {
    name: "Arbuzas",
    price: 2,
    inStock: 5,
  },
  {
    name: "Melionas",
    price: 20,
    inStock: 3,
  },
];

function shop(goods, currency) {
  console.log("MUSU PARDUOTUVE:");
  console.log("----------------------------------------------------");
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    console.log(
      `${items[i].name} kainuoja ${items[i].price.toFixed(
        2
      )} ${valiuta} ir turime ju ${items[i].inStock} vienetu.`
    );
    totalPrice += items[i].price * items[i].inStock;
  }
  console.log("-----------------------------------------------------");
  console.log(`Viso asortimento kaina: ${totalPrice.toFixed(2)} ${valiuta}.`);
}

shop(items, valiuta);

// function shop(items, currency) {
//   const valiuta = " EUR";
//   const quantity = " vnt.";
//   const shopName = "Musu Parduotuve";
//   console.log(shopName);
//   console.log("--------------------");
//
// }

// shop(items, valiuta);

// // Item names
// const prekes1 = prekes[0].name;
// const prekes2 = prekes[1].name;
// const prekes3 = prekes[2].name;
// console.log(prekes1);
// console.log(prekes2);
// console.log(prekes3);

// // Item cost
// const currency1 = prekes[0].price + valiuta;
// const currency2 = prekes[1].price + valiuta;
// const currency3 = prekes[2].price + valiuta;
// console.log(currency1);
// console.log(currency2);
// console.log(currency3);

// // Item quantity
// const inStock1 = prekes[0].inStock + quantity;
// const inStock2 = prekes[0].inStock + quantity;
// const inStock3 = prekes[0].inStock + quantity;
// console.log(inStock1);
// console.log(inStock2);
// console.log(inStock3);

// console.log("<Musu Parduotuve:>");

// console.log("_______________________");
// console.log("1) Bananas kainuoja 2.00 EUR ir turime ju 10 vnt");
// console.log("2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vnt");
// console.log("3) Bananas kainuoja 1.57 EUR ir turime ju 30 vnt");
// console.log("_______________________");
// console.log("Viso asortimento kaina: 97.1");

// console.log(prekes.name);
